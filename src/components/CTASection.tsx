import Link from "next/link";

export default function CTASection() {
  return (
    <section className="py-24 md:py-32 bg-cubicup-navy">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-light text-white leading-tight mb-10">
          Agenda la visita el día y la hora
          <br />
          que tú elijas
        </h2>
        <Link
          href="#"
          className="inline-flex items-center px-8 py-4 text-sm font-medium text-white bg-cubicup-teal rounded-full hover:bg-cubicup-teal/90 transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          Comienza tu proyecto
        </Link>
      </div>
    </section>
  );
}
