
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { TodoProvider } from './context/todo'

createRoot(document.getElementById('root')!).render(
  <TodoProvider>
    <App />
  </TodoProvider>,
)
