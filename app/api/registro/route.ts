import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  const paUrl = process.env.POWER_AUTOMATE_REGISTRO_URL

  if (!paUrl) {
    console.error("POWER_AUTOMATE_REGISTRO_URL no está configurada")
    return NextResponse.json(
      { error: "Configuración del servidor incompleta" },
      { status: 500 }
    )
  }

  let body: { email?: string; necesitaCredenciales?: string }
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: "Datos inválidos" }, { status: 400 })
  }

  const { email, necesitaCredenciales } = body

  if (!email || !email.includes("@")) {
    return NextResponse.json({ error: "Email inválido" }, { status: 400 })
  }

  if (!necesitaCredenciales) {
    return NextResponse.json({ error: "Falta la respuesta sobre credenciales" }, { status: 400 })
  }

  try {
    const response = await fetch(paUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        necesitaCredenciales,
        fecha: new Date().toISOString(),
        origen: "web",
      }),
    })

    if (!response.ok) {
      console.error("Error de Power Automate:", response.status, await response.text())
      return NextResponse.json(
        { error: "Error al procesar el registro" },
        { status: 502 }
      )
    }

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error("Error conectando con Power Automate:", err)
    return NextResponse.json(
      { error: "No se pudo conectar con el servidor" },
      { status: 502 }
    )
  }
}
