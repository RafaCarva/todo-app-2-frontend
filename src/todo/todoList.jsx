import React from 'react'
import IconButton from '../template/iconButton'


export default props =>{

    const renderRows=()=>{

        {/**
         * list vai receber:
         * props.list caso exista, se props.list for null
         * então list recebe um array vazio.
         */}
        const list = props.list || []

        return list.map(todo=>(
            //esse _id é gerado pelo mongo.
            <tr key={todo._id}>

                {/*aqui no td, só vai aplicar a classe depois que o todo for concluído.
                   o .css dessa classe é o template/custom.css
                */}
                <td className={todo.done ? 'markedAsDone' : ''}>{todo.description}</td>
                <td>
                    {/**Botão ok
                        handleMarkAsDone() vai ser criado em todo.jsx
                        o todo passado na função é o que vc está percorrendo aqui*/}
                    <IconButton style='success'
                                icon='check'
                                onClick={()=>props.handleMarkAsDone(todo)}
                                hide={todo.done}>
                    </IconButton>

                    {/**Botão warning
                        handleMarkAsPending() vai ser criado em todo.jsx*/}
                    <IconButton style='warning'
                                icon='undo'
                                onClick={()=>props.handleMarkAsPending(todo)}
                                hide={!todo.done}>
                    </IconButton>

                    {/**Botão remover
                        handleRemove() vai ser criado em todo.jsx*/}
                    <IconButton style='danger'
                                icon='trash-o'
                                onClick={()=>props.handleRemove(todo)}
                                hide={!todo.done}>
                    </IconButton>
                </td>
            </tr>    

        ))
    }

    return(
        <table className='table'>
            <thead>
                <tr>
                    <th>Descrição</th>
                    <th className='tableActions'>Ações</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>

    )
}