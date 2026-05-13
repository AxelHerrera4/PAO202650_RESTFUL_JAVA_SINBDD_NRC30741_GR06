import { useState } from 'react'
import { API_URL, OPERACIONES_LONGITUD, getOperacionesByCategoria } from '../ec.edu.monster.modelo/Conversor'

export async function invokeRest(endpoint, valor) {
  const url = `${API_URL}/${endpoint}?valor=${encodeURIComponent(valor)}`
  const res = await fetch(url, { method: 'GET', headers: { Accept: 'application/json' } })
  if (!res.ok) throw new Error(`HTTP ${res.status}`)
  const data = await res.json()
  return {
    valorOrigen: data.valorOrigen,
    unidadOrigen: data.unidadOrigen,
    valorDestino: data.valorDestino,
    unidadDestino: data.unidadDestino,
  }
}

export function useConversorControlador() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [loginError, setLoginError] = useState('')
  const [category, setCategory] = useState('longitud')
  const [opCode, setOpCode] = useState(OPERACIONES_LONGITUD[0].code)
  const [valor, setValor] = useState('')
  const [resultado, setResultado] = useState(null)
  const [unidadOrigen, setUnidadOrigen] = useState('')
  const [unidadDestino, setUnidadDestino] = useState('')

  const operations = getOperacionesByCategoria(category)

  const handleLogin = (event) => {
    event.preventDefault()
    if (username === 'monster' && password === 'monster9') {
      setIsLoggedIn(true)
      setLoginError('')
      return
    }
    setLoginError('Credenciales inválidas')
  }

  const handleCategoryChange = (nextCategory) => {
    setCategory(nextCategory)
    const nextOps = getOperacionesByCategoria(nextCategory)
    setOpCode(nextOps[0].code)
    setResultado(null)
    setUnidadOrigen('')
    setUnidadDestino('')
  }

  const handleConvert = async () => {
    if (!valor) return
    const op = operations.find(o => o.code === opCode)
    try {
      const r = await invokeRest(op.endpoint, valor)
      setResultado(`${r.valorDestino} ${r.unidadDestino}`)
      setUnidadOrigen(`Origen: ${r.valorOrigen} ${r.unidadOrigen}`)
      setUnidadDestino(`Destino: ${r.valorDestino} ${r.unidadDestino}`)
    } catch (e) {
      setResultado('Error: ' + e.message)
      setUnidadOrigen('')
      setUnidadDestino('')
    }
  }

  const handleValorChange = (raw) => {
    const v = raw.replace(',', '.')
    if (v === '' || /^-?\d*\.?\d*$/.test(v)) setValor(v)
  }

  const handleLimpiar = () => {
    setValor('')
    setResultado(null)
    setUnidadOrigen('')
    setUnidadDestino('')
  }

  const handleLogout = () => setIsLoggedIn(false)

  return {
    isLoggedIn,
    username, setUsername,
    password, setPassword,
    loginError,
    category,
    opCode, setOpCode,
    valor,
    resultado,
    unidadOrigen,
    unidadDestino,
    operations,
    handleLogin,
    handleCategoryChange,
    handleConvert,
    handleValorChange,
    handleLimpiar,
    handleLogout,
  }
}
