export default function VtaLogin({ username, setUsername, password, setPassword, loginError, onLogin }) {
  return (
    <div className="desktop-shell login-shell">
      <div className="login-layout">
        <section className="login-hero">
          <h1>MONSTER</h1>
          <h2>Sistema de Conversion REST</h2>
          <p>Temperatura y longitud en una interfaz limpia, rapida y ordenada.</p>
          <span>Acceso protegido para usuarios autorizados.</span>
        </section>

        <form className="login-panel" onSubmit={onLogin}>
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
            <button
              type="button"
              className="secondary-btn"
              onClick={() => { setUsername(''); setPassword('') }}
            >
              Salir
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
