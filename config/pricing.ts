// ============================================================
//  CONFIGURACIÓN DE PRECIOS — cambia aquí y se actualiza todo
// ============================================================

export const PRICE_MONTHLY = 15 // € / mes + IVA

// Precio anual fijo (ahorro de 36€ respecto a pagar 12 meses)
export const PRICE_ANNUAL = 144                                // total al año
export const PRICE_ANNUAL_MONTHLY = PRICE_ANNUAL / 12         // equivalente mensual (12€)
export const ANNUAL_MONTHS_PAID = PRICE_ANNUAL / PRICE_MONTHLY // meses equivalentes pagados

export const PRICE_CURRENCY = "€"
export const PRICE_TAX_NOTE = "+ IVA"
export const PRICE_UNIT = "por empresa / NIF emisor"

// Etiqueta del ahorro anual para mostrar en la UI
export const ANNUAL_SAVINGS = PRICE_MONTHLY * 12 - PRICE_ANNUAL  // 180 - 144 = 36€
export const ANNUAL_SAVINGS_LABEL = `Ahorras ${ANNUAL_SAVINGS}${PRICE_CURRENCY} al año`
