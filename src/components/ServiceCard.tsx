import type { ServiceCategory } from '../data/services';

function ServiceCard({ title, image, items }: ServiceCategory) {
  return (
    <div className="flex flex-col gap-4">
      <div className="overflow-hidden rounded-lg aspect-[3/2]">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <h4 className="text-lg font-bold text-accent">{title}</h4>
      <ul className="flex flex-col gap-1">
        {items.map((item) => (
          <li key={item} className="text-sm text-gray-600">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ServiceCard;
