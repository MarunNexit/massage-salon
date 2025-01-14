import React, { useState, useEffect } from 'react';
import { TextInput, Button, Stack, Title, Group } from '@mantine/core';

const SocialLinksAdmin: React.FC = () => {
    const [socialLinks, setSocialLinks] = useState<{ platform: string; url: string }[]>([]);

    useEffect(() => {
        fetch('/api/social-links')
            .then((res) => res.json())
            .then((data) => setSocialLinks(data));
    }, []);

    const handleAddLink = () => {
        setSocialLinks([...socialLinks, { platform: '', url: '' }]);
    };

    const handleSave = () => {
        fetch('/api/social-links', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(socialLinks),
        }).then(() => alert('Social links updated!'));
    };

    return (
        <Stack>
            <Title order={2}>Social Links</Title>
            {socialLinks.map((link, index) => (
                <Group key={index}>
                    <TextInput
                        label="Platform"
                        value={link.platform}
                        onChange={(e) =>
                            setSocialLinks(
                                socialLinks.map((l, i) => (i === index ? { ...l, platform: e.target.value } : l))
                            )
                        }
                    />
                    <TextInput
                        label="URL"
                        value={link.url}
                        onChange={(e) =>
                            setSocialLinks(
                                socialLinks.map((l, i) => (i === index ? { ...l, url: e.target.value } : l))
                            )
                        }
                    />
                </Group>
            ))}
            <Button variant="outline" onClick={handleAddLink}>
                Add Link
            </Button>
            <Button onClick={handleSave}>Save</Button>
        </Stack>
    );
};

export default SocialLinksAdmin;
