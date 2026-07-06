function Expertise() {
  return (
    <section
      className="relative flex items-center justify-center py-32 px-6 bg-cover bg-center"
      style={{ backgroundImage: "url('/images/expertise-cta.jpg')" }}
    >
      <div className="absolute inset-0 bg-white/70" />
      <div className="relative z-10 max-w-3xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-accent-dark mb-6">
          Explore our expertise
        </h2>
        <p className="text-base md:text-lg text-gray-700 leading-relaxed">
          Discover the world of IT Consulting Services with Definture. From
          cutting-edge Project Management to unparalleled Information
          Security, Digital Transformation, Data Analytics, and AI solutions,
          we are here to elevate your business to new heights. Let's innovate
          together.
        </p>
      </div>
    </section>
  );
}

export default Expertise;
