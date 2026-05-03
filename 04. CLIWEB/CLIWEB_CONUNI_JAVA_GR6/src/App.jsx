import { useState } from 'react'
import './App.css'

const API_URL = 'http://localhost:8080/WS_CONUNI_JAVA_GR6/api/conversor'

const OPERACIONES_LONGITUD = [
  { code: 'km_m', label: 'Kilometros a Metros', endpoint: 'kmametros' },
  { code: 'm_cm', label: 'Metros a Centimetros', endpoint: 'metrosacm' },
  { code: 'in_cm', label: 'Pulgadas a Centimetros', endpoint: 'pulgadasacm' },
  { code: 'ft_m', label: 'Pies a Metros', endpoint: 'piesametros' },
  { code: 'mi_km', label: 'Millas a Kilometros', endpoint: 'millasakh' },
]

const OPERACIONES_MASA = [
  { code: 'kg_g', label: 'Kilogramos a Gramos', endpoint: 'kgagramos' },
  { code: 'g_mg', label: 'Gramos a Miligramos', endpoint: 'gramosamg' },
  { code: 'lb_kg', label: 'Libras a Kilogramos', endpoint: 'librasakh' },
  { code: 'oz_g', label: 'Onzas a Gramos', endpoint: 'onzasagramos' },
  { code: 't_kg', label: 'Toneladas a Kilogramos', endpoint: 'toneladasakh' },
]

const OPERACIONES_TEMP = [
  { code: 'c_f', label: 'Celsius a Fahrenheit', endpoint: 'ctof' },
  { code: 'f_c', label: 'Fahrenheit a Celsius', endpoint: 'ftoc' },
  { code: 'c_k', label: 'Celsius a Kelvin', endpoint: 'ctok' },
  { code: 'k_c', label: 'Kelvin a Celsius', endpoint: 'ktoc' },
  { code: 'f_k', label: 'Fahrenheit a Kelvin', endpoint: 'ftok' },
  { code: 'k_f', label: 'Kelvin a Fahrenheit', endpoint: 'ktof' },
]

async function invokeRest(endpoint, valor) {
  const url = `${API_URL}/${endpoint}?valor=${encodeURIComponent(valor)}`
  const res = await fetch(url, {
    method: 'GET',
    headers: { Accept: 'application/json' },
  })

  if (!res.ok) {
    throw new Error(`HTTP ${res.status}`)
  }

  const data = await res.json()
  return {
    valorOrigen: data.valorOrigen,
    unidadOrigen: data.unidadOrigen,
    valorDestino: data.valorDestino,
    unidadDestino: data.unidadDestino,
  }
}

function App() {
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
  const operations = category === 'longitud' ? OPERACIONES_LONGITUD : category === 'masa' ? OPERACIONES_MASA : OPERACIONES_TEMP

  const handleLogin = (event) => {
    event.preventDefault()
    if (username === 'monster' && password === 'monster9') {
      setIsLoggedIn(true)
      setLoginError('')
      return
    }
    setLoginError('Credenciales inválidas')
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
    // normalize comma to dot
    const v = raw.replace(',', '.')
    // allow empty, optional leading -, digits, optional one dot, digits
    if (v === '' || /^-?\d*\.?\d*$/.test(v)) {
      setValor(v)
    }
    // otherwise ignore the input (prevents letters)
  }

  if (!isLoggedIn) {
    return (
      <div className="desktop-shell login-shell">
        <div className="login-layout">
          <section className="login-hero">
            <h1>MONSTER</h1>
            <h2>Sistema de Conversion REST</h2>
            <p>Temperatura y longitud en una interfaz limpia, rapida y ordenada.</p>
            <span>Acceso protegido para usuarios autorizados.</span>
          </section>

          <form className="login-panel" onSubmit={handleLogin}>
            <h3>Iniciar sesion</h3>
            <p>Ingresa tus credenciales para continuar</p>

            <label>
              Usuario
              <input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                autoComplete="username"
              />
            </label>

            <label>
              Contraseña
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
              />
            </label>

            {loginError ? <div className="error-text">{loginError}</div> : null}

            <div className="login-actions">
              <button type="submit" className="primary-btn">Ingresar</button>
              <button type="button" className="secondary-btn" onClick={() => { setUsername(''); setPassword(''); setLoginError('') }}>
                Salir
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  }

  return (
    <div className="desktop-shell">
      <div className="desktop-window">
        <header className="window-header">
          <h1>{category === 'longitud' ? 'CONVERSOR MONSTER | LONGITUD' : category === 'masa' ? 'CONVERSOR MONSTER | MASA' : 'CONVERSOR MONSTER | TEMPERATURA'}</h1>
          <p>{category === 'longitud' ? 'Convierte entre kilometros, metros, centimetros, pulgadas, pies y millas.' : category === 'masa' ? 'Convierte entre kilogramos, gramos, libras, onzas y toneladas.' : 'Convierte entre Celsius, Fahrenheit y Kelvin.'}</p>
        </header>

        <main className="converter-card">
          <label className="field-label">Categoria</label>
          <select
            className="field-input"
            value={category}
            onChange={(e) => {
              const nextCategory = e.target.value
              setCategory(nextCategory)
              const nextOps = nextCategory === 'longitud' ? OPERACIONES_LONGITUD : nextCategory === 'masa' ? OPERACIONES_MASA : OPERACIONES_TEMP
              setOpCode(nextOps[0].code)
              setResultado(null)
              setUnidadOrigen('')
              setUnidadDestino('')
            }}
          >
            <option value="temperatura">Temperatura</option>
            <option value="longitud">Longitud</option>
            <option value="masa">Masa</option>
          </select>

          <label className="field-label">Operacion</label>
          <select className="field-input" value={opCode} onChange={e => setOpCode(e.target.value)}>
            {operations.map(op => (
              <option key={op.code} value={op.code}>{op.label}</option>
            ))}
          </select>

          <label className="field-label">Valor a convertir</label>
          <input
            className="field-input"
            value={valor}
            onChange={e => handleValorChange(e.target.value)}
            placeholder="Ingrese valor"
            inputMode="decimal"
          />

          <label className="field-label">Resultado</label>
          <section className="result-box">
            <strong>{resultado ?? 'Esperando conversion...'}</strong>
            <span>{unidadOrigen}</span>
            <span>{unidadDestino}</span>
          </section>

          <div className="buttons-grid">
            <button type="button" className="primary-btn" onClick={handleConvert}>Convertir</button>
            <button
              type="button"
              className="secondary-btn"
              onClick={() => {
                setValor('')
                setResultado(null)
                setUnidadOrigen('')
                setUnidadDestino('')
              }}
            >
              Limpiar
            </button>
            <button type="button" className="secondary-btn" onClick={() => setIsLoggedIn(false)}>Volver</button>
          </div>
        </main>
      </div>
    </div>
  )
}

export default App

