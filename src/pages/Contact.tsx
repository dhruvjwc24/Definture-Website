function Contact() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-24 text-center">
      <h1 className="font-serif text-4xl font-semibold text-ink sm:text-5xl">Contact</h1>
      <p className="mt-4 text-lg text-ash">
        Reach out directly — no forms, no queue.
      </p>

      <div className="mt-12 flex flex-col gap-4 border-t border-hairline pt-12">
        <p className="text-base text-ink">9113 Santayana Drive, Fairfax, VA 22031</p>
        <p className="text-base text-ink">
          <a href="tel:+15714802284" className="hover:text-brass">
            (571) 480-2284
          </a>
        </p>
        <p className="text-base text-ink">
          <a href="mailto:info@definture.com" className="hover:text-brass">
            info@definture.com
          </a>
        </p>
      </div>
    </div>
  );
}

export default Contact;
