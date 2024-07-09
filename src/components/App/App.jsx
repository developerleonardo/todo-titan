import { TodoProvider } from '../Context'
import '../../App.css'
import { AppUI } from './AppUI'

function App() {
  return (
    <>
      <TodoProvider>
        <AppUI />
      </TodoProvider>
    </>
  )
}

export default App
