import { AppRouter } from "./AppRouter"
import { DadosConta } from "./contexts/assessment-context"

function App() {

  return (
    <DadosConta>
      <AppRouter />
    </DadosConta>
  )
}

export default App
