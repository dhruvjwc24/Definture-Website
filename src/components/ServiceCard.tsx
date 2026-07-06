import type { ServiceCategory } from '../data/services';

function ServiceCard({ title, description, items }: ServiceCategory) {
  return (
    <div className="flex flex-col gap-4 border border-hairline bg-surface p-8">
      <h3 className="font-serif text-xl font-semibold text-ink">{title}</h3>
      <p className="text-sm text-ash">{description}</p>
      <ul className="flex flex-col gap-1.5 pt-2">
        {items.map((item) => (
          <li key={item} className="text-sm text-ink">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ServiceCard;
