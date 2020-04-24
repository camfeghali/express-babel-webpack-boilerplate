import '../css/style.css'
import { App } from './App'

// **********************************
// **********************************
// **********************************

// Needed for Hot Module Replacement
if(typeof(module.hot) !== 'undefined') {
  module.hot.accept() // eslint-disable-line no-undef  
}

App()