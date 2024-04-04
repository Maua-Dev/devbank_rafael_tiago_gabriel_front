import { AppRouter } from "./AppRouter"
import { AssessmentProvider } from "./contexts/assessment-context"

function App() {

  return (
    <AssessmentProvider>
      <AppRouter />
    </AssessmentProvider>
  )
}

export default App
