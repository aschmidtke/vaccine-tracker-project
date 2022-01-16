import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { ADD_USER } from '../utils/mutations';

import { EntryPage, PageHeader } from './style';
import EntryCard from '../components/EntryCard';
import InputGroup from '../components/InputGroup';
import Input from '../components/Input';
import Button from '../components/Button';

// const Signup = () => {
function Signup(props) {
  const [formState, setFormState] = useState({ email: '', password: '', firstName: '', lastName: '', dateOfBirth: ''});
  const [addUser] = useMutation(ADD_USER)

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    
    const mutationResponse = await addUser({
      variables: {
        email: formState.email,
        password: formState.password,
        firstName: formState.firstName,
        lastName: formState.lastName,
        dateOfBirth: formState.dateOfBirth
      }
    });
    console.log(mutationResponse);
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
  };

  const handleChange = (event) => {
    console.log(event)
    const { id, value } = event.target;
    setFormState({
      ...formState,
      [id]: value
    });
  };

 

  return (
    <EntryPage>
      <PageHeader to="/">Vaccine-Tracker</PageHeader>
      <EntryCard>
        <h2>Signup</h2>
        <form onSubmit={handleFormSubmit}>
          <InputGroup>
            <label htmlFor="firstName">First Name</label>
            <Input type="text" placeholder="First Name" id="firstName" onChange={handleChange}/>
          
            <label htmlFor="lastName">Last Name</label>
            <Input type="text" placeholder="Last Name" id="lastName" onChange={handleChange}/>
          
            <label htmlFor="dateOfBirth">Birthday</label>
            <Input type="date" placeholder="mm/dd/yyyy" id="dateOfBirth" onChange={handleChange}/>
         
            <label htmlFor="email">Email</label>
            <Input type="text" placeholder="Email" id="email" onChange={handleChange}/>
          
            <label htmlFor="password">Password</label>
            <Input type="text" placeholder="Password" id="password" onChange={handleChange}/>

            
          </InputGroup>
          <Button type="submit" full>Signup</Button>
        </form>
        <span>
          Already have an account?  Click on
          <Link to="/login"> Login</Link>
        </span>

      </EntryCard>
    </EntryPage>
  )
}
export default Signup;