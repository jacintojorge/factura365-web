import Link from "next/link"
import Image from "next/image"
import { siteConfig } from "@/config/site"

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-gray-100 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Marca */}
          <div>
            <Link href="/" className="inline-block mb-3">
              <Image
                src="/logo.png"
                alt="Factura365"
                width={140}
                height={36}
                className="h-8 w-auto"
              />
            </Link>
            <p className="text-sm text-gray-500 leading-relaxed">
              Software de facturación certificado VeriFactu, conectado directamente con la AEAT.
            </p>
          </div>

          {/* Navegación */}
          <div>
            <p className="font-semibold text-sm text-gray-700 mb-3">Producto</p>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><Link href="/#caracteristicas" className="hover:text-gray-800">Características</Link></li>
              <li><Link href="/#precios" className="hover:text-gray-800">Precios</Link></li>
              <li><Link href="/como-empezar" className="hover:text-gray-800">Cómo empezar</Link></li>
              <li><Link href="/blog" className="hover:text-gray-800">Blog</Link></li>
              <li>
                <a
                  href={siteConfig.appUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-800"
                >
                  Acceder a la aplicación
                </a>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <p className="font-semibold text-sm text-gray-700 mb-3">Contacto</p>
            <ul className="space-y-2 text-sm text-gray-500">
              <li>
                <a href={`mailto:${siteConfig.contactEmail}`} className="hover:text-gray-800">
                  {siteConfig.contactEmail}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-gray-400">
          <p>© {year} Tecnofun Digital, S.L. Todos los derechos reservados.</p>
          <div className="flex gap-4">
            <Link href="/privacidad" className="hover:text-gray-600">Privacidad</Link>
            <Link href="/aviso-legal" className="hover:text-gray-600">Aviso legal</Link>
            <Link href="/cookies" className="hover:text-gray-600">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
