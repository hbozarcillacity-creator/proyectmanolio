export default function PartnersSection() {
  const partners = [
    "Kömmerling",
    "Grohe",
    "Roca",
    "Porcelanosa",
    "Simon",
    "Silestone",
  ];

  return (
    <section className="py-20 md:py-28 bg-cubicup-beige">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-semibold text-center text-cubicup-dark-text mb-16">
          En nuestros proyectos trabajamos con
        </h2>

        <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16">
          {partners.map((partner) => (
            <div
              key={partner}
              className="text-cubicup-dark-text/60 text-xl md:text-2xl font-semibold hover:text-cubicup-dark-text transition-colors cursor-pointer"
            >
              {partner}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
