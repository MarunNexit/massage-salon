import React from 'react';
import { Card, Avatar, Stack, Text, useMantineTheme} from '@mantine/core';
import {ITeamMember} from "../../../models/team.ts";
import {IconArrowRight} from "@tabler/icons-react";
import './enrollTeamItem.css';


interface EnrollTeamItemProps {
    onSelect: (id: string) => void;
    teamMember: ITeamMember;
}


const EnrollTeamItem: React.FC<EnrollTeamItemProps> = ({teamMember, onSelect }:EnrollTeamItemProps) => {
    const theme = useMantineTheme();

    return (
        <Card
            key={teamMember._id}
            className={'drawerTeam'}
            shadow="sm"
            radius="md"
            padding="lg"
            style={{
                width: '100%',
                textAlign: 'center',
                backgroundColor: theme.colors.background[1],
            }}
            onClick={() => {
                onSelect(teamMember._id)
            }}
        >
            <section style={{display: 'flex', alignItems: 'center'}}>
                <div style={{flexShrink: 0}}>
                    <Avatar src={teamMember.image} size={50} radius="10%"/>
                </div>
                <Stack style={{marginLeft: '16px', flex: 1}}>
                    <Text size="sm">
                        {teamMember.name}
                    </Text>
                    <Text size="xs" color="dimmed">
                        {teamMember.position}
                    </Text>
                </Stack>
                <IconArrowRight size={24} stroke={2} color="blue" style={{ cursor: 'pointer' }} />
            </section>
        </Card>
    );
};

export default EnrollTeamItem;
