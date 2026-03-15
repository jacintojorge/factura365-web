import VeriFactuTimeline from "@/components/VeriFactuTimeline"

export default function TimelinePreview() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-2xl font-bold text-gray-800 mb-2">Preview: Timeline VeriFactu</h1>
      <p className="text-gray-400 text-sm mb-10">Esta página es solo para previsualización. Se puede eliminar cuando se decida dónde integrar el componente.</p>
      <div className="border border-gray-100 rounded-2xl p-6 bg-white shadow-sm">
        <VeriFactuTimeline />
      </div>
    </div>
  )
}
