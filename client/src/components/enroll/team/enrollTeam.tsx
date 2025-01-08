import React, {useEffect, useState} from 'react';
import { Group, Text, Container } from '@mantine/core';
import {getTeamMembersForService} from "../../../api/teamMember.ts";
import {ITeamMember} from "../../../models/team.ts";
import EnrollTeamItem from "./enrollTeamItem.tsx";

interface EnrollTeamProps {
    service_id: string;
    onSelect: (id: string) => void;
}


const EnrollTeam: React.FC<EnrollTeamProps> = ({service_id, onSelect}) => {

    const [team, setTeam] = useState<ITeamMember[]>([]);

    useEffect(() => {
        const fetchTeam = async (service_id: string) => {
            try {
                const response = await getTeamMembersForService(service_id);
                setTeam(response);
            } catch (error) {
                console.error('Error fetching team:', error);
            }
        };

        fetchTeam(service_id);
    }, []);


    return (
        <Container
            id="team"
            size="xl"
            style={{
                width: '100%',
                padding: '16px',
                borderRadius: '8px',
                marginTop: '1rem',
            }}
        >
            <Text size="md" mb="xl">
                Виберіть майстра
            </Text>

            <Group style={{justifyContent: 'center', marginTop: '2rem'}}>
                {team.map((member) => (
                    <EnrollTeamItem
                        key={member._id}
                        teamMember={member}
                        onSelect={onSelect}
                    />
                ))}
            </Group>
        </Container>
    );
};

export default EnrollTeam;
