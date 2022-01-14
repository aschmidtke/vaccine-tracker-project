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
            <NavIconLink>
                <BiClinic/>
            </NavIconLink>
            <NavItemLink to="/Login">Login</NavItemLink>
            <NavItemLink to="/Signup">Signup</NavItemLink>
            <NavItemLink to="/Profile">Update-Profile</NavItemLink>
        </StyledNavbar>
    );
}
export default Navbar;