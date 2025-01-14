import { Card, Grid, Group, Text, useMantineTheme } from "@mantine/core";
import React from "react";
import './serviceItem.css';
import {IconArrowRight} from "@tabler/icons-react";
import EnrollButton from "../enroll/enrollButton.tsx";

interface ServiceItemProps {
    _id: string;
    name: string;
    duration: number;
    price: number;
    description: string;
    isDrawer: boolean;
}

const ServiceItem: React.FC<ServiceItemProps> = ({ _id, name, duration, price, description, isDrawer = false }) => {
    const theme = useMantineTheme();

    return (
        <Card
            className={isDrawer ? "drawerList" : ""}
            shadow="sm"
            padding={isDrawer ? "md" : "lg"}
            radius="md"
            withBorder
            style={{ backgroundColor: theme.colors.background[1] }}
        >
            <Grid gutter="sm">
                <Grid.Col span={isDrawer ? 11 : 9}>
                    <Group style={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
                        <Text style={{fontWeight: '500'}} size={isDrawer ? 'md' : 'lg'}>{name}</Text>
                        <Group>
                            <Text size={isDrawer ? 'sm' : 'md'}>{price} грн</Text>
                            <Text size={isDrawer ? 'sm' : 'md'}>{duration / 60} год.</Text>
                        </Group>
                    </Group>
                    <Text size="sm" style={{ marginTop: isDrawer ? '16px' : '28px' }}>
                        {description}
                    </Text>
                </Grid.Col>
                <Grid.Col
                    span={isDrawer ? 1 : 3}
                    style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}
                >
                    {isDrawer ? (
                        <IconArrowRight size={24} stroke={2} color="blue" style={{ cursor: 'pointer' }} />
                    ) : (
                        <EnrollButton outline={false} full={false} service={{_id, name}}></EnrollButton>
                    )}
                </Grid.Col>
            </Grid>
        </Card>
    );
};

export default ServiceItem;
