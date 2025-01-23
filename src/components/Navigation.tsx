import { FC } from 'react';
import { navLinks } from '../utils/dataUtils';
import { NavLink } from 'react-router-dom';

interface NavigationProps {
    theme: boolean;
}

const Navigation: FC<NavigationProps> = ({ theme }) => {
    return (
        <nav className="ph__nav">
            {navLinks.map((link) => (
                <NavLink key={link.name} to={link.path} className={({ isActive }) => (isActive ? (theme ? 'nav-link-active-light' : 'nav-link-active-dark') : theme ? 'nav-link' : 'nav-link-dark')}>
                    {link.name}
                </NavLink>
            ))}
        </nav>
    );
};

export default Navigation;
