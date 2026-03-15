import Link from "next/link"
import { siteConfig } from "@/config/site"

export default function TrialTeaser() {
  return (
    <section className="py-16 px-4 sm:px-6 bg-blue-600">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center gap-8">

          {/* Texto */}
          <div className="flex-1 text-white">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase bg-white/20 text-white px-3 py-1 rounded-full mb-4">
              Sin tarjeta · Sin compromiso
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold mb-3">
              30 días de prueba gratuita
            </h2>
            <p className="text-blue-100 leading-relaxed mb-4">
              Prueba todas las funcionalidades de Factura365 sin pagar nada.
              Durante la prueba, tus facturas se envían al entorno de pruebas
              de la AEAT — idéntico al real pero sin validez fiscal.
              Cuando contrates, activamos el entorno de producción.
            </p>
            <Link
              href="/blog/prueba-gratis-30-dias-verifactu"
              className="text-sm text-blue-200 hover:text-white underline underline-offset-2 transition-colors"
            >
              ¿Cómo funciona el período de prueba? →
            </Link>
          </div>

          {/* CTA */}
          <div className="flex flex-col items-start md:items-center gap-3 shrink-0">
            <Link
              href={siteConfig.registerUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-blue-600 hover:bg-blue-50 font-bold px-8 py-4 rounded-xl text-base transition-colors whitespace-nowrap shadow-sm"
            >
              Empezar prueba gratuita
            </Link>
            <p className="text-blue-200 text-xs text-center">
              30 días gratis · Sin tarjeta · Cancela cuando quieras
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}
