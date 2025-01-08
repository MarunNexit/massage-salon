import React, {useEffect, useMemo, useState} from 'react';
import { Box, Title,  ThemeIcon, Group, Stack, Progress, Text, useMantineTheme, Container } from '@mantine/core';
import { IconCheck } from '@tabler/icons-react';
import ReviewItem from './ReviewItem';
import {getApprovedReviews} from "../../api/review.ts";
import {IApprovedReviews} from "../../models/reviews.ts";

const Reviews: React.FC = () => {
    const theme = useMantineTheme();

    const [reviews, setReviews] = useState<IApprovedReviews[]>([]);
    const [totalReviews, setTotalReviews] = useState(0);

    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const response = await getApprovedReviews();
                setReviews(response);
                setTotalReviews(response.length);
            } catch (error) {
                console.error('Error fetching reviews:', error);
            }
        };

        fetchReviews();
    }, []);


    const ratingCounts = useMemo(() => {
        if (!reviews.length) return [];
        return [5, 4, 3, 2, 1].map((star) => ({
            star,
            count: reviews.filter((review) => review.rating === star).length,
        }));
    }, [reviews]);


    return (
        <Container id="reviews" size="xl" style={{margin: '6rem auto'}}>
            <Text size="xl" style={{marginTop: '1rem', margin: '1rem auto', textAlign: 'start'}}>
                Відгуки
            </Text>
            <section style={{display: 'flex', gap: '2rem', flexWrap: 'wrap'}}>

                {reviews.length > 0 ?
                    (
                        <Box style={{flex: 2}}>
                            {reviews
                                .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
                                .slice(0, 4)
                                .map((review) => (
                                    <ReviewItem key={review._id} {...review} />
                                ))}
                        </Box>
                    ): (
                        <Box style={{flex: 2}}>
                            <Text size="md" color="dimmed" style={{marginTop: '1rem', textAlign: 'start'}}>
                                Відгуків ще немає )
                            </Text>
                        </Box>
                    )}
                <Stack style={{flex: 1}}>
                    <Box
                        style={{
                            padding: '1.5rem',
                            borderRadius: '8px',
                            backgroundColor: theme.colors.background[1],
                        }}
                    >
                        <Title size="md" order={4} style={{marginBottom: '1rem'}}>
                            Оцінка
                        </Title>
                        {ratingCounts.map(({star, count}) => {
                            const percentage = (count / totalReviews) * 100;

                            return (
                                <Group key={star} style={{marginBottom: '0.5rem'}}>
                                    <Text>{`${star} зірок`}</Text>
                                    <Progress
                                        value={percentage}
                                        style={{flex: 1, margin: '0 1rem'}}
                                        color="yellow"
                                    />
                                    <Text>{`${count} осіб`}</Text>
                                </Group>
                            );
                        })}
                    </Box>

                    <Box
                        style={{
                            padding: '1.5rem',
                            borderRadius: '8px',
                            backgroundColor: theme.colors.background[1],
                            minWidth: '400px',
                        }}
                    >
                        <Group>
                            <ThemeIcon variant="light" radius="xl" color="green">
                                <IconCheck size={20}/>
                            </ThemeIcon>
                            <Text size="md">
                                Перевірені відгуки
                            </Text>
                        </Group>
                        <Text size="sm" color="dimmed" style={{marginTop: '1rem', textAlign: 'start'}}>
                            Усі відгуки на нашому сайті проходять перевірку для забезпечення їх автентичності.
                        </Text>
                    </Box>
                </Stack>
            </section>
        </Container>
    );
};

export default Reviews;
