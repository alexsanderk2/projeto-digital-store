import { useState } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import Logo from '../Logo/Logo';
import miniCart from '../../assets/mini-cart.svg';
import './Header.css';

const links = [
  { text: 'Home', to: '/' },
  { text: 'Produtos', to: '/products' },
  { text: 'Categorias', to: '/categorias' },
  { text: 'Meus Pedidos', to: '/pedidos' },
];

const Header = () => {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const handleSearch = (event) => {
    event.preventDefault();
    const filter = search.trim();
    navigate(filter ? `/products?filter=${encodeURIComponent(filter)}` : '/products');
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header__top">
          <Logo />

          <form className="header__search" onSubmit={handleSearch} role="search">
            <input
              type="text"
              placeholder="Pesquisar produto..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              aria-label="Pesquisar produto"
            />
            <button type="submit" aria-label="Buscar">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="7" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </button>
          </form>

          <div className="header__actions">
            <Link to="/cadastro" className="header__signup">Cadastre-se</Link>
            <Link to="/login" className="header__login">Entrar</Link>
          </div>

          <div className="header__cart">
            <img src={miniCart} alt="Carrinho de compras" />
            <span className="header__cart-badge">2</span>
          </div>
        </div>

        <nav className="header__nav">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) => (isActive ? 'header__link active' : 'header__link')}
            >
              {link.text}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
