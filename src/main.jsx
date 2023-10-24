import React from 'react'
import ReactDOM from 'react-dom/client'
import {NextUIProvider} from '@nextui-org/react'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NextUIProvider>
      <div className="dark text-foreground bg-background min-h-screen" style={{fontFamily:"system-ui"}}>
          <App/>
      </div>
    </NextUIProvider>
  </React.StrictMode>,
)