import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { QUERY_ME, QUERY_USER } from '../utils/queries';
import Auth from '../utils/auth';
import { UPDATE_USER } from '../utils/mutations';
import { useParams } from 'react-router-dom';
import { EntryPage, PageHeader } from './style';
import EntryCard from '../components/EntryCard';
import InputGroup from '../components/InputGroup';
import Input from '../components/Input';
import Button from '../components/Button';
import Navbar from '../components/Navbar/Navbar';


const Profile = () => {
  
  const { loading, data } = useQuery(QUERY_USER, {
  });
  
  const user = data?.user || {};

  const loggedIn = Auth.loggedIn();

  const thisIsUser = Auth.getProfile();
    console.log('this is my user: ----', thisIsUser);
 

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

  const [updateUser] = useMutation(UPDATE_USER);
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await updateUser({
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
    const token = mutationResponse.data.updateUser.token;
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
      <PageHeader to="/">Vaccine-Tracker</PageHeader>
      <EntryCard>
        <h2>Personal Information</h2>
        <form onSubmit={handleFormSubmit}>
          <InputGroup>
            <label htmlFor="firstName">First Name</label>
            <Input
              type="text"
              value={thisIsUser.data.firstName}
              name="firstName"
              id="firstName"
              onChange={handleChange}
            />
          </InputGroup>
          <InputGroup>
            <label htmlFor="lastName">Last Name</label>
            <Input
              type="text"
              value={thisIsUser.data.lastName}
              name="lastName"
              id="lastName"
              onChange={handleChange}
            />
          </InputGroup>
          <InputGroup>
            <label htmlFor="dateOfBirth">Birthday</label>
            <Input
              type="text"
              value={thisIsUser.data.dateOfBirth}
              name="dateOfBirth"
              id="dateOfBirth"
              onChange={handleChange}
            />
          </InputGroup>
          <InputGroup>
            <label htmlFor="email">Email</label>
            <Input
              type="text"
              value={thisIsUser.data.email}
              name="email"
              id="email"
              onChange={handleChange}
            />
          </InputGroup>
          <InputGroup>
            <label htmlFor="shotOne">First Dose</label>
            <Input
              type="text"
              value={thisIsUser.data.shotOne}
              name="shotOne"
              id="shotOne"
              onChange={handleChange}
            />
          </InputGroup>
          <InputGroup>
            <label htmlFor="shotTwo">Second Dose</label>
            <Input
              type="text"
              value={thisIsUser.data.shotTwo}
              name="shotTwo"
              id="shotTwo"
              onChange={handleChange}
            />
          </InputGroup>
          <InputGroup>
            <label htmlFor="booster">Booster</label>
            <Input
              type="text"
              value={thisIsUser.data.booster}
              name="booster"
              id="booster"
              onChange={handleChange}
            />
          </InputGroup>
          <br />
         
        </form>
      </EntryCard>
      
    </EntryPage>
  )
}
export default Profile;