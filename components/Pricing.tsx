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
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Un plan. Todo incluido.
          </h2>
          <p className="text-gray-500 text-lg">
            Sin módulos de pago, sin límites por volumen, sin sorpresas.
          </p>

          {/* Toggle mensual / anual */}
          <div className="mt-8 inline-flex items-center gap-3 bg-white border border-gray-200 rounded-full p-1">
            <button
              onClick={() => setAnnual(false)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                !annual ? "bg-blue-600 text-white shadow-sm" : "text-gray-500 hover:text-gray-800"
              }`}
            >
              Mensual
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${
                annual ? "bg-blue-600 text-white shadow-sm" : "text-gray-500 hover:text-gray-800"
              }`}
            >
              Anual
              <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${annual ? "bg-white/20 text-white" : "bg-green-100 text-green-700"}`}>
                2 meses gratis
              </span>
            </button>
          </div>
        </div>

        {/* Card de precio */}
        <div className="bg-white rounded-3xl border border-gray-200 shadow-sm overflow-hidden">
          {annual && (
            <div className="bg-green-50 border-b border-green-100 text-green-800 text-sm font-medium text-center py-2.5 px-4">
              {ANNUAL_SAVINGS_LABEL} — pagas solo {ANNUAL_MONTHS_PAID} mensualidades
            </div>
          )}

          <div className="p-8 sm:p-10">
            <div className="flex flex-col sm:flex-row sm:items-end gap-4 mb-8">
              <div>
                <div className="flex items-end gap-1">
                  <span className="text-5xl font-bold text-gray-900">
                    {price % 1 === 0 ? price : price.toFixed(2)}
                  </span>
                  <span className="text-gray-500 text-lg mb-1">{PRICE_CURRENCY}/mes</span>
                </div>
                <p className="text-gray-400 text-sm mt-1">
                  Facturado: {billingLabel} · {PRICE_UNIT}
                </p>
              </div>

              <div className="sm:ml-auto">
                <Link
                  href={siteConfig.registerUrl}
                  className="block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3.5 rounded-xl text-base transition-colors text-center whitespace-nowrap"
                >
                  Empezar gratis 14 días
                </Link>
                <p className="text-xs text-gray-400 text-center mt-2">Sin tarjeta de crédito</p>
              </div>
            </div>

            <div className="border-t border-gray-100 pt-8">
              <p className="text-sm font-semibold text-gray-700 mb-4">Todo incluido:</p>
              <ul className="grid sm:grid-cols-2 gap-3">
                {included.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
                    <svg className="w-4 h-4 text-blue-500 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <p className="text-center text-sm text-gray-400 mt-6">
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
