import { useState } from 'react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
];

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        <a href="#home" className="text-lg font-bold text-accent-dark">
          Definture Inc.
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-gray-700 hover:text-accent transition-colors border-b-2 border-transparent hover:border-accent pb-1"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          aria-label={isMenuOpen ? 'Close Menu' : 'Open Menu'}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((open) => !open)}
          className="md:hidden flex flex-col justify-center gap-1.5 w-8 h-8"
        >
          <span
            className={`block h-0.5 w-6 bg-accent-dark transition-transform ${
              isMenuOpen ? 'translate-y-2 rotate-45' : ''
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-accent-dark transition-opacity ${
              isMenuOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-accent-dark transition-transform ${
              isMenuOpen ? '-translate-y-2 -rotate-45' : ''
            }`}
          />
        </button>
      </div>

      {isMenuOpen && (
        <nav className="md:hidden bg-white border-t border-gray-100">
          <div className="flex flex-col px-6 py-4 gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-base font-medium text-gray-700 hover:text-accent transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}

export default Header;
