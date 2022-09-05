import React from 'react'
import {NavLink} from 'react-router-dom';
import {PATH} from './RoutesFC';




function Header() {
    return (
        <div>
            <div>
                <NavLink to={'/'}>Mainpage</NavLink>
            </div>
            <div>
                <NavLink to={PATH.PRE_JUNIOR}>Pre-Junior</NavLink>
            </div>
            <div>
                <NavLink to={PATH.JUNIOR}>Junior</NavLink>
            </div>
            <div>
                <NavLink to={PATH.JUNIOR_PLUS}>Junior +</NavLink>
            </div>
        </div>
    )
}

export default Header
