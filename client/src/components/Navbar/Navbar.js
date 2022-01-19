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
                <Link to="/Profile">Update Contact Info</Link>
                <a href="/">Logout</a>
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