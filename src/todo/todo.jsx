import React, {Component} from 'react'
import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'

export default class Todo extends Component{
    
    constructor(props){
        super(props)
        {/*antes dessa config, o console.log retornava null,
        agora ele retorna esse componente*/}
        this.handleAdd = this.handleAdd.bind(this)
    }

    handleAdd(){
        console.log(this)
    }

    render(){
        return(
            <div>
                <PageHeader name='Tarefas' small='Cadastro'></PageHeader>
                <TodoForm handleAdd={this.handleAdd} />
                <TodoList />
            </div>
        )
    }
}
