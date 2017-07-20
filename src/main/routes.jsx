import React from 'react'

/**
 * o hashHistory é a estratégia de histórico que vai ser usada.
 */
import {Router,Route,Redirect,hashHistory} from 'react-router'

import Todo from '../todo/todo'
import About from '../about/about'

export default props => (
    <Router history={hashHistory}>
        
        {/*quando o caminho terminar com todos,
        carrgue o componente Todo.*/}
        <Route path='/todos' component={Todo} />
        <Route path='/about' component={About}/>
        <Redirect from='*' to='/todos' />
    </Router>    
)
