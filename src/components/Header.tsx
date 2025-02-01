import { FC } from 'react';
import Navigation from './Navigation';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { toggleTheme } from '../store/productsSlice';
import { Product } from '../types/types';

interface HeaderProps {
    items: Product[];
    theme: boolean;
}

const Header: FC<HeaderProps> = ({ theme, items }) => {
    const dispatch = useDispatch();

    const cartNumber = items.reduce((total, item) => total + item.quantity, 0);

    return (
        <header className={`ph-header ${theme ? 'ph-header-light' : 'ph-header-dark'}`}>
            <div className={`ph-header__logo ${theme ? 'ph-header__logo-light' : 'ph-header__logo-dark'}`}>ProductHub</div>
            <div className="ph__wrapper">
                <button onClick={() => dispatch(toggleTheme())} className="ph__theme-btn">
                    {theme ? 'Dark' : 'Light'}
                </button>

                <Navigation theme={theme} />

                <NavLink to="/cart" className={({ isActive }) => `ph__cart ${isActive ? 'ph__cart-active' : ''}`}>
                    Cart {cartNumber > 0 && <span className="ph__cart-count">{cartNumber}</span>}
                </NavLink>
            </div>
        </header>
    );
};

export default Header;
