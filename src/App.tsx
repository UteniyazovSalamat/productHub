import { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Cart from './pages/Cart';
import { RootState } from './store';

function App() {
    const items = useSelector((state: RootState) => state.products.items);
    const theme = useSelector((state: RootState) => state.products.theme);

    useEffect(() => {
        localStorage.setItem('items', JSON.stringify(items));
    }, [items]);

    return (
        <Router>
            <div className={`ph ${theme ? 'ligth-theme' : 'dark-theme'}`}>
                <Header theme={theme} items={items} />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/products" element={<Products items={items} />} />
                    <Route path="/cart" element={<Cart items={items} />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
