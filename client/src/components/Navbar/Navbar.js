import React from 'react';
import { Link } from 'react-router-dom';

import Auth from '../../utils/auth';


import {
    StyledNavbar, 
    NavItemLink,
    Logo
} from './style';

function Navbar({ children }) {
    return (
        <StyledNavbar>
            <Logo>
                <NavItemLink to="/">Vaccine Tracker</NavItemLink>
                
            </Logo>
            {Auth.loggedIn()? (
                <>

                <Link to="/Profile">Profile</Link>
                <NavItemLink onClick={Auth.logout}>
                    Logout</NavItemLink>

                </>
            ):(
            <>
            <NavItemLink to="/Login">Login</NavItemLink>
            <NavItemLink to="/Signup">Signup</NavItemLink>
            </>
            )}
        </StyledNavbar>
    );
}
export default Navbar;