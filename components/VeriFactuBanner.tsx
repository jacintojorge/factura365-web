import Image from "next/image"

export default function VeriFactuBanner() {
  return (
    <section className="bg-blue-600 text-white py-16 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-blue-200 text-sm font-semibold uppercase tracking-wider mb-3">
              Ley Crea y Crece
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold leading-tight mb-5">
              VeriFactu: la obligación que ya cumplimos por ti
            </h2>
            <p className="text-blue-100 leading-relaxed mb-6">
              La nueva normativa exige que el software de facturación envíe cada factura a la AEAT
              en tiempo real con un código QR verificable. Con Factura365 esto ocurre
              automáticamente desde el primer día, sin que tengas que hacer nada.
            </p>
            {/* Logo oficial VeriFactu */}
            <div className="inline-block bg-white rounded-xl px-4 py-2">
              <Image
                src="/verifactu-logo.png"
                alt="Software certificado VeriFactu"
                width={140}
                height={48}
                className="h-10 w-auto"
              />
            </div>
          </div>

          <div className="flex flex-col gap-6">
            {/* Factura PDF con QR */}
            <div className="relative">
              <div className="absolute -inset-3 bg-blue-500/30 rounded-2xl blur-xl" />
              <div className="relative shadow-2xl ring-1 ring-blue-400/30 [clip-path:inset(0_round_1rem)]">
                <Image
                  src="/screenshots/factura-en-pdf.png"
                  alt="Factura PDF con código QR VeriFactu: Correcto"
                  width={420}
                  height={540}
                  className="w-full"
                />
              </div>
            </div>
            <p className="text-blue-200 text-sm text-center">
              Cada factura incluye el sello <strong className="text-white">Veri*Factu: Correcto</strong> y su QR verificable
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
