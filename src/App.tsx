import { AppProvider } from './context/AppContext'
import Layout from './Layout'

function App() {
  return (
    <AppProvider>
      <Layout />
    </AppProvider>
  )
}

export default App
