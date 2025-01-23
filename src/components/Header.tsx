import { FC } from 'react';
import Navigation from './Navigation';
import { NavLink } from 'react-router-dom';

interface HeaderProps {
    theme: boolean;
    toggleTheme: () => void;
}

const Header: FC<HeaderProps> = ({ theme, toggleTheme }) => {
    return (
        <header className={`ph-header ${theme ? 'ph-header-light' : 'ph-header-dark'}`}>
            <div className={`ph-header__logo ${theme ? 'ph-header__logo-light' : 'ph-header__logo-dark'}`}>ProductHub</div>
            <div className="ph__wrapper">
                <button onClick={toggleTheme} className="ph__theme-btn">
                    {theme ? 'Dark' : 'Light'}
                </button>

                <Navigation theme={theme} />

                <NavLink to="/cart" className={({ isActive }) => `ph__cart ${isActive ? 'ph__cart-active' : ''}`}>
                    Cart <span className="ph__cart-count">(8)</span>
                </NavLink>
            </div>
        </header>
    );
};

export default Header;
