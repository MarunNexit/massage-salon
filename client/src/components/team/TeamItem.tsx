import React from 'react';
import { Card, Avatar, Stack, Text, useMantineTheme} from '@mantine/core';
import {ITeamMember} from "../../models/team.ts";

const TeamItem: React.FC<ITeamMember> = ({ _id, name, position, image }) => {
    const theme = useMantineTheme();

    return (
        <Card
            key={_id}
            shadow="sm"
            radius="md"
            padding="lg"
            style={{
                width: '250px',
                textAlign: 'center',
                backgroundColor: theme.colors.background[1],
            }}
        >
            <Avatar src={image} size={100} radius="50%" mx="auto" mb="sm" />
            <Stack>
                <Text size="md">
                    {name}
                </Text>
                <Text size="sm">
                    {position}
                </Text>
            </Stack>
        </Card>
    );
};

export default TeamItem;
