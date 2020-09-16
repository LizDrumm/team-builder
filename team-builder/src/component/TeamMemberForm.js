import React, { useState } from 'react';

export default function TeamMemberForm(props) {
    const { formValues, updateForm, submitForm } = props
   // THESE ARE THE **EXACT PROPS** form expects

    const onChange = (event) => {
        //IMPLEMENT the change handler for our inputs and dropdown
        // a) pull the name of the input from the event object
        // b) pull the value of the input from the event object
        const { name, value } = event.target
        //use the `update` callback coming in through props
        updateForm(name, value)
    }

    const onSubmit = (event) => {
        //IMPLEMENT the submit handler and don't allow browser to reload!
        event.preventDefault();
        //use the `submit` callback coming in through props
        submitForm()
    };

    return (
        <form className='container' onSubmit={onSubmit}>
            <label>Name
            <input 
            placeholder='Enter Name'
            type='text'
            name='name'
            value={formValues.name}
            onChange={onChange} 
            />
            </label>

            <label>Email
            < input
            placeholder='Enter Email'
            type='text'
            name='email'
            value={formValues.email}
             onChange={onChange} 
            />
            </label>
            {/* dropdown */}
            <label>Role
          <select name='role' value={formValues.role} onChange={onChange}>
            <option value="">-- select role --</option>
            <option value="Senior Dev">Senior Dev</option>
            <option value="Jr. Dev">Jr. Dev</option>
            <option value="intern">Intern</option>
          </select>
        </label>


            <div className='submit'>
                    <button>Submit</button>
                </div>
        </form>
    )
}
