{/**
 * Quando for um componente de classe,importe
 * 'Component'
 */}
import React,{Component} from 'react'

export default class Grid extends Component{
    
    toCssClasses(numbers){
        const cols = numbers ? numbers.split(' '):[]
        let classes = ''

        {/*atenção para a 'crase'*/}
        if(cols[0]) classes += `col-xs-${cols[0]}`
        if(cols[1]) classes += `col-sm-${cols[1]}`
        if(cols[2]) classes += `col-md-${cols[2]}`
        if(cols[3]) classes += `col-lg-${cols[3]}`
        
        return classes    
    }

    /* quem instanciar essa classe vai mandar um 'cols' na props 
       isso vai virar esse 'numbers' que é esperado aqui:
       <Grid cols='12 3 2'> pode ser mais de um número... */
    render(){
        {/*se cols não for setado, ai o valor será 12 */}
        const gridClasses = this.toCssClasses(this.props.cols || 12)
        return(
            <div className={gridClasses}>
                {this.props.children}
            </div>
        )
    }

}