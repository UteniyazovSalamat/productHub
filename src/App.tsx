import { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import { products, updateThemeByTime } from './utils/dataUtils';
import Cart from './pages/Cart';
import { Product } from './types/types';

function App() {
    const [items, setItems] = useState<Product[]>(JSON.parse(localStorage.getItem('items') ?? '') || products);
    const [isLightTheme, setIsLightTheme] = useState(updateThemeByTime());

    useEffect(() => {
        localStorage.setItem('items', JSON.stringify(items));
    }, [items]);

    const increaseQuantity = (id: number) => {
        setItems((prevItems) => prevItems.map((item) => (item.id === id ? { ...item, quantity: item.quantity + 1 } : item)));
    };

    const resetQuantity = (id: number) => {
        setItems((prevItems) => prevItems.map((item) => (item.id === id ? { ...item, quantity: 0 } : item)));
    };

    const toggleTheme = () => {
        setIsLightTheme((prevTheme) => !prevTheme);
    };
    return (
        <Router>
            <div className={`ph ${isLightTheme ? 'ligth-theme' : 'dark-theme'}`}>
                <Header theme={isLightTheme} toggleTheme={toggleTheme} />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/products" element={<Products items={items} increaseQuantity={increaseQuantity} resetQuantity={resetQuantity} />} />
                    <Route path="/cart" element={<Cart items={items} />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
