import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import { QUERY_ME, QUERY_USER } from '../utils/queries';
import Auth from '../utils/auth';
import { UPDATE_USER } from '../utils/mutations';

//add 1-17 TC
import { useParams } from 'react-router-dom';

import { EntryPage, PageHeader } from './style';
import EntryCard from '../components/EntryCard';
import InputGroup from '../components/InputGroup';
import Input from '../components/Input';
import Button from '../components/Button';
//import { getMe } from '../utils/API';

const Profile = () => {
  //add 1-17 TC
  //const { email: useParam } = useParams();
  const { loading, data } = useQuery(QUERY_USER, {
  });
  //add 1-17 TC
  const user = data?.user || {};
  //add 1-17 TC
  //const { data: userData } = useQuery(QUERY_ME)
  const loggedIn = Auth.loggedIn();

  const thisIsUser = Auth.getProfile();
    console.log('this is my user: ----', thisIsUser);
 

  const [formState, setFormState] = useState({
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    email: '',
    password: ''
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
        dateOfBirth: formState.dateOfBirth
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

  

  // add 1-17 TC
  //const { id: userId } = useParams();
  //console.log("userID: ", userId);
  //console.log('First Name: ', user.firstName);
  //add 1-17 TC
  //if (loading) {
  //  return <div>Loading...</div>
  //}

  return (
    <EntryPage>
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
              type="date"
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
          <br />
          <h2>
            <Link to="/vaccine">COVID-19 Vaccination Record Card</Link>
          </h2>
          <Button type="submit" full>Update</Button>
        </form>
      </EntryCard>
      
    </EntryPage>
  )
}
export default Profile;