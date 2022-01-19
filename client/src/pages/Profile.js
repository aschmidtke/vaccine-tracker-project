import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { Link, useParams } from 'react-router-dom';
//import { useMutation } from '@apollo/client';

import { QUERY_USER } from '../utils/queries';
import Auth from '../utils/auth';
//import { UPDATE_USER } from '../utils/mutations';

import { EntryPage, PageHeader } from './style';
import EntryCard from '../components/EntryCard';
import InputGroup from '../components/InputGroup';
import Input from '../components/Input';
import Button from '../components/Button';

const Profile = () => {
  const params = useParams()
  console.log("location: ", params);
  const { data } = useQuery(QUERY_USER, {variables: {email:"EliManning@gmail.com"}});
  let user;
  console.log("DATA: ", data);
  if (data) {
    user = data.user;
  }


  return (
    <EntryPage>
      <PageHeader to="/">Vaccine-Tracker</PageHeader>
      <EntryCard>
        <h2>Personal Information</h2>
        <form onSubmit={(e) => e.preventDefault()}>
          <InputGroup>
            <label htmlFor="firstName">First Name</label>
            <Input
              type="text"
              value={"TST"}
              name="firstName"
              id="firstName"
              
              />
          </InputGroup>
          <InputGroup>
            <label htmlFor="lastName">Last Name</label>
            <Input
              type="text"
              placeholder="Last Name"
              name="lastName"
              id="lastName"
              
            />
          </InputGroup>
          <InputGroup>
            <label htmlFor="dateOfBirth">Birthday</label>
            <Input
              type="date"
              placeholder="Birthday"
              name="dateOfBirth"
              id="dateOfBirth"
              
            />
          </InputGroup>
          <InputGroup>
            <label htmlFor="email">Email</label>
            <Input
              type="text"
              placeholder="Email"
              name="email"
              id="email"
              
            />
          </InputGroup>
          <InputGroup>
            <label htmlFor="password">Password</label>
            <Input
              type="text"
              placeholder="password"
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