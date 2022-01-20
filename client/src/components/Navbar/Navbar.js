import React from 'react';
import { Link } from 'react-router-dom';

import Auth from '../../utils/auth';


import {
    StyledNavbar, 
    NavItemLink,
} from './style';

function Navbar({ children }) {
    return (
        <StyledNavbar>
            {Auth.loggedIn()? (
                <>
                <NavItemLink to="/Profile">Update Contact Info</NavItemLink>
                <NavItemLink href="/">Logout</NavItemLink>
                </>
            ):(
            <>
            <NavItemLink to="/Login">Login</NavItemLink>
            <NavItemLink to="/Signup">Signup</NavItemLink>
            <NavItemLink to="/Profile">Update Contact Info</NavItemLink>
            </>
            )}
        </StyledNavbar>
    );
}
export default Navbar;