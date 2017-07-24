import React, {Component} from 'react'
import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'

export default class Todo extends Component{
    
    constructor(props){
        super(props)
        {/*props é só para leitura, com state vc pode alterar o valor*/}
        this.state = {description: '', list: []}
        this.handleChange = this.handleChange.bind(this)
        this.handleAdd = this.handleAdd.bind(this)
    }

    //o operador spread vai pegar todos os dados do estado
    // que no caso são 2: description e list, em seguida vc ja usa um desses
    //dados, o 'description'.
    //esse this precisa ser setado para fazer referencia ao próprio componente
    //(se faz isso no construtor)
    handleChange(e){
        this.setState({...this.state, description: e.target.value})
    }

    //escreva alguma coisa e clique no botão que aparecerá no console
    handleAdd(){
        console.log(this.state.description)
    }

    render(){
        return(
            <div>
                <PageHeader name='Tarefas' small='Cadastro'></PageHeader>

                {/*vc criou o description dentro do state no contrutor*/}
                <TodoForm handleAdd={this.handleAdd} 
                          description={this.state.description}
                          handleChange={this.handleChange}/>
                <TodoList />
            </div>
        )
    }
}
