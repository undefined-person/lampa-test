import { Header } from 'components'
import { Router } from 'routes'

function App() {
  return (
    <>
      <Header />
      <main className="container mx-auto">
        <Router />
      </main>
    </>
  )
}

export default App
