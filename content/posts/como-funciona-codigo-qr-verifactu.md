---
title: "Cómo funciona el código QR de VeriFactu: qué información contiene y para qué sirve"
date: "2026-02-20"
description: "Todas las facturas VeriFactu llevan un código QR. Te explicamos qué información contiene, cómo verificarlo, y por qué es una garantía tanto para el emisor como para el receptor."
---

Si has visto una factura generada con un software VeriFactu, habrás notado que incluye un **código QR** en algún lugar visible del documento. No es decorativo: es una pieza clave del sistema de verificación que conecta directamente con la AEAT. Te explicamos cómo funciona.

## ¿Qué es el código QR de VeriFactu?

El QR de VeriFactu es un código bidimensional que contiene una **URL de verificación** que apunta a la sede electrónica de la AEAT. Al escanearlo, el sistema de la AEAT muestra los datos del registro de facturación correspondiente, confirmando que la factura es auténtica y que sus datos no han sido modificados desde su emisión.

## ¿Qué información contiene el QR?

La URL codificada en el QR incluye, de forma comprimida:

- **NIF del emisor**
- **Número de factura** (serie y número)
- **Fecha de expedición**
- **Importe total** de la factura
- **Importe de la cuota de IVA**
- **Hash de la factura** (huella digital SHA-256)

Esta información permite al sistema de la AEAT identificar de forma unívoca el registro y compararlo con lo que tiene almacenado.

## ¿Cómo se genera el hash SHA-256?

El hash es el elemento técnico más importante del sistema VeriFactu. Se calcula aplicando el algoritmo **SHA-256** a una cadena que concatena los datos principales de la factura más el **hash de la factura anterior**. Esto crea una **cadena encadenada**: si alguien modificase una factura ya emitida, el hash de esa factura cambiaría, y con él todos los hashes de las facturas posteriores. La manipulación se detectaría inmediatamente.

Es el mismo principio que usa la tecnología blockchain, pero aplicado a registros fiscales.

## ¿Dónde debe aparecer el QR en la factura?

La **Orden HAC/1177/2024** establece especificaciones precisas:

- Tamaño: entre **30×30 mm y 40×40 mm**
- Ubicación: preferiblemente en la **parte superior de la factura**
- Debe ser perfectamente legible y escaneable en papel impreso

## ¿Qué pasa cuando escaneas el QR?

Al escanear el QR con el móvil, accedes a la **sede electrónica de la AEAT** donde puedes comprobar:

- Que la factura existe en el registro de la AEAT
- Que los datos del QR coinciden con los datos almacenados
- Si hay alguna discrepancia entre lo que dice la factura en papel y lo que registró el sistema

Esto es útil tanto para el **receptor de la factura** (que puede verificar que es auténtica antes de contabilizarla) como para el **emisor** (que tiene prueba irrefutable de que la factura fue registrada correctamente).

## ¿Para qué sirve en la práctica?

### Para el autónomo o empresa que emite la factura:
- Prueba ante Hacienda de que la factura es auténtica y no ha sido manipulada
- Protección frente a acusaciones de fraude o doble contabilidad
- Simplifica las inspecciones: todo ya está en los servidores de la AEAT

### Para el cliente que recibe la factura:
- Puede verificar que la factura es real antes de contabilizarla
- Reduce el riesgo de facturas falsas
- Mayor seguridad para la deducción del IVA

### Para la AEAT:
- Control en tiempo real de la facturación de los contribuyentes
- Detección automática de inconsistencias
- Reducción del fraude fiscal en el IVA

## ¿Todas las facturas VeriFactu tienen QR?

Solo las facturas emitidas en **modalidad VERI*FACTU** (con envío automático a la AEAT) incluyen el código QR. Las emitidas en la modalidad alternativa sin envío no incluyen el QR, aunque sí llevan el hash encadenado internamente.

---

*Factura365 genera automáticamente el código QR y el hash en cada factura, con envío instantáneo a la AEAT. [Pruébalo gratis](/registro).*
