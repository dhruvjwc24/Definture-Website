import { serviceCategories } from '../data/services';
import ServiceCard from './ServiceCard';

function Services() {
  return (
    <section id="services" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-accent text-center mb-16">
          Definture Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {serviceCategories.map((category) => (
            <ServiceCard key={category.title} {...category} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
