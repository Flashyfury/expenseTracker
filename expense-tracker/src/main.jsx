import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/global.css'
import { TransactionProvider } from './context/TransactionProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <TransactionProvider>
    <App />
  </TransactionProvider>
)
