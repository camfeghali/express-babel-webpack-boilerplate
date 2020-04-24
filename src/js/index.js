/** @jsx MunkeyReact.createElement */

import '../css/style.css'
import { App } from './App'
import { MunkeyReact } from './dom'

// **********************************
// **********************************
// **********************************

// Needed for Hot Module Replacement
if(typeof(module.hot) !== 'undefined') {
  module.hot.accept() // eslint-disable-line no-undef  
}

const root = document.getElementById('root')


root.innerHTML = `${App()}`