import Link from "next/link"
import Image from "next/image"
import { siteConfig } from "@/config/site"
import { PRICE_MONTHLY, PRICE_CURRENCY, PRICE_TAX_NOTE } from "@/config/pricing"

export default function Hero() {
  return (
    <section className="relative bg-white pt-16 pb-0 px-4 sm:px-6 overflow-hidden">
      {/* Fondo decorativo */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-[700px] h-[500px] bg-blue-50 rounded-full blur-3xl opacity-50" />
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Texto */}
          <div className="pt-8 pb-16 lg:pb-24">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-700 text-sm font-medium px-4 py-1.5 rounded-full mb-8">
              <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
              Certificado VeriFactu · Homologado AEAT
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight tracking-tight mb-6">
              Factura con la AEAT{" "}
              <span className="text-blue-600">ya incluida</span>
            </h1>

            <p className="text-lg text-gray-500 leading-relaxed mb-10">
              Emite facturas, rectificativas y presupuestos desde tu móvil u ordenador.
              Conectado directamente con la Agencia Tributaria mediante{" "}
              <strong className="text-gray-700">VeriFactu</strong>, sin configuraciones.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href={siteConfig.registerUrl}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3.5 rounded-xl text-base transition-colors shadow-sm text-center"
              >
                Empieza ahora — gratis 14 días
              </Link>
              <Link
                href="/#como-funciona"
                className="bg-white hover:bg-gray-50 text-gray-700 font-semibold px-8 py-3.5 rounded-xl text-base border border-gray-200 transition-colors text-center"
              >
                Ver cómo funciona
              </Link>
            </div>

            <p className="mt-5 text-sm text-gray-400">
              Desde {PRICE_MONTHLY}{PRICE_CURRENCY}/mes {PRICE_TAX_NOTE} · Sin permanencia · Cancela cuando quieras
            </p>
          </div>

          {/* Captura del app */}
          <div className="hidden lg:flex justify-center items-end">
            <div className="relative">
              <div className="absolute -inset-4 bg-blue-100 rounded-[3rem] blur-2xl opacity-40" />
              <div className="relative shadow-2xl ring-1 ring-gray-200 [clip-path:inset(0_round_2rem)]">
                <Image
                  src="/screenshots/galeria-facturas-2.png"
                  alt="Listado de facturas en Factura365 con estado AEAT"
                  width={300}
                  height={580}
                  className="w-full"
                  priority
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
