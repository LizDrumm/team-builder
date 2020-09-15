import React from 'react'

export default function TeamMember(props) {

    const { name, email, role } = props.info

    return (
        <div className='container'>
            <h2>{name}</h2>
            <p>Email: {email}</p>
            <p>Role: {role}</p>
        </div>
    )
}