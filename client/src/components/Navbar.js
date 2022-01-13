import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BiClinic } from 'react-icons/bi';

//TODO: need to create an Auth folder
import Auth from "../../utils/Auth"


//importing style components (TODO: npm install react-icons --save-)
import {
    Nav,
    Navbar,
    NavbarContainer,
    NavTab
} from './Navbar.styles';

function Nav() {

    //This function will display different options if the user is login or not
    function showNav() {
        if (Auth.loggedIn()) {
            return (
                <ul className="">
                    <li className="">
                        <Link to="digitalCard">
                            Digital Card
                        </Link>
                    </li>
                    <li className="">
                        <Link to="updateCard">
                            Update Card
                        </Link>
                    </li>
                    <li className="">
                        <a href="/" onClick={() => Auth.logout()}>
                            Logout
                        </a>
                    </li>
                </ul>
            );
        } else {
            return (
                <ul className="">
                    <li className="">
                        <Link to="login">
                            Login
                        </Link>
                    </li>
                    <li className="">
                        <Link to="signup">
                            Signup
                        </Link>
                    </li>
                </ul>
            );
        }
    };

    return(
        <header className="">
            <h1>
                <Link to="/">
                     {<BiClinic/>}   
                </Link>
            </h1>

            <nav>
                {showNav()}
            </nav>
        </header>
    )


}