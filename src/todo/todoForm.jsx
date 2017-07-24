import React from 'react'
import Grid from '../template/grid'
import IconButton from '../template/iconButton'

export default props=>(
    <div role='form' className='todoForm'>
        <Grid cols='12 9 10'>

            {/*essa description vai como props, mas quando chegar lá
            no todo.jsx ele vai por o valor no state*/}
            <input id='description' 
                   className='form-control'
                   placeholder='Adicione uma tarefa' 
                   value={props.description} 
                   onChange={props.handleChange}
                   >
            </input>
        </Grid>

        <Grid cols='12 3 2'>
            <IconButton style='primary' icon='plus'
                onClick={props.handleAdd}>
            </IconButton>
        </Grid>  

    </div>
)