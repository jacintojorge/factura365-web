const hitos = [
  {
    fecha: "Jul 2025",
    titulo: "Fabricantes obligados",
    descripcion: "Todo software nuevo debe cumplir VeriFactu desde el 29 de julio.",
    estado: "pasado",
    destacado: false,
  },
  {
    fecha: "Oct 2025",
    titulo: "App gratuita AEAT",
    descripcion: "La Agencia Tributaria lanza su herramienta de facturación VeriFactu gratuita.",
    estado: "pasado",
    destacado: false,
  },
  {
    fecha: "Dic 2025",
    titulo: "2ª prórroga (RDL 15/2025)",
    descripcion: "El Gobierno aplaza por segunda vez la obligatoriedad. Nuevos plazos: 2027.",
    estado: "pasado",
    destacado: true,
  },
  {
    fecha: "2026",
    titulo: "Período voluntario",
    descripcion: "Año de adaptación. Puedes usar VeriFactu sin sanción por errores. Recomendado.",
    estado: "presente",
    destacado: false,
  },
  {
    fecha: "Ene 2027",
    titulo: "Obligatorio para empresas",
    descripcion: "Sociedades (S.L., S.A.) y contribuyentes del Impuesto sobre Sociedades.",
    estado: "futuro",
    destacado: true,
  },
  {
    fecha: "Jul 2027",
    titulo: "Obligatorio para autónomos",
    descripcion: "Autónomos en estimación directa (IRPF). Fecha límite definitiva.",
    estado: "futuro",
    destacado: true,
  },
]

const colores = {
  pasado: {
    dot: "bg-gray-400",
    linea: "bg-gray-300",
    badge: "bg-gray-100 text-gray-500",
    titulo: "text-gray-500",
    descripcion: "text-gray-400",
    borde: "border-gray-200",
  },
  presente: {
    dot: "bg-blue-500 ring-4 ring-blue-100",
    linea: "bg-blue-200",
    badge: "bg-blue-50 text-blue-600 font-semibold",
    titulo: "text-blue-700 font-semibold",
    descripcion: "text-gray-600",
    borde: "border-blue-200",
  },
  futuro: {
    dot: "bg-white border-2 border-orange-400",
    linea: "bg-orange-100",
    badge: "bg-orange-50 text-orange-600 font-semibold",
    titulo: "text-gray-800 font-semibold",
    descripcion: "text-gray-500",
    borde: "border-orange-100",
  },
}

export default function VeriFactuTimeline() {
  return (
    <div className="w-full py-8">
      <h3 className="text-lg font-semibold text-gray-700 mb-8 text-center">
        Calendario de implantación VeriFactu
      </h3>

      {/* Timeline desktop: horizontal */}
      <div className="hidden md:block relative">
        {/* Línea base */}
        <div className="absolute top-6 left-0 right-0 h-0.5 bg-gray-200" />

        <div className="grid grid-cols-6 gap-2 relative">
          {hitos.map((hito, i) => {
            const c = colores[hito.estado]
            return (
              <div key={i} className="flex flex-col items-center">
                {/* Dot */}
                <div className={`relative z-10 w-4 h-4 rounded-full ${c.dot} mb-3 mt-4`} />

                {/* Tarjeta */}
                <div className={`w-full border rounded-xl p-3 text-center ${c.borde} ${hito.destacado ? "shadow-sm" : ""}`}>
                  <span className={`inline-block text-xs px-2 py-0.5 rounded-full mb-1.5 ${c.badge}`}>
                    {hito.fecha}
                  </span>
                  <p className={`text-xs leading-snug mb-1 ${c.titulo}`}>{hito.titulo}</p>
                  <p className={`text-xs leading-snug ${c.descripcion}`}>{hito.descripcion}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Timeline mobile: vertical */}
      <div className="md:hidden relative pl-6">
        {/* Línea vertical */}
        <div className="absolute left-2 top-0 bottom-0 w-0.5 bg-gray-200" />

        <div className="space-y-5">
          {hitos.map((hito, i) => {
            const c = colores[hito.estado]
            return (
              <div key={i} className="relative flex gap-4">
                {/* Dot */}
                <div className={`absolute -left-[22px] top-3 w-4 h-4 rounded-full z-10 ${c.dot}`} />

                {/* Tarjeta */}
                <div className={`flex-1 border rounded-xl p-3 ${c.borde} ${hito.destacado ? "shadow-sm" : ""}`}>
                  <span className={`inline-block text-xs px-2 py-0.5 rounded-full mb-1 ${c.badge}`}>
                    {hito.fecha}
                  </span>
                  <p className={`text-sm leading-snug mb-0.5 ${c.titulo}`}>{hito.titulo}</p>
                  <p className={`text-xs leading-snug ${c.descripcion}`}>{hito.descripcion}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Leyenda */}
      <div className="flex flex-wrap justify-center gap-4 mt-6 text-xs text-gray-400">
        <span className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-gray-400 inline-block" /> Ya ocurrido
        </span>
        <span className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-blue-500 inline-block" /> Ahora (2026)
        </span>
        <span className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full border-2 border-orange-400 bg-white inline-block" /> Próximo plazo
        </span>
      </div>
    </div>
  )
}
