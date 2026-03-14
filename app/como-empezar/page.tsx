import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { siteConfig } from "@/config/site"

export const metadata: Metadata = {
  title: "Cómo empezar",
  description:
    "Guía paso a paso para acceder a Factura365 por primera vez: descarga Power Apps, accede con tus credenciales y crea tu cuenta.",
}

export default function ComoEmpezar() {
  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-16">
      <div className="mb-10">
        <Link href="/" className="text-sm text-blue-600 hover:underline">
          ← Volver al inicio
        </Link>
      </div>

      <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
        Cómo empezar con Factura365
      </h1>
      <p className="text-gray-500 text-lg mb-12">
        Sigue estos 3 pasos y estarás emitiendo tu primera factura en minutos.
      </p>

      <div className="space-y-10">

        {/* Paso 1 */}
        <div className="flex gap-5">
          <div className="shrink-0 w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm">
            1
          </div>
          <div className="pt-1">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Regístrate</h2>
            <p className="text-gray-500 leading-relaxed mb-4">
              Rellena el formulario de registro con tu nombre y correo electrónico.
              Recibirás un email con tus credenciales de acceso iniciales y las instrucciones completas.
            </p>
            <Link
              href={siteConfig.registerUrl}
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2.5 rounded-lg text-sm transition-colors"
            >
              Ir al formulario de registro
            </Link>
          </div>
        </div>

        <div className="border-t border-gray-100" />

        {/* Paso 2 */}
        <div className="flex gap-5">
          <div className="shrink-0 w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm">
            2
          </div>
          <div className="pt-1 w-full">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Descarga Power Apps</h2>
            <p className="text-gray-500 leading-relaxed mb-5">
              Factura365 funciona sobre <strong className="text-gray-700">Microsoft Power Apps</strong>,
              disponible de forma gratuita en todos los dispositivos.
            </p>

            <div className="grid sm:grid-cols-3 gap-3 mb-5">
              <a
                href="https://apps.apple.com/app/power-apps/id1047318566"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 border border-gray-200 rounded-xl px-4 py-3 hover:border-blue-300 hover:bg-blue-50 transition-colors text-sm font-medium text-gray-700"
              >
                <span className="text-xl">🍎</span>
                App Store (iPhone)
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.microsoft.msapps"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 border border-gray-200 rounded-xl px-4 py-3 hover:border-blue-300 hover:bg-blue-50 transition-colors text-sm font-medium text-gray-700"
              >
                <span className="text-xl">🤖</span>
                Google Play (Android)
              </a>
              <a
                href="https://make.powerapps.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 border border-gray-200 rounded-xl px-4 py-3 hover:border-blue-300 hover:bg-blue-50 transition-colors text-sm font-medium text-gray-700"
              >
                <span className="text-xl">💻</span>
                Ordenador (web)
              </a>
            </div>

            <div className="flex justify-center sm:justify-start">
              <div className="relative">
                <div className="absolute -inset-2 bg-blue-50 rounded-2xl blur-lg opacity-60" />
                <Image
                  src="/screenshots/captura-appstore.jpeg"
                  alt="Power Apps en el App Store"
                  width={200}
                  height={280}
                  className="relative rounded-2xl shadow-md border border-gray-200"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-100" />

        {/* Paso 3 */}
        <div className="flex gap-5">
          <div className="shrink-0 w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm">
            3
          </div>
          <div className="pt-1">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Crea tu cuenta en Factura365</h2>
            <p className="text-gray-500 leading-relaxed mb-3">
              Abre Power Apps e inicia sesión con las credenciales que encontrarás en el email de bienvenida.
            </p>
            <p className="text-gray-500 leading-relaxed mb-3">
              Una vez dentro, selecciona <strong className="text-gray-700">"Crear tu cuenta nueva en Factura365"</strong> y
              completa el registro con tus datos. Este paso solo es necesario la primera vez.
            </p>
            <div className="bg-blue-50 border border-blue-100 rounded-xl px-4 py-3 text-sm text-blue-700 leading-relaxed">
              <strong>A partir de ahora:</strong> en el móvil, abre Power Apps y aparecerá Factura365 directamente.
              En el ordenador, guarda el enlace de acceso directo que encontrarás en el email.
            </div>
          </div>
        </div>

      </div>

      {/* CTA final */}
      <div className="mt-14 pt-10 border-t border-gray-100 text-center">
        <p className="text-gray-500 mb-5">¿Tienes alguna duda? Estamos aquí para ayudarte.</p>
        <a
          href={`mailto:${siteConfig.contactEmail}`}
          className="inline-block border border-gray-200 hover:border-blue-300 hover:bg-blue-50 text-gray-700 font-medium px-6 py-2.5 rounded-lg text-sm transition-colors"
        >
          Contactar con soporte
        </a>
      </div>
    </div>
  )
}
