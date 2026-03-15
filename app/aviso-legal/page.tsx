import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Aviso Legal",
  description: "Aviso legal de Factura365, servicio de Tecnofun Digital S.L.",
}

export default function AvisoLegal() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Aviso Legal</h1>
      <p className="text-sm text-gray-400 mb-10">Última actualización: marzo de 2026</p>

      <div className="prose prose-gray max-w-none">

        <h2>1. Datos identificativos del titular</h2>
        <p>
          En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la
          Sociedad de la Información y de Comercio Electrónico (LSSICE), se informa de los
          siguientes datos identificativos:
        </p>
        <ul>
          <li><strong>Razón social:</strong> Tecnofun Digital, S.L.</li>
          <li><strong>CIF:</strong> B-85000354</li>
          <li><strong>Domicilio social:</strong> Avenida Lazarejo 178, 28232 Las Rozas de Madrid, Madrid</li>
          <li><strong>Registro Mercantil:</strong> Madrid</li>
          <li><strong>Correo electrónico:</strong> hola@factura365.es</li>
          <li><strong>Teléfono:</strong> 916 266 392</li>
          <li><strong>Sitio web:</strong> https://www.factura365.es</li>
        </ul>

        <h2>2. Objeto y ámbito de aplicación</h2>
        <p>
          El presente Aviso Legal regula el acceso y uso del sitio web <strong>www.factura365.es</strong>
          (en adelante, «el Sitio Web»), así como el servicio de software de facturación certificado
          VeriFactu ofrecido a través del mismo (en adelante, «el Servicio»).
        </p>
        <p>
          El acceso al Sitio Web implica la aceptación plena y sin reservas de las presentes condiciones.
          Tecnofun Digital, S.L. se reserva el derecho a modificar el presente Aviso Legal en cualquier
          momento, siendo responsabilidad del usuario revisar periódicamente su contenido.
        </p>

        <h2>3. Propiedad intelectual e industrial</h2>
        <p>
          Todos los contenidos del Sitio Web —incluyendo, sin carácter limitativo, textos, imágenes,
          logotipos, diseño gráfico, código fuente y software— son propiedad de Tecnofun Digital, S.L.
          o de sus licenciantes, y están protegidos por las leyes españolas e internacionales de
          propiedad intelectual e industrial.
        </p>
        <p>
          Queda expresamente prohibida la reproducción, distribución, comunicación pública o
          transformación de cualquier contenido sin autorización escrita previa de Tecnofun Digital, S.L.
        </p>

        <h2>4. Condiciones de uso del servicio</h2>
        <p>
          El Servicio está dirigido exclusivamente a empresas y profesionales que actúen en el ejercicio
          de su actividad económica. El usuario se compromete a:
        </p>
        <ul>
          <li>Proporcionar datos verídicos en el proceso de registro.</li>
          <li>Hacer un uso lícito del Servicio, conforme a la legislación vigente.</li>
          <li>No utilizar el Servicio para fines fraudulentos, ilegales o que vulneren derechos de terceros.</li>
          <li>Mantener la confidencialidad de sus credenciales de acceso.</li>
        </ul>

        <h2>5. Exclusión de garantías y responsabilidad</h2>
        <p>
          Tecnofun Digital, S.L. no garantiza la disponibilidad continua e ininterrumpida del Sitio Web
          ni del Servicio, pudiendo suspenderlos temporalmente por razones técnicas, de mantenimiento o
          de seguridad. Asimismo, no se responsabiliza de los daños derivados del uso indebido del
          Servicio o de la información contenida en el Sitio Web.
        </p>
        <p>
          El cumplimiento de las obligaciones fiscales del usuario frente a la AEAT es responsabilidad
          exclusiva de éste. Factura365 proporciona las herramientas técnicas necesarias para cumplir
          con la normativa VeriFactu, pero no asesora fiscalmente ni actúa como representante del usuario.
        </p>

        <h2>6. Legislación aplicable y jurisdicción</h2>
        <p>
          El presente Aviso Legal se rige por la legislación española. Para la resolución de cualquier
          controversia derivada del acceso o uso del Sitio Web, las partes se someten, con renuncia
          expresa a cualquier otro fuero, a los Juzgados y Tribunales de Madrid.
        </p>

      </div>
    </div>
  )
}
