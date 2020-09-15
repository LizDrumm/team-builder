import React, { useState } from 'react';

export default function TeamMemberForm(props) {
    const { formValues, updateForm, submitForm } = props
   

    const onChange = (event) => {
        const { name, value } = event.target
        updateForm(name, value)
    }

    const onSubmit = (event) => {
        event.preventDefault();
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
        
            <label>Role
            <input 
            placeholder='Enter Role'
            type='text'
            name='role'
            value={formValues.role} 
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


            <div className='submit'>
                    <button>Submit</button>
                </div>
        </form>
    )
}
