const features = [
  {
    icon: "🧾",
    title: "Facturas completas",
    desc: "Crea facturas ordinarias con todos los campos requeridos por Hacienda. Numeración automática y correlativa.",
  },
  {
    icon: "↩️",
    title: "Facturas rectificativas",
    desc: "Emite rectificativas vinculadas a la factura original con un solo clic, correctamente referenciadas.",
  },
  {
    icon: "📋",
    title: "Presupuestos",
    desc: "Crea presupuestos y conviértelos en factura cuando el cliente los acepte. Sin reescribir nada.",
  },
  {
    icon: "🧾",
    title: "Facturas simplificadas",
    desc: "Para ventas al consumidor final sin necesidad de datos del destinatario.",
  },
  {
    icon: "📱",
    title: "Desde móvil o PC",
    desc: "Disponible en iOS, Android y navegador. Factura desde cualquier lugar.",
  },
  {
    icon: "👥",
    title: "Multiusuario y multiempresa",
    desc: "Gestiona varias empresas o NIFs desde una sola cuenta. Usuarios con distintos permisos.",
  },
  {
    icon: "💰",
    title: "Control de cobros",
    desc: "Marca facturas como cobradas, registra pagos parciales y consulta el saldo pendiente.",
  },
  {
    icon: "📄",
    title: "PDF profesional",
    desc: "Genera y envía PDFs con diseño profesional, incluido el código QR VeriFactu.",
  },
  {
    icon: "🔢",
    title: "Clonado de facturas",
    desc: "Duplica cualquier factura anterior para ahorrar tiempo con clientes recurrentes.",
  },
]

export default function Features() {
  return (
    <section id="caracteristicas" className="py-24 px-4 sm:px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Todo lo que necesitas para facturar
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Sin módulos extra, sin sorpresas. Todas las funciones incluidas desde el primer día.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-blue-100 hover:shadow-sm transition-all"
            >
              <div className="text-3xl mb-3">{f.icon}</div>
              <h3 className="font-semibold text-gray-900 mb-2">{f.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
