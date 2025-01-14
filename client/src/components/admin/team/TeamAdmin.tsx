import React, { useState } from 'react';
import { TextInput, Button, Stack, Title, Group } from '@mantine/core';

const TeamAdmin: React.FC = () => {
    const [members, setMembers] = useState<{ name: string; role: string }[]>([]);

    const handleAddMember = () => {
        setMembers([...members, { name: '', role: '' }]);
    };

    const handleSave = () => {
        fetch('/api/team', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(members),
        }).then(() => alert('Team updated!'));
    };

    return (
        <Stack>
            <Title order={2}>Team</Title>
            {members.map((member, index) => (
                <Group key={index}>
                    <TextInput
                        label="Name"
                        value={member.name}
                        onChange={(e) =>
                            setMembers(
                                members.map((m, i) => (i === index ? { ...m, name: e.target.value } : m))
                            )
                        }
                    />
                    <TextInput
                        label="Role"
                        value={member.role}
                        onChange={(e) =>
                            setMembers(
                                members.map((m, i) => (i === index ? { ...m, role: e.target.value } : m))
                            )
                        }
                    />
                </Group>
            ))}
            <Button variant="outline" onClick={handleAddMember}>
                Add Member
            </Button>
            <Button onClick={handleSave}>Save</Button>
        </Stack>
    );
};

export default TeamAdmin;
