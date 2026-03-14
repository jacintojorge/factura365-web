import Link from "next/link"
import { siteConfig } from "@/config/site"

export default function CtaFinal() {
  return (
    <section className="py-24 px-4 sm:px-6 bg-white">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-5">
          Empieza a facturar hoy mismo
        </h2>
        <p className="text-gray-500 text-lg mb-10 leading-relaxed">
          14 días de prueba gratuita, sin tarjeta de crédito. Configuración en minutos.
          Cumple con VeriFactu desde el primer día.
        </p>
        <Link
          href={siteConfig.registerUrl}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-10 py-4 rounded-xl text-lg transition-colors shadow-sm inline-block"
        >
          Crear cuenta gratis
        </Link>
        <p className="text-gray-400 text-sm mt-4">
          ¿Prefieres hablar primero?{" "}
          <a href={`mailto:${siteConfig.contactEmail}`} className="text-blue-600 hover:underline">
            Contáctanos
          </a>
        </p>
      </div>
    </section>
  )
}
