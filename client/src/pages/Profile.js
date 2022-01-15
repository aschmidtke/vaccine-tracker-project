import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import { QUERY_USER } from '../utils/queries';
import Auth from '../utils/auth';
import { UPDATE_USER } from '../utils/mutations';

import { EntryPage, PageHeader } from './style';
import EntryCard from '../components/EntryCard';
import InputGroup from '../components/InputGroup';
import Input from '../components/Input';
import Button from '../components/Button';

const Profile = () => {

  const { data } = useQuery(QUERY_USER);
  let user;
    if (data) {
      user = data.user;
    }

  const [formState, setFormState] = useState({ email: '', password: ''});
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
              value={user.firstName}
              name="firstName"
              id="firstName"
              onChange={handleChange}
              />
          </InputGroup>
          <InputGroup>
            <label htmlFor="lastName">Last Name</label>
            <Input
              type="text"
              value={user.lastName}
              name="lastName"
              id="lastName"
              onChange={handleChange}
            />
          </InputGroup>
          <InputGroup>
            <label htmlFor="dateOfBirth">Birthday</label>
            <Input
              type="date"
              value={user.dateOfBirth}
              name="dateOfBirth"
              id="dateOfBirth"
              onChange={handleChange}
            />
          </InputGroup>
          <InputGroup>
            <label htmlFor="email">Email</label>
            <Input
              type="text"
              value={user.email}
              name="email"
              id="email"
              onChange={handleChange}
            />
          </InputGroup>
          <InputGroup>
            <label htmlFor="password">Password</label>
            <Input
              type="text"
              value={user.password}
              name="password"
              id="password"
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