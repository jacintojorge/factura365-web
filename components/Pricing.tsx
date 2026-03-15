"use client"

import { useState } from "react"
import Link from "next/link"
import {
  PRICE_MONTHLY,
  PRICE_ANNUAL,
  PRICE_ANNUAL_MONTHLY,
  PRICE_CURRENCY,
  PRICE_TAX_NOTE,
  PRICE_UNIT,
  ANNUAL_SAVINGS_LABEL,
  ANNUAL_MONTHS_PAID,
} from "@/config/pricing"
import { siteConfig } from "@/config/site"

const included = [
  "Facturas ilimitadas",
  "Facturas rectificativas",
  "Facturas simplificadas",
  "Presupuestos convertibles",
  "Conexión directa AEAT (VeriFactu)",
  "Código QR en cada factura",
  "PDF profesional",
  "Multiusuario y multiempresa",
  "App móvil iOS y Android",
  "Soporte por email",
]

export default function Pricing() {
  const [annual, setAnnual] = useState(false)

  const price = annual ? PRICE_ANNUAL_MONTHLY : PRICE_MONTHLY
  const billingLabel = annual
    ? `${PRICE_ANNUAL}${PRICE_CURRENCY}/año ${PRICE_TAX_NOTE}`
    : `${PRICE_MONTHLY}${PRICE_CURRENCY}/mes ${PRICE_TAX_NOTE}`

  return (
    <section id="precios" className="py-24 px-4 sm:px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Empieza gratis. Paga cuando estés seguro.
          </h2>
          <p className="text-gray-500 text-lg">
            30 días de prueba sin tarjeta. Un plan con todo incluido después.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 items-start">

          {/* Card prueba gratuita */}
          <div className="bg-white rounded-3xl border-2 border-blue-100 shadow-sm p-8">
            <span className="inline-block text-xs font-bold tracking-widest uppercase text-blue-600 bg-blue-50 px-3 py-1 rounded-full mb-4">
              Prueba gratuita
            </span>
            <div className="flex items-end gap-1 mb-1">
              <span className="text-5xl font-bold text-gray-900">0</span>
              <span className="text-gray-500 text-lg mb-1">{PRICE_CURRENCY}</span>
            </div>
            <p className="text-gray-400 text-sm mb-6">Durante 30 días · Sin tarjeta</p>

            <Link
              href={siteConfig.registerUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3.5 rounded-xl text-base transition-colors text-center mb-6"
            >
              Empezar prueba gratis
            </Link>

            <ul className="space-y-2.5">
              {[
                { texto: "Todas las funcionalidades incluidas", ok: true },
                { texto: "App móvil iOS, Android y web", ok: true },
                { texto: "Facturas con código QR VeriFactu", ok: true },
                { texto: "Entorno de pruebas AEAT", ok: false },
                { texto: "Sin validez fiscal durante la prueba", ok: false },
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                  <svg className={`w-4 h-4 mt-0.5 shrink-0 ${item.ok ? "text-blue-500" : "text-gray-300"}`} fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {item.texto}
                </li>
              ))}
            </ul>
            <p className="text-xs text-gray-400 mt-4">
              Al contratar activamos el entorno de producción real de la AEAT.{" "}
              <Link href="/blog/prueba-gratis-30-dias-verifactu" className="text-blue-500 hover:underline">
                Saber más
              </Link>
            </p>
          </div>

          {/* Card plan de pago */}
          <div className="bg-white rounded-3xl border border-gray-200 shadow-sm overflow-hidden">
            {annual && (
              <div className="bg-green-50 border-b border-green-100 text-green-800 text-sm font-medium text-center py-2.5 px-4">
                {ANNUAL_SAVINGS_LABEL} respecto al plan mensual
              </div>
            )}

            <div className="p-8">
              <span className="inline-block text-xs font-bold tracking-widest uppercase text-gray-500 bg-gray-100 px-3 py-1 rounded-full mb-4">
                Plan completo
              </span>

              {/* Toggle mensual / anual */}
              <div className="inline-flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-full p-1 mb-4">
                <button
                  onClick={() => setAnnual(false)}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                    !annual ? "bg-white text-gray-900 shadow-sm" : "text-gray-400 hover:text-gray-700"
                  }`}
                >
                  Mensual
                </button>
                <button
                  onClick={() => setAnnual(true)}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all flex items-center gap-1.5 ${
                    annual ? "bg-white text-gray-900 shadow-sm" : "text-gray-400 hover:text-gray-700"
                  }`}
                >
                  Anual
                  <span className="text-xs font-semibold bg-green-100 text-green-700 px-1.5 py-0.5 rounded-full">
                    −2 meses
                  </span>
                </button>
              </div>

              <div className="flex items-end gap-1 mb-1">
                <span className="text-5xl font-bold text-gray-900">
                  {price % 1 === 0 ? price : price.toFixed(2)}
                </span>
                <span className="text-gray-500 text-lg mb-1">{PRICE_CURRENCY}/mes</span>
              </div>
              <p className="text-gray-400 text-sm mb-6">
                {billingLabel} · {PRICE_UNIT}
              </p>

              <Link
                href={siteConfig.registerUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-gray-900 hover:bg-gray-700 text-white font-semibold px-6 py-3.5 rounded-xl text-base transition-colors text-center mb-6"
              >
                Contratar ahora
              </Link>

              <div className="border-t border-gray-100 pt-6">
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">Todo incluido:</p>
                <ul className="space-y-2">
                  {included.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
                      <svg className="w-4 h-4 text-green-500 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {item}
                    </li>
                  ))}
                  <li className="flex items-center gap-2 text-sm text-gray-600">
                    <svg className="w-4 h-4 text-green-500 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Entorno de producción AEAT (validez fiscal)
                  </li>
                </ul>
              </div>
            </div>
          </div>

        </div>

        <p className="text-center text-sm text-gray-400 mt-8">
          ¿Tienes dudas?{" "}
          <a href={`mailto:${siteConfig.contactEmail}`} className="text-blue-600 hover:underline">
            Escríbenos
          </a>{" "}
          y te ayudamos.
        </p>
      </div>
    </section>
  )
}
