import Link from "next/link";

export default function FinancingSection() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-cubicup-dark-text leading-tight mb-6">
              Empieza tu proyecto de reforma hoy y paga cómodamente a plazos.
            </h2>
            <p className="text-gray-600 mb-8">
              Con Cubicup puedes obtener financiación a medida.
            </p>
            <Link
              href="#"
              className="inline-flex items-center px-8 py-3 text-sm font-medium text-cubicup-navy border border-cubicup-navy rounded-full hover:bg-cubicup-navy hover:text-white transition-all duration-300"
            >
              Financiar mi reforma
            </Link>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-cubicup-teal/20 to-cubicup-beige/30 flex items-center justify-center">
              <div className="text-center p-8">
                <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-cubicup-teal/20 flex items-center justify-center">
                  <svg
                    className="w-12 h-12 text-cubicup-teal"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <p className="text-cubicup-dark-text font-medium">
                  Financiación flexible
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
