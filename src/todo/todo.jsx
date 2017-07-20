import React, {Component} from 'react'
import PageHeader from '../template/pageHeader'

export default class Todo extends Component{
    render(){
        return(
            <div>
                <PageHeader name='Tarefas' small='Cadastro'></PageHeader>
            </div>
        )
    }//render
}//class

{/**
 * pageHeader poderá usar os atributos passados ex:
 *   <h2>{props.name} <small>{props.small}</small></h2>
 */}