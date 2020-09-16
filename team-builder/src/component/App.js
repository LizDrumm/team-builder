import React, {useState} from 'react';
import TeamMember from './TeamMember';
import TeamMemberForm from './TeamMemberForm';
//import logo from '../logo.svg';
import '../App.css';

//the shape of the state that drives the form
const initialFormValues = {
  name: '',
  email: '',
  //dropdown
  role: ''
}

export default function App() {
// initialize your state
  const [teamMembers, setTeamMembers] = useState([])
  //WE NEED STATE TO HOLD ALL VALUES OF THE FORM!
  const [formValues, setFormValues] = useState(initialFormValues)



// "form state updater" which will be used inside the inputs' `onChange` handler
  //  It takes in the name of an input and its value, and updates `formValues`
const updateForm = (inputName, inputValue) => {
    setFormValues({...formValues, [inputName]: inputValue})
  }

// a submit function which will be used inside the form's own `onSubmit`
const submitForm = () => {
  //make a new friend object, trimming whitespace from username and email
  const newMember = {
    name: formValues.name.trim(),
    email: formValues.email.trim(),
    role: formValues.role
  }
  //should be newMember
  // if (!newUser.username || !newUser.email || !newUser.role) {
  //   return
  // }


//didnt do fake api??
  setTeamMembers([...teamMembers, newMember])//updating team list 
  setFormValues(initialFormValues)//reseting form 

}

  return (
    <div className="App">
        <h1>Team Members </h1>
        <TeamMemberForm 
        //The form component needs its props.
        //  Check implementation of Form
        //  to see what props it expects.
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
