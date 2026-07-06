import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const navLinks = [
  { label: 'Services', to: '/services' },
  { label: 'About', to: '/about' },
  { label: 'Approach', to: '/approach' },
  { label: 'Contact', to: '/contact' },
];

function navLinkClasses({ isActive }: { isActive: boolean }) {
  return `relative pb-1 text-sm text-ink transition-colors hover:text-ink after:absolute after:left-0 after:-bottom-0.5 after:h-px after:bg-brass after:transition-all ${
    isActive ? 'after:w-full' : 'after:w-0 hover:after:w-full'
  }`;
}

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="border-b border-hairline bg-linen">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6">
        <NavLink to="/" className="font-serif text-xl font-semibold text-ink">
          Definture
        </NavLink>

        <nav className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => (
            <NavLink key={link.to} to={link.to} className={navLinkClasses}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <button
          type="button"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((open) => !open)}
          className="flex h-8 w-8 flex-col items-end justify-center gap-1.5 md:hidden"
        >
          <span
            className={`block h-px bg-ink transition-all ${isMenuOpen ? 'w-6 translate-y-2 rotate-45' : 'w-6'}`}
          />
          <span className={`block h-px bg-ink transition-opacity ${isMenuOpen ? 'opacity-0' : 'w-4'}`} />
          <span
            className={`block h-px bg-ink transition-all ${isMenuOpen ? 'w-6 -translate-y-2 -rotate-45' : 'w-6'}`}
          />
        </button>
      </div>

      {isMenuOpen && (
        <nav className="border-t border-hairline bg-linen md:hidden">
          <div className="flex flex-col px-6 py-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center py-3 text-base text-ink"
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}

export default Header;
