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
import Navbar from '../components/Navbar/Navbar';

const Signup = () => {
  const [formState, setFormState] = useState({
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    email: '',
    password: '',
    shotOne: '',
    shotTwo: '',
    booster: ''
    });
  const [addUser] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        email: formState.email,
        password: formState.password,
        firstName: formState.firstName,
        lastName: formState.lastName,
        dateOfBirth: formState.dateOfBirth,
        shotOne: formState.shotOne,
        shotTwo: formState.shotTwo,
        booster: formState.booster
      }
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    })
  }

  return (
    <EntryPage>
      <Navbar></Navbar>
      <EntryCard>
        <h2>Signup</h2>
        <form onSubmit={handleFormSubmit}>
          <InputGroup>
            <label htmlFor="firstName">First Name</label>
            <Input
              type="text"
              placeholder="First Name"
              name="firstName"
              id="firstName"
              onChange={handleChange}
            />
          </InputGroup>
          <InputGroup>
            <label htmlFor="lastName">Last Name</label>
            <Input
              type="text"
              placeholder="Last Name"
              name="lastName"
              id="lastName"
              onChange={handleChange}
            />
          </InputGroup>
          <InputGroup>
            <label htmlFor="dateOfBirth">Birthday</label>
            <Input
              type="text"
              placeholder="mm/dd/yyyy"
              name="dateOfBirth"
              id="dateOfBirth"
              onChange={handleChange}
            />
          </InputGroup>
          <InputGroup>
            <label htmlFor="email">Email</label>
            <Input
              type="text"
              placeholder="Email"
              name="email"
              id="email"
              onChange={handleChange}
            />
          </InputGroup>
          <InputGroup>
            <label htmlFor="password">Password</label>
            <Input 
              type="text"
              placeholder="Password"
              name="password"
              id="password"
              onChange={handleChange}
            />
          </InputGroup>
          <InputGroup>
            <label htmlFor="shotOne">First Dose</label>
            <Input
              type="text"
              placeholder="First Dose"
              name="shotOne"
              id="shotOne"
              onChange={handleChange}
            />
          </InputGroup>
          <InputGroup>
            <label htmlFor="shotTwo">Second Dose</label>
            <Input
              type="text"
              placeholder="Second Dose"
              name="shotTwo"
              id="shotTwo"
              onChange={handleChange}
            />
          </InputGroup>
          <InputGroup>
            <label htmlFor="booster">Booster</label>
            <Input
              type="text"
              placeholder="Booster"
              name="booster"
              id="booster"
              onChange={handleChange}
            />
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
