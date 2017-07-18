/**
 * 'modules' é o apelido para a pasta node_modules
 * setado no webpack.config.js
 */

import 'modules/bootstrap/dist/css/bootstrap.min.css'
import 'modules/font-awesome/css/font-awesome.min.css'

import React from 'react'

/**
 * Esse é um componente baseado em função.
 */
export default props =>(
    <div className='container'>
        <h1>teste</h1>
    </div>
)