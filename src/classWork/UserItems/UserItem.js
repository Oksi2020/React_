import React from 'react';
import './UserItem.css'

import Button from '../button'

const Item = ( {user, action} ) => {


    return(
        <li
            key = {user.index}
            id = {user.index}
            className = {user.interviewed?'intervieved':''}
        >
            {user.user.name}
            <Button action = {action}>Interview!</Button>
        </li>
    )
}

export default Item;