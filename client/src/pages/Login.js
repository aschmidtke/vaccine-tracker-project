import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import { EntryPage, PageHeader } from './style';
import EntryCard from '../components/EntryCard';
import InputGroup from '../components/InputGroup';
import Input from '../components/Input';
import Button from '../components/Button';

import Auth from '../utils/auth';
import { LOGIN } from '../utils/mutations';

const Login = (props) => {
    const [formState, setFormState] = useState({ email: '', password: ''});

    const [login, { error }] = useMutation(LOGIN);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState({
            ...formState,
            [name]: value,
        })
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault(error);
        try{
            const mutationResponse = await login({
                variables: {email: formState.email, password: formState.password }
            });
            const token = mutationResponse.data.login.token;
            Auth.login(token);
        } catch (error) {
            console.log(error);
        }
    };

    //(e) => e.preventDefault()

    return (
        <EntryPage>
            <PageHeader to="/">Vaccine-Tracker</PageHeader>
            <EntryCard>
                <h2>Login</h2>
                <form onSubmit={handleFormSubmit}>
                    <InputGroup>
                        <label htmlFor="email">Email Address</label>
                        <Input 
                        type="text" 
                        placeholder="Please enter your email" 
                        id="email"
                        name="email"
                        onChange={handleChange}
                        />
                    </InputGroup>
                    <InputGroup>
                        <label htmlFor="password">Password</label>
                        <Input 
                        type="password" 
                        placeholder="Please enter your password" 
                        id="password"
                        name="password"
                        onChange={handleChange}
                        />
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