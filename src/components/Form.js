import React, {useState} from 'react';


const Form = () => {
    const [newEntry, setNewEntry]  = useState()
    const handleChange = () => {};
    return(
        <form>
            <input 
                type='text'
                placeholder='Enter Name Here'/>
            <button type='submit'>Submit</button>
        </form>
    )
};

export default Form;

