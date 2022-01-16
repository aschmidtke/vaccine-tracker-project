import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { EntryPage, PageHeader } from './style';
import EntryCard from '../components/EntryCard';
import InputGroup from '../components/InputGroup';
import Input from '../components/Input';
import Button from '../components/Button';
import { useMutation } from '@apollo/client';
import { LOGIN } from '../utils/mutations';
import Auth from '../utils/auth';

// const Login = () => {
function Login(props) {
    const [formState, setFormState] = useState({ email: '', password: '' });
    const [login, { error }] = useMutation(LOGIN);

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
            const mutationResponse = await login({
                variables: {
                    email: formState.email,
                    password: formState.password
                }
            });
            const token = mutationResponse.data.login.token;
            Auth.login(token);
        } catch (e) {
            console.log(e);
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState({
            ...formState,
            [name]: value
        });
    };


    return (
        <EntryPage>
            <PageHeader to="/">Vaccine-Tracker</PageHeader>
            <EntryCard>
                <h2>Login</h2>
                <form onSubmit={handleFormSubmit}>
                    <InputGroup>
                        <label htmlFor="email">Email Address</label>
                        <Input type="text" placeholder="Please enter your email" id="email" onChange={handleChange}/>
                        <label htmlFor="password">Password</label>
                        <Input type="password" placeholder="Please enter your password" id="password" onChange={handleChange}/>
                    </InputGroup>
                    <Button type="submit" full>Login</Button>
                </form>
                <span>
                    Don't have an account? Click on
                    <Link to="/signup"> Signup</Link>
                </span>
            </EntryCard>
        </EntryPage>
    );
}

export default Login;