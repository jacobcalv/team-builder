import React, {useState} from 'react';


const Form = () => {
    const [newTeamMember, setNewTeamMember]  = useState({
        name: '',
        email: '',
        role: ''
    })
    
    const handleChange = (event) => {
        setNewTeamMember({ ...newTeamMember, [event.target.name]: event.target.value})
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(newTeamMember)
    }


    return(
        <form onSubmit={handleSubmit}>
            <label>Name: </label>
            <input 
                name='name'
                type='text'
                onChange={handleChange}
                placeholder='Enter Name Here'
            />
            <label>Email: </label>
            <input 
                name='email'
                type='text'
                onChange={handleChange}
                placeholder='Enter Email Here'
            />
            <label>Role: </label>
            <input 
                name='role'
                type='text'
                onChange={handleChange}
                placeholder='Enter Role Here'
            />
            <button type='submit'>Submit</button>
        </form>
    )
};

export default Form;

