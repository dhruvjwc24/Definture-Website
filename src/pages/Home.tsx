import { Link } from 'react-router-dom';
import { serviceCategories } from '../data/services';
import ServiceCard from '../components/ServiceCard';
import InteractiveGridHero from '../components/ui/interactive-grid-hero';
import Eyebrow from '../components/Eyebrow';

function Home() {
  return (
    <>
      <InteractiveGridHero
        eyebrow="IT / Security / Data Consulting"
        heading="Definture"
        subheading="IT, security, and data consulting for organizations that can't afford to guess."
        ctaLabel="Get in touch"
        ctaHref="/contact"
      />

      <section className="border-t border-hairline px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 flex flex-col items-center gap-3 text-center">
            <Eyebrow>Practice areas</Eyebrow>
            <h2 className="font-serif text-2xl font-semibold text-ink sm:text-3xl">
              Where we work
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {serviceCategories.map((category) => (
              <ServiceCard key={category.title} {...category} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-hairline bg-surface px-6 py-24">
        <div className="mx-auto flex max-w-2xl flex-col gap-6 text-center">
          <h2 className="font-serif text-2xl font-semibold text-ink sm:text-3xl">
            Why Definture
          </h2>
          <p className="text-base text-ash">
            We keep engagements small enough to stay accountable and senior enough to move
            fast. No layers of subcontractors between you and the people doing the work.
          </p>
        </div>
      </section>

      <section className="border-t border-hairline px-6 py-24">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-6 text-center">
          <h2 className="font-serif text-2xl font-semibold text-ink sm:text-3xl">
            Start with a conversation
          </h2>
          <Link
            to="/contact"
            className="border border-ink bg-brass px-8 py-3 text-sm font-medium text-ink transition-all duration-300 ease-[var(--ease-signature)] hover:bg-ink hover:text-linen active:scale-[0.98]"
          >
            Get in touch
          </Link>
        </div>
      </section>
    </>
  );
}

export default Home;
