import React, {useState} from 'react';


const Form = () => {
    const initialState = {
        name: '',
        email: '',
        role: ''
    }
    const [newTeamMember, setNewTeamMember]  = useState(initialState)

    const handleChange = (event) => {
        setNewTeamMember({ ...newTeamMember, [event.target.name]: event.target.value})
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(newTeamMember)
        resetForm();
    }

    const resetForm = () => {
        setNewTeamMember(initialState)
    }

    return(
        <form onSubmit={handleSubmit}>
            <label>Name: </label>
            <input 
                name='name'
                type='text'
                value={newTeamMember.name}
                onChange={handleChange}
                placeholder='Enter Name Here'
            />
            <label>Email: </label>
            <input 
                name='email'
                type='text'
                value={newTeamMember.email}
                onChange={handleChange}
                placeholder='Enter Email Here'
            />
            <label>Role: </label>
            <input 
                name='role'
                type='text'
                value={newTeamMember.role}
                onChange={handleChange}
                placeholder='Enter Role Here'
            />
            <button type='submit'>Submit</button>
        </form>
    )
};

export default Form;

