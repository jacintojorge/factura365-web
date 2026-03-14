// ============================================================
//  CONFIGURACIÓN DE PRECIOS — cambia aquí y se actualiza todo
// ============================================================

export const PRICE_MONTHLY = 12 // € / mes + IVA

// Descuento anual: 2 meses gratis → pagas 10 meses al año
export const ANNUAL_MONTHS_PAID = 10
export const PRICE_ANNUAL = PRICE_MONTHLY * ANNUAL_MONTHS_PAID // total al año
export const PRICE_ANNUAL_MONTHLY = PRICE_ANNUAL / 12          // equivalente mensual

export const PRICE_CURRENCY = "€"
export const PRICE_TAX_NOTE = "+ IVA"
export const PRICE_UNIT = "por empresa / NIF emisor"

// Etiqueta del ahorro anual para mostrar en la UI
export const ANNUAL_SAVINGS = PRICE_MONTHLY * 2
export const ANNUAL_SAVINGS_LABEL = `Ahorras ${ANNUAL_SAVINGS}${PRICE_CURRENCY} al año`
