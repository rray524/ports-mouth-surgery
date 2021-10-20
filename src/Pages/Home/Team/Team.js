import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import teamData from '../../../data/members.json';
import Member from '../../Member/Member';
import './Team.css'

const Team = () => {
    const [teams, setTeams] = useState([]);
    useEffect(() => {
        setTeams(teamData)
    }, [])
    return (
        <div className="team-wrap">
            <h2 className='text-center mb-5'>Meet Our Team</h2>
            <Container>
                <Row xs={1} md={4} lg={4} className="g-3">

                    {
                        teams.map((team, idx) => <Member key={idx} team={team}></Member>)
                    }


                </Row>
            </Container>
        </div>
    );
};

export default Team;