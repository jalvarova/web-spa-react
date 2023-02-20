import React from 'react'
import ReactDOM from 'react-dom'

import Main from './main'


const App = () => {
  console.log('Hello from component')

  return (
    <Main />
  )
}

ReactDOM.render(<App />, document.getElementById('root')) 