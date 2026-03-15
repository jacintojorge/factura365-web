import Link from "next/link"

const plazos = [
  { fecha: "Jul 2025", texto: "Fabricantes obligados", hecho: true },
  { fecha: "2026", texto: "Período voluntario", actual: true },
  { fecha: "Ene 2027", texto: "Obligatorio empresas", hecho: false },
  { fecha: "Jul 2027", texto: "Obligatorio autónomos", hecho: false },
]

export default function TimelineTeaser() {
  return (
    <section className="bg-gray-50 border-t border-gray-100 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <p className="text-xs font-semibold tracking-widest text-blue-500 uppercase mb-3">
          Calendario VeriFactu
        </p>
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
          ¿Cuándo es obligatorio VeriFactu?
        </h2>
        <p className="text-gray-500 mb-10 max-w-xl mx-auto">
          Dos prórrogas han movido las fechas. El plazo final para autónomos es julio de 2027.
          2026 es el año de adaptarse sin prisas.
        </p>

        {/* Mini timeline */}
        <div className="relative flex flex-col sm:flex-row items-start sm:items-center justify-center gap-0 mb-10">
          {plazos.map((p, i) => (
            <div key={i} className="flex flex-row sm:flex-col items-center sm:items-center gap-3 sm:gap-0">
              {/* Conector izquierdo (solo desktop) */}
              {i > 0 && (
                <div className="hidden sm:block h-0.5 w-12 bg-gray-300 -ml-0" />
              )}
              {/* Punto + contenido */}
              <div className="flex flex-col items-center">
                {/* Línea vertical móvil (arriba) */}
                {i > 0 && <div className="sm:hidden w-0.5 h-5 bg-gray-300" />}
                <div className={`w-4 h-4 rounded-full border-2 flex-shrink-0 ${
                  p.hecho
                    ? "bg-gray-300 border-gray-300"
                    : p.actual
                    ? "bg-blue-500 border-blue-500 ring-4 ring-blue-100"
                    : "bg-white border-orange-400"
                }`} />
                <div className="mt-2 text-center px-2">
                  <p className={`text-xs font-bold ${p.actual ? "text-blue-600" : p.hecho ? "text-gray-400" : "text-orange-500"}`}>
                    {p.fecha}
                  </p>
                  <p className={`text-xs mt-0.5 max-w-[90px] ${p.hecho ? "text-gray-400" : "text-gray-600"}`}>
                    {p.texto}
                  </p>
                </div>
              </div>

              {/* Conector derecho (desktop) */}
              {i < plazos.length - 1 && (
                <div className="hidden sm:block h-0.5 w-12 bg-gray-300" />
              )}
            </div>
          ))}
        </div>

        <Link
          href="/blog/calendario-verifactu-2025-2027"
          className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors"
        >
          Ver el calendario completo con todos los hitos
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </section>
  )
}
