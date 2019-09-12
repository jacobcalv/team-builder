import React, {useState} from 'react';
import './App.css';
import Form from './components/Form.js'
import TeamCard from './components/TeamCard'

function App() {
  const [teamMember, setTeamMember] = useState([
    {
      name: 'Jacob',
      email: 'jacob@gmail.com',
      role: 'Designer'
    },
    {
      name: 'Joey',
      email: 'joey@gmail.com',
      role: 'Frontend Engineer'      
    },
    {
      name: 'Harry Smiles',
      email: 'Harrysmiles@gmail.com',
      role: 'Backend Engineer'
    }
  ])
  return (
    <>
    <Form teamMember={teamMember} setTeamMember={setTeamMember}/>
    <TeamCard teamMember={teamMember}/>
    </>
  );
}

export default App;
