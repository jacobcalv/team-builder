import React, { useState } from 'react';

const TeamCard = (props) => {
     return (
         <>
            {props.teamMember.map((member,index) =>(
                <div className='card' key={index}>
                    <h2>{member.name}</h2>
                    <p>{member.email}</p>
                    <p>{member.role}</p>
                </div>
            ))}
         </>
     )
}
export default TeamCard;
