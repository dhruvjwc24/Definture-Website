function About() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-24">
      <h1 className="font-serif text-4xl font-semibold text-ink sm:text-5xl">About</h1>
      <div className="mt-8 flex flex-col gap-6 text-lg text-ash">
        <p>
          Definture is an IT, security, and data consulting firm. We work with
          organizations who need senior expertise applied directly to their environment —
          not a framework, not a methodology deck, the actual work.
        </p>
        <p>
          Our practice spans information security, digital transformation, data and AI,
          and management consulting. Most of our engagements touch more than one of
          these, because in practice they rarely come apart cleanly — a security
          assessment surfaces architecture problems, a cloud migration raises data
          governance questions, a strategy engagement runs into a staffing gap.
        </p>
        <p>
          We keep engagement teams small and senior. If someone is scoping your work,
          they're also doing it.
        </p>
      </div>
    </div>
  );
}

export default About;
