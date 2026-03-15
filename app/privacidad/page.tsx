import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Política de Privacidad",
  description: "Política de privacidad y protección de datos de Factura365.",
}

export default function Privacidad() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Política de Privacidad</h1>
      <p className="text-sm text-gray-400 mb-10">Última actualización: marzo de 2026</p>

      <div className="prose prose-gray max-w-none">

        <h2>1. Responsable del tratamiento</h2>
        <ul>
          <li><strong>Identidad:</strong> Tecnofun Digital, S.L.</li>
          <li><strong>CIF:</strong> B-85000354</li>
          <li><strong>Dirección:</strong> Avenida Lazarejo 178, 28232 Las Rozas de Madrid, Madrid</li>
          <li><strong>Correo electrónico:</strong> hola@factura365.es</li>
          <li><strong>Teléfono:</strong> 916 266 392</li>
        </ul>

        <h2>2. Datos que recogemos</h2>
        <p>Recogemos los siguientes datos personales:</p>
        <ul>
          <li><strong>Datos de registro:</strong> nombre, apellidos, dirección de correo electrónico, nombre de empresa y NIF/CIF, al cumplimentar el formulario de alta en el servicio.</li>
          <li><strong>Datos de uso:</strong> información técnica sobre cómo utilizas el servicio (dispositivo, sistema operativo, accesos) con fines de mantenimiento y seguridad.</li>
          <li><strong>Datos de facturación:</strong> los datos que introduces en el software para generar tus facturas (clientes, productos, importes). Estos datos son de tu exclusiva titularidad; nosotros solo los almacenamos y procesamos en tu nombre.</li>
          <li><strong>Comunicaciones:</strong> el contenido de los mensajes que nos envíes por correo electrónico.</li>
        </ul>

        <h2>3. Finalidad y base jurídica del tratamiento</h2>
        <table>
          <thead>
            <tr>
              <th>Finalidad</th>
              <th>Base jurídica</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Prestación del servicio de facturación</td>
              <td>Ejecución del contrato (art. 6.1.b RGPD)</td>
            </tr>
            <tr>
              <td>Gestión de facturación y pagos</td>
              <td>Ejecución del contrato y obligación legal</td>
            </tr>
            <tr>
              <td>Soporte técnico y atención al cliente</td>
              <td>Ejecución del contrato</td>
            </tr>
            <tr>
              <td>Comunicaciones sobre el servicio (cambios, actualizaciones)</td>
              <td>Interés legítimo / ejecución del contrato</td>
            </tr>
            <tr>
              <td>Comunicaciones comerciales (novedades, ofertas)</td>
              <td>Consentimiento del interesado (art. 6.1.a RGPD)</td>
            </tr>
            <tr>
              <td>Cumplimiento de obligaciones legales y fiscales</td>
              <td>Obligación legal (art. 6.1.c RGPD)</td>
            </tr>
          </tbody>
        </table>

        <h2>4. Conservación de los datos</h2>
        <p>
          Los datos de registro y uso se conservan mientras estés dado de alta en el servicio y,
          posteriormente, durante los plazos legalmente exigidos (mínimo 5 años para datos fiscales,
          conforme a la Ley General Tributaria).
        </p>
        <p>
          Los datos de facturación que introduces en la aplicación se conservan durante el tiempo
          que mantengas tu suscripción activa. Tras la baja, se conservan 30 días para permitirte
          exportarlos, transcurridos los cuales se eliminan definitivamente.
        </p>

        <h2>5. Destinatarios y transferencias internacionales</h2>
        <p>
          No cedemos tus datos a terceros salvo obligación legal o cuando sea estrictamente necesario
          para la prestación del servicio (por ejemplo, procesadores de pago). En ningún caso
          vendemos tus datos.
        </p>
        <p>
          Los datos de facturación son enviados a la AEAT a través del sistema VeriFactu, en
          cumplimiento del Real Decreto 1007/2023. Dicha comunicación es una obligación legal y
          forma parte del funcionamiento esencial del servicio.
        </p>
        <p>
          No realizamos transferencias internacionales de datos fuera del Espacio Económico Europeo.
        </p>

        <h2>6. Tus derechos</h2>
        <p>
          Puedes ejercer en cualquier momento los siguientes derechos enviando un correo a
          <strong> hola@factura365.es</strong> con copia de tu documento de identidad:
        </p>
        <ul>
          <li><strong>Acceso:</strong> conocer qué datos tenemos sobre ti.</li>
          <li><strong>Rectificación:</strong> corregir datos inexactos o incompletos.</li>
          <li><strong>Supresión:</strong> solicitar la eliminación de tus datos cuando ya no sean necesarios.</li>
          <li><strong>Limitación:</strong> solicitar que suspendamos el tratamiento en determinadas circunstancias.</li>
          <li><strong>Portabilidad:</strong> recibir tus datos en formato estructurado y legible por máquina.</li>
          <li><strong>Oposición:</strong> oponerte al tratamiento basado en interés legítimo o a comunicaciones comerciales.</li>
        </ul>
        <p>
          Si consideras que el tratamiento no es conforme al RGPD, tienes derecho a presentar una
          reclamación ante la <strong>Agencia Española de Protección de Datos (AEPD)</strong>
          en <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer">www.aepd.es</a>.
        </p>

        <h2>7. Seguridad</h2>
        <p>
          Aplicamos medidas técnicas y organizativas adecuadas para proteger tus datos frente a
          accesos no autorizados, pérdida o destrucción, en cumplimiento del artículo 32 del RGPD.
          Las comunicaciones con nuestros servidores se realizan siempre mediante conexión cifrada HTTPS.
        </p>

      </div>
    </div>
  )
}
