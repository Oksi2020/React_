import React from 'react'

const Cells = ({ type, cells, background, color, children, currency }) => {

    let styles = {
        background: `${background}`,
        color: `${color}`
    }
    let textStyle = {}; 

    switch(type) {
        case 'date':
            styles.fontStyle = 'italic'
            break;
        case 'number':
            styles.textAlign = 'right'
            break;
        case 'money':
            if(!currency) console.log('Please write currency!')
            children = String(children) +' $'
        case 'text':
            styles.textAlign = 'left'
            break;

    }


    return(
        <td 
            colSpan={cells} 
            style = {styles}
        >
            {children}
        </td>
    )
}

Cells.defaultProps = {
    type: 'text',
    cells: 1,
    background: 'transparent',
    color: 'black'
}

export default Cells;