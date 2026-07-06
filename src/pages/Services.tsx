import { serviceCategories } from '../data/services';

function Services() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-24">
      <h1 className="font-serif text-4xl font-semibold text-ink sm:text-5xl">Services</h1>
      <p className="mt-4 max-w-2xl text-lg text-ash">
        Four practice areas, each staffed by people who've done the work in-house before
        consulting on it.
      </p>

      <div className="mt-16 flex flex-col">
        {serviceCategories.map((category) => (
          <div
            key={category.title}
            className="grid grid-cols-1 gap-6 border-t border-hairline py-12 sm:grid-cols-[1fr_2fr]"
          >
            <div>
              <h2 className="font-serif text-xl font-semibold text-ink">{category.title}</h2>
              <p className="mt-3 text-sm text-ash">{category.description}</p>
            </div>
            <ul className="flex flex-col gap-2">
              {category.items.map((item) => (
                <li key={item} className="text-base text-ink">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
