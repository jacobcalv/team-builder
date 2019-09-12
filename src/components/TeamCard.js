import React from 'react';
import styled from 'styled-components'

const TeamCard = (props) => {
    const Card = styled.div`
        width: 40%;
        display: flex;
        flex-direction: column;
        border: 2px solid black;
        border-radius: 5px;
        margin-top: 3rem;
        margin-bottom: 3rem;
        margin-left: 30%;
    `
    const Name = styled.h2`
        text-align: center;
    `
    const Email = styled.p`
        text-align: center;
    `
    const Role = styled.p`
        text-align: center;
    `
     return (
         <>
            {props.teamMember.map((member,index) =>(
                <Card key={index}>
                    <Name>Name: {member.name}</Name>
                    <Email>Email: {member.email}</Email>
                    <Role>Role: {member.role}</Role>
                </Card>
            ))}
         </>
     )
}
export default TeamCard;
