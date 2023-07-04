import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { PayPalScriptProvider } from '@paypal/react-paypal-js'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PayPalScriptProvider 
      options={{
        "client-id":
          "AXx5HijpPCCivSZQmkuZNDXCqFCdVyxPzZc9E4GTA4uWUOZbw-q2ZZ35upqwWCOGrvMEq5S9QUte3aTn",
      }}>
    <BrowserRouter>
    
    <App />
    
    </BrowserRouter>
</PayPalScriptProvider>
  </React.StrictMode>
)
