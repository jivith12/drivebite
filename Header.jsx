import React from "react";
import { ShoppingBag, Search, Sun, Moon } from "lucide-react";

export default function Header({ search, setSearch, cartCount, darkMode, setDarkMode, onCart }) {
  return (
    <header className="header">
      <div className="header-inner">
        <div className="logo">
          <div className="logo-icon">Q</div>
          <div><strong>QuickBite</strong><span>DRIVE-THROUGH</span></div>
        </div>

        <nav><a href="#menu">Menu</a><a href="#menu">Popular</a><a href="#menu">Deals</a></nav>

        <div className="header-actions">
          <div className="search-box">
            <Search size={18} />
            <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search food..." />
          </div>

          <button className="icon-button" onClick={() => setDarkMode(!darkMode)} title="Toggle theme">
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <button className="cart-button" onClick={onCart}>
            <ShoppingBag size={21} />
            <span>Cart</span>
            {cartCount > 0 && <b>{cartCount}</b>}
          </button>
        </div>
      </div>
    </header>
  );
}