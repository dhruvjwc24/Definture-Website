function Hero() {
  return (
    <section
      id="home"
      className="relative flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/images/hero.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/55" />
      <h1 className="relative z-10 text-4xl md:text-6xl font-bold text-accent-light text-center px-6 max-w-4xl">
        Welcome to the world of innovation
      </h1>
    </section>
  );
}

export default Hero;
