import React from 'react';
import {Card, Text, Group, Stack, Badge, useMantineTheme} from '@mantine/core';
import {IApprovedReviews} from "../../models/reviews.ts";


const ReviewItem: React.FC<IApprovedReviews> = ( props) => {
    const theme = useMantineTheme();
    const formattedDate = new Date(props.date);

    return (
    <Card shadow="sm" radius="md" padding="lg" style={{ marginBottom: '1rem',  minWidth: '400px', backgroundColor: theme.colors.background[1] }}>
        <Stack >
            <Group style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Group>
                    <Text size='md'>{props.name}</Text>
                    <Badge size='md' color="yellow">{`⭐ ${props.rating}`}</Badge>
                </Group>
                <Group>
                    <Text size="sm" color="dimmed">
                        {`${formattedDate.getDate()}-${formattedDate.getMonth() + 1}-${formattedDate.getFullYear()}`}
                    </Text>
                </Group>
            </Group>
            <Text size='sm' style={{ textAlign: 'start', margin: '14px 0' }}>{props.comment}</Text>
        </Stack>
    </Card>
    )
}

export default ReviewItem;
