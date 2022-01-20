import React from 'react';
import { Link } from 'react-router-dom';



import { EntryPage, PageHeader } from './style';
import EntryCard from '../components/EntryCard';
import InputGroup from '../components/InputGroup';
import Input from '../components/Input';
import Button from '../components/Button';

const Profile = () => {

  return (
    <EntryPage>
      <PageHeader to="/">Vaccine-Tracker</PageHeader>
      <EntryCard>
      <h2>COVID-19 Vaccination Record Card</h2>
      <form onSubmit={(e) => e.preventDefault()}>
          <InputGroup>
            <h3 htmlFor="dosage1">Vaccine 1st Dosage</h3>
            <Input type="text" placeholder="Product Name/Manufacture and Batch No." id="dosage1" />
            <label htmlFor="dateFirstDosage">Date</label>
            <Input type="date" placeholder="mm/dd/yyyy" id="dateFirstDosage" />
            <label htmlFor="locationFirstDosage">Healthcare Professional or Clinic Site</label>
            <Input type="text" placeholder="Location" id="locationFirstDosage" />
          </InputGroup>
          <br />          
          <InputGroup>
            <h3 htmlFor="dosage2">Vaccine 2nd Dosage</h3>
            <Input type="text" placeholder="Product Name/Manufacture and Batch No." id="dosage2" />
            <label htmlFor="dateSecondDosage">Date</label>
            <Input type="date" placeholder="mm/dd/yyyy" id="dateSecondDosage" />
            <label htmlFor="locationSecondDosage">Healthcare Professional or Clinic Site</label>
            <Input type="text" placeholder="Location" id="locationSecondDosage" />
          </InputGroup>
          <br />
          <InputGroup>
            <h3 htmlFor="booster1">Vaccine 1st Booster</h3>
            <Input type="text" placeholder="Product Name/Manufacture and Batch No." id="booster" />
            <label htmlFor="dateFirstBooster">Date</label>
            <Input type="date" placeholder="mm/dd/yyyy" id="dateFirstBooster" />
            <label htmlFor="locationFirstBooster">Healthcare Professional or Clinic Site</label>
            <Input type="text" placeholder="Location" id="locationFirstBooster" />
          </InputGroup>  
          <br />        
          <InputGroup>
            <h3 htmlFor="booster2">Vaccine 2nd Booster</h3>
            <Input type="text" placeholder="Product Name/Manufacture and Batch No." id="booster2" />
            <label htmlFor="dateSecondBooster">Date</label>
            <Input type="date" placeholder="mm/dd/yyyy" id="dateSecondBooster" />
            <label htmlFor="locationSecondBooster">Healthcare Professional or Clinic Site</label>
            <Input type="text" placeholder="Location" id="locationSecondBooster" />
          </InputGroup>
          <br />
          <h2>
            <Link to="/profile">Personal Information</Link>
          </h2>
        <Button type="submit" full>Update</Button>
        </form>
      </EntryCard>
    </EntryPage>
  )
}
export default Profile;