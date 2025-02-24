import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './routes/App.tsx'
import { DashbordProvider } from './context/dashbordContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <DashbordProvider>
      <App />
    </DashbordProvider>
  </StrictMode>,
)
