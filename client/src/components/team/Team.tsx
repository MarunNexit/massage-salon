import React, {useEffect, useState} from 'react';
import { Group, Text, Container } from '@mantine/core';
import TeamItem from './TeamItem.tsx';
import {getTeamMembers} from "../../api/teamMember.ts";
import {ITeamMember} from "../../models/team.ts";


const Team: React.FC = () => {

    const [team, setTeam] = useState<ITeamMember[]>([]);

    useEffect(() => {
        const fetchTeam = async () => {
            try {
                const response = await getTeamMembers();
                setTeam(response);
            } catch (error) {
                console.error('Error fetching team:', error);
            }
        };

        fetchTeam();
    }, []);


    return (
        <Container
            id="team"
            size="xl"
            style={{
                padding: '16px',
                borderRadius: '8px',
                marginTop: '4rem',
            }}
        >
            <Text size="xl" mb="xl">
                Наша Команда
            </Text>

            <Group style={{justifyContent: 'center', marginTop: '2rem'}}>
                {team.map((member) => (
                    <TeamItem
                        key={member._id}
                        _id={member._id}
                        name={member.name}
                        position={member.position}
                        image={member.image}
                    />
                ))}
            </Group>
        </Container>
    );
};

export default Team;
