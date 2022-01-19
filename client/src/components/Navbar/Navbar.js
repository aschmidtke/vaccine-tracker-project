import React from 'react';
import { BiClinic } from 'react-icons/bi'

import {
    StyledNavbar, 
    NavItemLink,
    NavIconLink
} from './style';

function Navbar({ children }) {
    return (
        <StyledNavbar>
            <NavItemLink to="/Login">Login</NavItemLink>
            <NavItemLink to="/Signup">Signup</NavItemLink>
            <NavItemLink to="/Profile">Update Contact Info</NavItemLink>
        </StyledNavbar>
    );
}
export default Navbar;