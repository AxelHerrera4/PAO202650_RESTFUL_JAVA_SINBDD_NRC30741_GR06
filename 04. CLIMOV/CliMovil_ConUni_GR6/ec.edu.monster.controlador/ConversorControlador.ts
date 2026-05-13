import { useState, useMemo, useEffect } from 'react'
import { Alert } from 'react-native'
import { API_URL, Operacion, getOperacionesByCategoria, OPERACIONES_TEMP } from '../ec.edu.monster.modelo/Conversor'

export async function calcularREST(endpoint: string, valor: string) {
  const url = `${API_URL}/${endpoint}?valor=${encodeURIComponent(valor)}`
  const response = await fetch(url, { method: 'GET', headers: { Accept: 'application/json' } })
  if (!response.ok) throw new Error(`HTTP ${response.status}`)
  const data = await response.json()
  return {
    valorOrigen: data.valorOrigen,
    unidadOrigen: data.unidadOrigen,
    valorDestino: parseFloat(data.valorDestino).toFixed(2),
    unidadDestino: data.unidadDestino,
  }
}

export function useConversorControlador() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [category, setCategory] = useState('Temperatura')
  const [valor, setValor] = useState('')
  const [operation, setOperation] = useState('')
  const [resultado, setResultado] = useState('...')
  const [unidadOrigen, setUnidadOrigen] = useState('')
  const [unidadDestino, setUnidadDestino] = useState('')

  const operationsList: Operacion[] = useMemo(
    () => getOperacionesByCategoria(category),
    [category]
  )

  useEffect(() => {
    if (!operation && operationsList.length > 0) setOperation(operationsList[0].code)
  }, [operationsList])

  const handleLogin = () => {
    if (username === 'monster' && password === 'monster9') {
      setIsLoggedIn(true)
      setUsername('')
      setPassword('')
    } else {
      Alert.alert('Error', 'Credenciales incorrectas')
    }
  }

  const handleCategoryChange = (newCategory: string) => {
    setCategory(newCategory)
    const ops = getOperacionesByCategoria(newCategory)
    setOperation(ops[0]?.code || '')
    setResultado('...')
    setUnidadOrigen('')
    setUnidadDestino('')
  }

  const handleValorChange = (raw: string) => {
    const normalized = raw.replace(',', '.')
    if (/^-?\d*\.?\d*$/.test(normalized)) setValor(normalized)
  }

  const handleConvert = async () => {
    if (!valor) return Alert.alert('Aviso', 'Ingresa un valor')
    const op = operationsList.find(o => o.code === operation)
    if (!op) return Alert.alert('Error', 'Conversión no disponible')
    try {
      const r = await calcularREST(op.endpoint, valor)
      setResultado(r.valorDestino)
      setUnidadOrigen(`Origen: ${r.valorOrigen} ${r.unidadOrigen}`)
      setUnidadDestino(`Destino: ${r.valorDestino} ${r.unidadDestino}`)
    } catch (e) {
      Alert.alert('Error', 'No se pudo conectar con el servidor')
      console.error(e)
    }
  }

  const handleLimpiar = () => {
    setValor('')
    setResultado('...')
    setUnidadOrigen('')
    setUnidadDestino('')
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
    setValor('')
    setResultado('...')
    setUnidadOrigen('')
    setUnidadDestino('')
    setCategory('Temperatura')
    setOperation('')
  }

  return {
    isLoggedIn,
    username, setUsername,
    password, setPassword,
    category,
    valor,
    operation, setOperation,
    resultado,
    unidadOrigen,
    unidadDestino,
    operationsList,
    handleLogin,
    handleCategoryChange,
    handleValorChange,
    handleConvert,
    handleLimpiar,
    handleLogout,
  }
}
