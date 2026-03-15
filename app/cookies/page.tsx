import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Política de Cookies",
  description: "Política de cookies de Factura365. Qué cookies usamos y cómo gestionarlas.",
}

export default function Cookies() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Política de Cookies</h1>
      <p className="text-sm text-gray-400 mb-10">Última actualización: marzo de 2026</p>

      <div className="prose prose-gray max-w-none">

        <h2>1. ¿Qué son las cookies?</h2>
        <p>
          Las cookies son pequeños archivos de texto que los sitios web almacenan en tu navegador
          cuando los visitas. Sirven para recordar tus preferencias, mejorar la experiencia de
          navegación y, en algunos casos, recopilar información estadística sobre el uso del sitio.
        </p>

        <h2>2. ¿Qué cookies utiliza este sitio web?</h2>

        <h3>Cookies técnicas (estrictamente necesarias)</h3>
        <p>
          Son imprescindibles para el funcionamiento básico del sitio web. No requieren
          consentimiento previo según el artículo 22.2 de la LSSICE.
        </p>
        <table>
          <thead>
            <tr>
              <th>Cookie</th>
              <th>Finalidad</th>
              <th>Duración</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>__session</code></td>
              <td>Mantiene la sesión de usuario autenticado</td>
              <td>Sesión</td>
            </tr>
            <tr>
              <td><code>_csrf</code></td>
              <td>Protección contra ataques CSRF</td>
              <td>Sesión</td>
            </tr>
          </tbody>
        </table>

        <h3>Cookies analíticas</h3>
        <p>
          Permiten analizar el uso del sitio web de forma agregada y anónima para mejorar
          su funcionamiento. Requieren tu consentimiento.
        </p>
        <table>
          <thead>
            <tr>
              <th>Cookie</th>
              <th>Proveedor</th>
              <th>Finalidad</th>
              <th>Duración</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>_ga</code></td>
              <td>Google Analytics</td>
              <td>Distinguir usuarios únicos</td>
              <td>2 años</td>
            </tr>
            <tr>
              <td><code>_ga_*</code></td>
              <td>Google Analytics</td>
              <td>Mantener el estado de la sesión</td>
              <td>2 años</td>
            </tr>
          </tbody>
        </table>

        <h2>3. ¿Cómo puedo gestionar o eliminar las cookies?</h2>
        <p>
          Puedes configurar tu navegador para aceptar, rechazar o eliminar cookies en cualquier
          momento. Ten en cuenta que desactivar algunas cookies puede afectar al funcionamiento
          del sitio web. Aquí tienes las instrucciones para los navegadores más habituales:
        </p>
        <ul>
          <li>
            <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer">
              Google Chrome
            </a>
          </li>
          <li>
            <a href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias" target="_blank" rel="noopener noreferrer">
              Mozilla Firefox
            </a>
          </li>
          <li>
            <a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer">
              Safari
            </a>
          </li>
          <li>
            <a href="https://support.microsoft.com/es-es/microsoft-edge/eliminar-las-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer">
              Microsoft Edge
            </a>
          </li>
        </ul>

        <h2>4. Cookies de terceros</h2>
        <p>
          Algunas cookies son instaladas por servicios de terceros. Puedes consultar sus propias
          políticas de privacidad:
        </p>
        <ul>
          <li>
            <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
              Política de privacidad de Google
            </a>
          </li>
        </ul>

        <h2>5. Actualizaciones de esta política</h2>
        <p>
          Podemos actualizar esta Política de Cookies para reflejar cambios en el sitio web o en
          la legislación aplicable. Te recomendamos revisar esta página periódicamente. La fecha
          de última actualización aparece al inicio del documento.
        </p>

        <h2>6. Contacto</h2>
        <p>
          Si tienes alguna pregunta sobre el uso de cookies en este sitio, puedes contactarnos
          en <a href="mailto:hola@factura365.es">hola@factura365.es</a>.
        </p>

      </div>
    </div>
  )
}
