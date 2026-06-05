export default function PressLogos() {
  const logos = [
    { name: "EL PAÍS", style: "font-serif font-bold tracking-tight" },
    { name: "EL ESPAÑOL", style: "font-serif font-medium tracking-wide" },
    { name: "El Referente", style: "font-sans font-semibold" },
    { name: "Estilo & Deco", style: "font-sans font-medium" },
    { name: "Pizca del Hogar", style: "font-serif italic" },
  ];

  return (
    <section className="bg-cubicup-navy py-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
          {logos.map((logo) => (
            <div
              key={logo.name}
              className={`text-white/80 text-lg md:text-xl ${logo.style} hover:text-white transition-colors cursor-pointer`}
            >
              {logo.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
