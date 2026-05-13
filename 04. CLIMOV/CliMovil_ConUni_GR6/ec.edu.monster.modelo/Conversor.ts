export const API_URL = 'http://192.168.1.12:8082/WS_CONUNI_JAVA_GR6/api/conversor'

export type Operacion = { code: string; label: string; endpoint: string }

export const OPERACIONES_LONGITUD: Operacion[] = [
  { code: 'km_m', label: 'Kilometros a Metros', endpoint: 'kmametros' },
  { code: 'm_cm', label: 'Metros a Centimetros', endpoint: 'metrosacm' },
  { code: 'in_cm', label: 'Pulgadas a Centimetros', endpoint: 'pulgadasacm' },
  { code: 'ft_m', label: 'Pies a Metros', endpoint: 'piesametros' },
  { code: 'mi_km', label: 'Millas a Kilometros', endpoint: 'millasakh' },
]

export const OPERACIONES_MASA: Operacion[] = [
  { code: 'kg_g', label: 'Kilogramos a Gramos', endpoint: 'kgagramos' },
  { code: 'g_mg', label: 'Gramos a Miligramos', endpoint: 'gramosamg' },
  { code: 'lb_kg', label: 'Libras a Kilogramos', endpoint: 'librasakh' },
  { code: 'oz_g', label: 'Onzas a Gramos', endpoint: 'onzasagramos' },
  { code: 't_kg', label: 'Toneladas a Kilogramos', endpoint: 'toneladasakh' },
]

export const OPERACIONES_TEMP: Operacion[] = [
  { code: 'c_f', label: 'Celsius a Fahrenheit', endpoint: 'ctof' },
  { code: 'f_c', label: 'Fahrenheit a Celsius', endpoint: 'ftoc' },
  { code: 'c_k', label: 'Celsius a Kelvin', endpoint: 'ctok' },
  { code: 'k_c', label: 'Kelvin a Celsius', endpoint: 'ktoc' },
  { code: 'f_k', label: 'Fahrenheit a Kelvin', endpoint: 'ftok' },
  { code: 'k_f', label: 'Kelvin a Fahrenheit', endpoint: 'ktof' },
]

export function getOperacionesByCategoria(categoria: string): Operacion[] {
  if (categoria === 'Longitud') return OPERACIONES_LONGITUD
  if (categoria === 'Masa') return OPERACIONES_MASA
  return OPERACIONES_TEMP
}
