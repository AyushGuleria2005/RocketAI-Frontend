import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { DocumentProvider } from './context/Document.jsx'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <DocumentProvider>
    <App />
  </DocumentProvider>
  // </StrictMode>,
)
