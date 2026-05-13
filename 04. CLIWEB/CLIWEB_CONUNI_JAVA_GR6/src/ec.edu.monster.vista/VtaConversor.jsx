export default function VtaConversor({
  category,
  operations,
  opCode,
  setOpCode,
  valor,
  resultado,
  unidadOrigen,
  unidadDestino,
  onCategoryChange,
  onConvert,
  onValorChange,
  onLimpiar,
  onLogout,
}) {
  const tituloCategoria =
    category === 'longitud'
      ? 'CONVERSOR MONSTER | LONGITUD'
      : category === 'masa'
      ? 'CONVERSOR MONSTER | MASA'
      : 'CONVERSOR MONSTER | TEMPERATURA'

  const descripcionCategoria =
    category === 'longitud'
      ? 'Convierte entre kilometros, metros, centimetros, pulgadas, pies y millas.'
      : category === 'masa'
      ? 'Convierte entre kilogramos, gramos, libras, onzas y toneladas.'
      : 'Convierte entre Celsius, Fahrenheit y Kelvin.'

  return (
    <div className="desktop-shell">
      <div className="desktop-window">
        <header className="window-header">
          <h1>{tituloCategoria}</h1>
          <p>{descripcionCategoria}</p>
        </header>

        <main className="converter-card">
          <label className="field-label">Categoria</label>
          <select
            className="field-input"
            value={category}
            onChange={(e) => onCategoryChange(e.target.value)}
          >
            <option value="temperatura">Temperatura</option>
            <option value="longitud">Longitud</option>
            <option value="masa">Masa</option>
          </select>

          <label className="field-label">Operacion</label>
          <select className="field-input" value={opCode} onChange={(e) => setOpCode(e.target.value)}>
            {operations.map((op) => (
              <option key={op.code} value={op.code}>{op.label}</option>
            ))}
          </select>

          <label className="field-label">Valor a convertir</label>
          <input
            className="field-input"
            value={valor}
            onChange={(e) => onValorChange(e.target.value)}
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
            <button type="button" className="primary-btn" onClick={onConvert}>Convertir</button>
            <button type="button" className="secondary-btn" onClick={onLimpiar}>Limpiar</button>
            <button type="button" className="secondary-btn" onClick={onLogout}>Volver</button>
          </div>
        </main>
      </div>
    </div>
  )
}
