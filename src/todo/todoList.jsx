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
                <td>{todo.description}</td>
                <td>
                    {/**handleRemove() vai ser criado em todo.jsx*/}
                    <IconButton style='danger'
                                icon='trash-o'
                                onClick={()=>props.handleRemove(todo)}>
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
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>

    )
}