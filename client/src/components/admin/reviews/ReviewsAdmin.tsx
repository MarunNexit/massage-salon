import React, { useState, useEffect } from 'react';
import { Stack, Title, Text, Button, Group } from '@mantine/core';

const Reviews: React.FC = () => {
    const [reviews, setReviews] = useState<{ author: string; text: string }[]>([]);

    useEffect(() => {
        fetch('/api/reviews')
            .then((res) => res.json())
            .then((data) => setReviews(data));
    }, []);

    const handleDelete = (index: number) => {
        setReviews(reviews.filter((_, i) => i !== index));
    };

    return (
        <Stack>
            <Title order={2}>Reviews</Title>
            {reviews.map((review, index) => (
                <Group key={index}>
                    <Text>
                        <strong>{review.author}:</strong> {review.text}
                    </Text>
                    <Button color="red" onClick={() => handleDelete(index)}>
                        Delete
                    </Button>
                </Group>
            ))}
        </Stack>
    );
};

export default Reviews;
