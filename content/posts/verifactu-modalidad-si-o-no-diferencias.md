---
title: "VeriFactu modalidad SÍ y NO: qué diferencia hay y cuál te conviene"
date: "2026-01-22"
description: "El sistema VeriFactu tiene dos modalidades: con envío automático a la AEAT (VERI*FACTU) y sin envío pero con conservación local. Te explicamos la diferencia y cuál es mejor para tu negocio."
---

Cuando estudias VeriFactu en detalle, enseguida aparece una distinción que genera confusión: el sistema tiene **dos modalidades de funcionamiento**, y no son equivalentes. Se conocen informalmente como "modalidad SÍ" y "modalidad NO", aunque sus nombres técnicos son distintos.

## ¿Qué es la modalidad VERI*FACTU (modalidad SÍ)?

En esta modalidad, el software de facturación **envía automáticamente cada registro de facturación a la AEAT** en el momento en que se genera la factura, o en un envío diferido (máximo 4 días naturales en general, 1 día hábil para operaciones a plazos).

Cada factura lleva:
- Un **código QR** con un enlace al registro en la sede de la AEAT
- Un **hash SHA-256** encadenado con la factura anterior, que hace imposible modificar registros sin romper la cadena
- La huella `VERI*FACTU` que indica que la factura está registrada

**Ventaja clave:** El cliente o cualquier persona puede escanear el QR de la factura y verificar en la web de la AEAT que es auténtica. Esto **genera confianza** y protege al emisor frente a posibles disputas.

## ¿Qué es la modalidad "No VeriFactu" (modalidad NO)?

En esta modalidad, el software **no envía los registros a la AEAT de forma automática**, pero igualmente debe:
- Calcular y almacenar el hash encadenado de cada factura
- Conservar el registro de facturación localmente de forma íntegra e inalterable
- Poner los registros a disposición de la AEAT cuando sean requeridos en una inspección

Las facturas **no llevan el código QR** verificable en la sede de la AEAT.

**Inconveniente:** En caso de inspección, debes poder demostrar que tus registros son íntegros. Si hay cualquier inconsistencia, la carga de la prueba recae sobre ti.

## Comparativa directa

| Aspecto | Modalidad SÍ (VERI*FACTU) | Modalidad NO |
|---|---|---|
| Envío a AEAT | Automático en cada factura | Solo si hay inspección |
| Código QR verificable | ✅ Sí | ❌ No |
| Seguridad frente a inspecciones | Muy alta | Media |
| Complejidad técnica | Requiere conexión a internet | Funciona sin conexión |
| Confianza para el cliente | Alta (factura verificable) | Normal |
| Aplica a | Todos los obligados | Todos los obligados |

## ¿Cuál es mejor para un autónomo o pyme?

Para la gran mayoría de autónomos y pymes, la **modalidad SÍ (VERI*FACTU) es la mejor opción** por varias razones:

1. **Mayor protección legal**: si Hacienda comprueba tus facturas, toda la información ya está en sus servidores. No hay nada que cuestionar.
2. **Confianza comercial**: tus clientes pueden verificar la autenticidad de cada factura escaneando el QR.
3. **Simplicidad operativa**: no tienes que preocuparte de conservar registros locales ni de presentarlos en caso de requerimiento.
4. **Es la modalidad que recomienda la AEAT** para el grueso de contribuyentes.

La modalidad NO puede tener sentido en entornos sin conexión estable a internet o en operaciones muy específicas, pero para el día a día de un autónomo o pequeña empresa, la modalidad SÍ es la opción práctica.

## ¿Puedo cambiar de modalidad?

Sí, pero con matices. Puedes cambiar de modalidad para **distintas facturas o series de facturación**, pero dentro de un mismo ejercicio fiscal debes ser consistente. No puedes mezclar modalidades arbitrariamente para una misma serie de facturas.

---

*Factura365 funciona en modalidad VERI*FACTU, con envío automático a la AEAT y código QR en cada factura. [Empieza gratis](/registro) y olvídate de gestionar registros locales.*
