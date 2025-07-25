import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import QuoteGenApp from './QuoteGeneratorApp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QuoteGenApp />
  </StrictMode>,
)
