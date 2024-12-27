import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './vid2/card.css'
import App from './App.jsx'
import App2 from './vid2/App.jsx'
import App3 from './App3/App.jsx'
import App4 from './conditional-rendering/App.jsx'
import App5 from './list/App.jsx'
import App6 from './click-event/App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App6/>
  </StrictMode>,
)
