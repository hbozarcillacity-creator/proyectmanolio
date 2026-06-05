import Link from "next/link";
import Image from "next/image";

export default function ProjectsShowcase() {
  const projects = [
    {
      title: "Reforma integral de piso en Malasaña, Madrid",
      image:
        "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=1980&auto=format&fit=crop",
    },
    {
      title: "Reforma integral de vivienda en Sants, Barcelona",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
    },
    {
      title: "Reforma integral de vivienda en L'Eixample, Valencia",
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop",
    },
    {
      title: "Reforma de piso estilo Contemporáneo en Teatinos, Málaga",
      image:
        "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070&auto=format&fit=crop",
    },
    {
      title: "Reforma integral de piso en El Clot, Barcelona",
      image:
        "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?q=80&w=2070&auto=format&fit=crop",
    },
    {
      title: "Reforma integral estilo Moderno en Goya, Madrid",
      image:
        "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2070&auto=format&fit=crop",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-semibold text-center text-cubicup-dark-text mb-16">
          Estas son nuestras reformas en Madrid, Barcelona,
          <br className="hidden md:block" /> Valencia y Málaga
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Link
              key={index}
              href="#"
              className="group block overflow-hidden rounded-lg bg-white shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <h3 className="text-sm font-medium text-cubicup-dark-text leading-relaxed">
                  {project.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="#"
            className="inline-flex items-center px-8 py-3 text-sm font-medium text-cubicup-navy border border-cubicup-navy rounded-full hover:bg-cubicup-navy hover:text-white transition-all duration-300"
          >
            Explora más casos
          </Link>
        </div>
      </div>
    </section>
  );
}
