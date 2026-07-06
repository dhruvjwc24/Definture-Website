function Footer() {
  return (
    <footer className="border-t border-hairline-dark bg-ink">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-6 py-16 text-center">
        <span className="font-serif text-lg font-semibold text-linen">Definture</span>
        <p className="text-sm text-sand">9113 Santayana Drive, Fairfax, VA 22031</p>
        <p className="text-sm text-sand">
          <a href="tel:+15714802284" className="link-underline hover:text-brass">
            (571) 480-2284
          </a>
        </p>
        <p className="text-sm text-sand">
          <a href="mailto:info@definture.com" className="link-underline hover:text-brass">
            info@definture.com
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
