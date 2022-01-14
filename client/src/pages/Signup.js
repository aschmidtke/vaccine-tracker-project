import React from 'react';
import { Link } from 'react-router-dom';

import { EntryPage, PageHeader } from './style';
import EntryCard from '../components/EntryCard';
import InputGroup from '../components/InputGroup';
import Input from '../components/Input';
import Button from '../components/Button';

const Signup = () => {


  return (
    <EntryPage>
      <PageHeader to="/">Vaccine-Tracker</PageHeader>
      <EntryCard>
        <h2>Signup</h2>
        <form onSubmit={(e) => e.preventDefault()}>
          <InputGroup>
            <label htmlFor="firstName">First Name</label>
            <Input type="text" placeholder="First Name" id="firstName" />
          </InputGroup>
          <InputGroup>
            <label htmlFor="lastName">Last Name</label>
            <Input type="text" placeholder="Last Name" id="lastName" />
          </InputGroup>
          <InputGroup>
            <label htmlFor="dateOfBirth">Birthday</label>
            <Input type="date" placeholder="mm/dd/yyyy" id="dateOfBirth" />
          </InputGroup>
          <InputGroup>
            <label htmlFor="email">Email</label>
            <Input type="text" placeholder="Email" id="email" />
          </InputGroup>
          <InputGroup>
            <label htmlFor="password">Password</label>
            <Input type="text" placeholder="Password" id="password" />
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