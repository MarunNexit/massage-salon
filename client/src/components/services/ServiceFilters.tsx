import React from 'react';
import {Button, Select, Group, useMantineTheme} from '@mantine/core';
import './services.css';
import {SortOptions} from "../../utils/serviceSorting.ts";

interface ServiceFiltersProps {
    selectedCategory: string;
    handleCategoryChange: (category: 'TOP' | 'ALL') => void;
    sortOption: string;
    handleSortOption:  (sortOptions: SortOptions) => void;
    isDrawer: boolean;
}


const ServiceFilters: React.FC<ServiceFiltersProps> = ({selectedCategory, handleCategoryChange, sortOption, handleSortOption, isDrawer = false}: ServiceFiltersProps) => {
    const theme = useMantineTheme();

    return (
        <Group style={{marginBottom: '16px', justifyContent: 'space-between'}}>
            <Group>
                <Button
                    size={isDrawer? 'xs' : 'sm'}
                    style={{background: selectedCategory === 'TOP' ? theme.colors.background[7] : theme.colors.background[1]}}
                    variant={selectedCategory === 'TOP' ? 'filled' : 'outline'}
                    onClick={() => handleCategoryChange('TOP')}
                >
                    ТОП
                </Button>
                <Button
                    size={isDrawer? 'xs' : 'sm'}
                    style={{background: selectedCategory != 'TOP' ? theme.colors.background[7] : theme.colors.background[1]}}
                    variant={selectedCategory === 'ALL' ? 'filled' : 'outline'}
                    onClick={() => handleCategoryChange('ALL')}
                >
                    УСІ
                </Button>
            </Group>
            <Select
                size={isDrawer? 'xs' : 'sm'}
                data={Object.values(SortOptions)}
                value={sortOption}
                onChange={(value) => handleSortOption(value as SortOptions)}
                placeholder="Сортувати за"
                styles={{
                    input: {
                        backgroundColor: theme.colors.background[1],
                    },
                    dropdown: {
                        backgroundColor: theme.colors.background[1],
                    },
                }}
            />
        </Group>
    );
};

export default ServiceFilters;
