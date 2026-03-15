"use client"

import { useState } from "react"

type Estado = "idle" | "enviando" | "ok" | "error"

export default function Registro() {
  const [email, setEmail] = useState("")
  const [necesitaCredenciales, setNecesitaCredenciales] = useState<"si" | "no">("si")
  const [consulta, setConsulta] = useState("")
  const [estado, setEstado] = useState<Estado>("idle")
  const [errorMsg, setErrorMsg] = useState("")

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setEstado("enviando")
    setErrorMsg("")

    try {
      const res = await fetch("/api/registro", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, necesitaCredenciales, consulta }),
      })

      const data = await res.json()

      if (!res.ok) {
        setErrorMsg(data.error ?? "Error desconocido")
        setEstado("error")
        return
      }

      setEstado("ok")
    } catch {
      setErrorMsg("No se pudo conectar con el servidor")
      setEstado("error")
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-md">

        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Solicitar acceso</h1>
          <p className="text-gray-500 text-sm mb-8">
            {necesitaCredenciales === "si"
              ? "Introduce tu email y te enviaremos los datos de acceso para empezar tu prueba gratuita de 30 días."
              : "Cuéntanos en qué podemos ayudarte y te responderemos lo antes posible."
            }
          </p>

          {estado === "ok" ? (
            <div className="text-center py-6">
              <div className="text-4xl mb-4">✅</div>
              <h2 className="text-lg font-semibold text-gray-900 mb-2">
                {necesitaCredenciales === "si" ? "¡Solicitud recibida!" : "¡Consulta enviada!"}
              </h2>
              <p className="text-gray-500 text-sm">
                {necesitaCredenciales === "si"
                  ? <>En breve recibirás un email en <strong>{email}</strong> con tus datos de acceso. Revisa también la carpeta de spam.</>
                  : <>Hemos recibido tu consulta. Te responderemos en <strong>{email}</strong> lo antes posible.</>
                }
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
                  Correo electrónico
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="tu@empresa.com"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                />
              </div>

              {/* Radio credenciales */}
              <div>
                <p className="block text-sm font-medium text-gray-700 mb-3">
                  ¿Es la primera vez que accedes a Factura365?
                </p>
                <div className="space-y-2.5">
                  <label className={`flex items-center gap-3 px-4 py-3 rounded-xl border cursor-pointer transition-colors ${
                    necesitaCredenciales === "si"
                      ? "border-blue-500 bg-blue-50"
                      : "border-gray-200 hover:border-gray-300"
                  }`}>
                    <input
                      type="radio"
                      name="credenciales"
                      value="si"
                      required
                      checked={necesitaCredenciales === "si"}
                      onChange={() => setNecesitaCredenciales("si")}
                      className="accent-blue-600"
                    />
                    <span className="text-sm text-gray-800">
                      <strong>Sí</strong> — Es la primera vez que accedo a Factura365
                    </span>
                  </label>
                  <label className={`flex items-center gap-3 px-4 py-3 rounded-xl border cursor-pointer transition-colors ${
                    necesitaCredenciales === "no"
                      ? "border-blue-500 bg-blue-50"
                      : "border-gray-200 hover:border-gray-300"
                  }`}>
                    <input
                      type="radio"
                      name="credenciales"
                      value="no"
                      checked={necesitaCredenciales === "no"}
                      onChange={() => setNecesitaCredenciales("no")}
                      className="accent-blue-600"
                    />
                    <span className="text-sm text-gray-800">
                      <strong>No</strong> — Ya tengo cuenta o quiero hacer una consulta
                    </span>
                  </label>
                </div>
              </div>

              {/* Textarea consulta — solo si elige "No" */}
              {necesitaCredenciales === "no" && (
                <div>
                  <label htmlFor="consulta" className="block text-sm font-medium text-gray-700 mb-1.5">
                    ¿En qué podemos ayudarte? <span className="text-gray-400 font-normal">(acceso, dudas, incidencias...)</span>
                  </label>
                  <textarea
                    id="consulta"
                    required
                    value={consulta}
                    onChange={(e) => setConsulta(e.target.value)}
                    placeholder="Escribe aquí tu consulta o el motivo de tu solicitud..."
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm resize-none"
                  />
                </div>
              )}

              {/* Error */}
              {estado === "error" && (
                <div className="bg-red-50 border border-red-200 rounded-xl px-4 py-3 text-sm text-red-700">
                  {errorMsg}
                </div>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={estado === "enviando"}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold px-6 py-3.5 rounded-xl text-base transition-colors"
              >
                {estado === "enviando"
                  ? "Enviando…"
                  : necesitaCredenciales === "si"
                    ? "Solicitar acceso gratis"
                    : "Enviar consulta"
                }
              </button>

              <p className="text-xs text-gray-400 text-center">
                Sin tarjeta de crédito · 30 días gratis · Cancela cuando quieras
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
