import Link from "next/link"
import Image from "next/image"
import { siteConfig } from "@/config/site"

const steps = [
  {
    number: "01",
    title: "Regístrate con tu email",
    desc: "Rellena tu nombre y correo electrónico. En segundos recibirás un email con todo lo que necesitas para empezar.",
    image: null,
  },
  {
    number: "02",
    title: "Descarga Power Apps",
    desc: "Factura365 funciona sobre Microsoft Power Apps, disponible gratis en iOS, Android y ordenador.",
    image: {
      src: "/screenshots/captura-appstore.jpeg",
      alt: "Power Apps en el App Store",
    },
  },
  {
    number: "03",
    title: "Crea tu cuenta y empieza",
    desc: "Accede con las credenciales del email, selecciona \"Crear tu cuenta\" y ya puedes emitir tu primera factura con VeriFactu.",
    image: null,
  },
]

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="py-24 px-4 sm:px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            En marcha en 3 pasos
          </h2>
          <p className="text-gray-500 text-lg">
            Sin instalaciones complejas. Sin ficheros de configuración. Sin técnicos.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <div key={step.number} className="relative flex flex-col items-center text-center">
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-7 left-1/2 w-full h-px bg-gray-200" />
              )}
              <div className="relative z-10 w-14 h-14 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg mb-5">
                {step.number}
              </div>
              <h3 className="font-semibold text-gray-900 text-lg mb-2">{step.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">{step.desc}</p>
              {step.image && (
                <div className="relative mt-2">
                  <div className="absolute -inset-2 bg-blue-50 rounded-2xl blur-lg opacity-60" />
                  <div className="relative shadow-md ring-1 ring-gray-200 [clip-path:inset(0_round_1rem)]">
                    <Image
                      src={step.image.src}
                      alt={step.image.alt}
                      width={160}
                      height={220}
                      className="w-full"
                    />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-14">
          <Link
            href={siteConfig.registerUrl}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3.5 rounded-xl text-base transition-colors"
          >
            Crear cuenta gratis
          </Link>
        </div>
      </div>
    </section>
  )
}
