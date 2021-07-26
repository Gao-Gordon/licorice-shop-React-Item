import React from 'react'
import ReactDOM from 'react-dom'
import App from './containers/App'
import store from './redux/store'
import {Provider} from './lib/react-redux'

ReactDOM.render(  <Provider store={store}> < App/> </Provider> ,document.getElementById('root'))