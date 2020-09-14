import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className='navbar'>

            <NavLink to ="/"
                exact
                activeStyle={{
                    color: 'violet'
                }}>Home
            </NavLink>

                <span>  |  </span>

            <NavLink to ="/todos"
                exact
                activeStyle={{
                    color: 'violet'
                }}>List
            </NavLink>

        </div>
    )
}

export default NavBar;
