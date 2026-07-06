import { approachPhases } from '../data/approach';

function Approach() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-24">
      <h1 className="font-serif text-4xl font-semibold text-ink sm:text-5xl">Approach</h1>
      <p className="mt-4 text-lg text-ash">How an engagement actually runs, start to finish.</p>

      <div className="mt-16 flex flex-col">
        {approachPhases.map((phase) => (
          <div
            key={phase.number}
            className="grid grid-cols-[3rem_1fr] gap-6 border-t border-hairline py-10 sm:grid-cols-[4rem_1fr]"
          >
            <span className="font-serif text-2xl text-ash">{phase.number}</span>
            <div>
              <h2 className="font-serif text-xl font-semibold text-ink">{phase.title}</h2>
              <p className="mt-2 text-base text-ash">{phase.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Approach;
