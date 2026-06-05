"use client";

import { useState } from "react";
import Link from "next/link";

export default function PlatformFeatures() {
  const [openIndex, setOpenIndex] = useState(0);

  const features = [
    {
      title: "Gestiona tu presupuesto",
      description:
        "Recibe el presupuesto para tu proyecto de forma clara y detallada por partidas. Podrás comentar, revisar y aceptar de forma fácil y cómoda.",
    },
    {
      title: "Diseña con el equipo",
      description:
        "Trabajamos tu proyecto de forma conjunta con tu modelo 3D. Juntos definiremos todo lo relativo al diseño, planificación y materialidad del proyecto.",
    },
    {
      title: "Controla tu obra",
      description:
        "Seguirás el progreso de tu obra de forma visual y sencilla. Recibirás las certificaciones periódicamente y así pagar por el trabajo realizado.",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-semibold text-center text-cubicup-dark-text mb-16">
          Gestionar una reforma es más fácil a través de
          <br className="hidden md:block" /> nuestra plataforma digital
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="border-b border-gray-300 last:border-b-0"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                  className="w-full py-5 flex items-center justify-between text-left"
                >
                  <span
                    className={`text-lg font-medium transition-colors ${
                      openIndex === index
                        ? "text-cubicup-dark-text"
                        : "text-gray-500"
                    }`}
                  >
                    {feature.title}
                  </span>
                  <svg
                    className={`w-5 h-5 transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? "max-h-40 pb-5" : "max-h-0"
                  }`}
                >
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}

            <div className="pt-6">
              <Link
                href="#"
                className="inline-flex items-center px-8 py-3 text-sm font-medium text-white bg-cubicup-navy rounded-full hover:bg-cubicup-navy/90 transition-all duration-300"
              >
                Comienza tu proyecto
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-white shadow-xl p-6 flex items-center justify-center">
              <div className="w-full max-w-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-cubicup-teal/20 flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-cubicup-teal"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                    </svg>
                  </div>
                  <span className="font-semibold text-cubicup-dark-text">
                    Cubicup Platform
                  </span>
                </div>
                <div className="space-y-3">
                  <div className="h-3 bg-gray-200 rounded-full w-full" />
                  <div className="h-3 bg-gray-200 rounded-full w-4/5" />
                  <div className="h-3 bg-gray-200 rounded-full w-3/5" />
                </div>
                <div className="mt-6 grid grid-cols-3 gap-3">
                  <div className="aspect-square bg-cubicup-teal/10 rounded-lg" />
                  <div className="aspect-square bg-cubicup-beige/30 rounded-lg" />
                  <div className="aspect-square bg-gray-100 rounded-lg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
