import Image from "next/image"

const screenshots = [
  {
    src: "/screenshots/galeria-facturas-2.png",
    alt: "Listado de facturas con estado AEAT en tiempo real",
    caption: "Estado AEAT en tiempo real: Correcto, Anulado, Pendiente",
  },
  {
    src: "/screenshots/visualizacion-factura.png",
    alt: "Detalle de factura con botón Enviar a Verifactu",
    caption: "Envío a la AEAT con un solo toque desde la factura",
  },
  {
    src: "/screenshots/pantalla-resumen-cuentas-cobrar.png",
    alt: "Dashboard de cuentas por cobrar con gráfico",
    caption: "Control de cobros pendientes y vencidos de un vistazo",
  },
  {
    src: "/screenshots/pantalla-clientes.png",
    alt: "Listado de clientes con saldo pendiente",
    caption: "Gestión de clientes con saldo y cuentas por cobrar",
  },
]

export default function AppScreenshots() {
  return (
    <section className="py-24 px-4 sm:px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            El software en acción
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Diseñado para el móvil, con toda la potencia de un programa de escritorio.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 justify-items-center">
          {screenshots.map((s) => (
            <div key={s.src} className="flex flex-col items-center gap-3 w-full max-w-[200px]">
              <div className="relative w-full">
                <div className="absolute -inset-2 bg-blue-100 rounded-[2.5rem] blur-xl opacity-50" />
                <div className="relative shadow-lg ring-1 ring-gray-200 [clip-path:inset(0_round_1.75rem)]">
                  <Image
                    src={s.src}
                    alt={s.alt}
                    width={200}
                    height={380}
                    className="w-full object-cover"
                  />
                </div>
              </div>
              <p className="text-xs text-gray-500 text-center leading-relaxed">{s.caption}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
