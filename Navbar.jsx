import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav aria-label="Main navigation" className="navbar">
      <span className="nav-brand">Smriddhi Gupta</span>

      <button
        className="nav-toggle"
        aria-expanded={open}
        aria-controls="nav-links"
        aria-label={open ? 'Close menu' : 'Open menu'}
        onClick={() => setOpen((prev) => !prev)}
      >
        {open ? '✕' : '☰'}
      </button>

      <div id="nav-links" className={`nav-links ${open ? 'nav-links-open' : ''}`}>
        <NavLink to="/" end className={({ isActive }) => (isActive ? 'active' : '')} onClick={() => setOpen(false)}>
          Home
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')} onClick={() => setOpen(false)}>
          About
        </NavLink>
        <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : '')} onClick={() => setOpen(false)}>
          Contact
        </NavLink>
        <ThemeToggle />
      </div>
    </nav>
  );
}

export default Navbar;