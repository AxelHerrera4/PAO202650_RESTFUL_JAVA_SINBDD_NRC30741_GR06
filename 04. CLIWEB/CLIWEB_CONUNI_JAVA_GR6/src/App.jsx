import './App.css'
import { useConversorControlador } from './ec.edu.monster.controlador/ConversorControlador'
import VtaLogin from './ec.edu.monster.vista/VtaLogin'
import VtaConversor from './ec.edu.monster.vista/VtaConversor'

function App() {
  const ctrl = useConversorControlador()

  if (!ctrl.isLoggedIn) {
    return (
      <VtaLogin
        username={ctrl.username}
        setUsername={ctrl.setUsername}
        password={ctrl.password}
        setPassword={ctrl.setPassword}
        loginError={ctrl.loginError}
        onLogin={ctrl.handleLogin}
      />
    )
  }

  return (
    <VtaConversor
      category={ctrl.category}
      operations={ctrl.operations}
      opCode={ctrl.opCode}
      setOpCode={ctrl.setOpCode}
      valor={ctrl.valor}
      resultado={ctrl.resultado}
      unidadOrigen={ctrl.unidadOrigen}
      unidadDestino={ctrl.unidadDestino}
      onCategoryChange={ctrl.handleCategoryChange}
      onConvert={ctrl.handleConvert}
      onValorChange={ctrl.handleValorChange}
      onLimpiar={ctrl.handleLimpiar}
      onLogout={ctrl.handleLogout}
    />
  )
}

export default App
