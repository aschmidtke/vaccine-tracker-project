import React from 'react';
import { Link } from 'react-router-dom';

import { EntryPage, PageHeader } from './style';

import EntryCard from '../components/EntryCard';
import InputGroup from '../components/InputGroup';
import Input from '../components/Input';
import Button from '../components/Button';

import Auth from '../utils/auth';



const Login = () => {

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        try{
            const mutationResponse = await Login({
                variables: {email: fromState.email, password: formState.password }
            })
        }
    }

    return (
        <EntryPage>
            <PageHeader to="/">Vaccine-Tracker</PageHeader>
            <EntryCard>
                <h2>Login</h2>
                <form onSubmit={(e) => e.preventDefault()}>
                    <InputGroup>
                        <label htmlFor="email">Email Address</label>
                        <Input type="text" placeholder="Please enter your email" id="email" />
                    </InputGroup>
                    <InputGroup>
                        <label htmlFor="password">Password</label>
                        <Input type="password" placeholder="Please enter your password" id="password" />
                    </InputGroup>
                    <Button type="submit" full>Login</Button>
                </form>
                <span>
                    Don't have an account? Click on
                    <Link to="/Signup"> Signup</Link>
                </span>
            </EntryCard>
        </EntryPage>
    );
}

export default Login;