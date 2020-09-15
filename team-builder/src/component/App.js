import React, {useState} from 'react';
import TeamMember from './TeamMember';
import TeamMemberForm from './TeamMemberForm';
import logo from '../logo.svg';
import '../App.css';

const initialFormValues = {
  name: '',
  email: '',
  role: ''
}

export default function App() {

  const [teamMembers, setTeamMembers] = useState([])
  const [formValues, setFormValues] = useState(initialFormValues)

const updateForm = (key, value) => {
    setFormValues({...formValues, [key]: value})
  }

const submitForm = () => {
  const newMember = {
    name: formValues.name.trim(),
    email: formValues.email.trim(),
    role: formValues.role
  }

  setTeamMembers([...teamMembers, newMember])
  setFormValues(initialFormValues)

}

  return (
    <div className="App">
        <h1>Team Members </h1>
        <TeamMemberForm 
          formValues={formValues}
          updateForm={updateForm}
          submitForm={submitForm}
        />

      {
        teamMembers.map((member, index) => 
          <TeamMember key={index} info={member}/>
        )
      }
    </div>
  );
}
