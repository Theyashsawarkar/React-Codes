import ReactDOM from 'react-dom/client'
// import App from './App'
import React from 'react'

const ele = React.createElement('h1',
  {},
  'this is the coolest thing')

ReactDOM.createRoot(document.getElementById('root')).render(
  ele
)
