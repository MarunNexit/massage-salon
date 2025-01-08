import React, {useEffect, useState} from 'react';
import {Stack, Text} from '@mantine/core';
import ServiceItem from "./ServiceItem.tsx";
import './services.css';
import {getServices} from "../../api/service.ts";
import {IService} from "../../models/services.ts";
import {getSortedServices, SortOptions} from "../../utils/serviceSorting.ts";
import ServiceFilters from "./ServiceFilters.tsx";
import EnrollServiceItem from "../enroll/service/enrollServiceItem.tsx";

interface ServiceProps {
    onSelect?: (id: string) => void;
    isDrawer: boolean;
}


const Services: React.FC<ServiceProps> = ({isDrawer = false, onSelect}: ServiceProps) => {
    const [selectedCategory, setSelectedCategory] = useState<'TOP' | 'ALL'>('ALL');
    const [sortOption, setSortOption] = useState<SortOptions>(SortOptions.Newest);

    const handleCategoryChange = (category: 'TOP' | 'ALL') => {
        setSelectedCategory(category);
    };

    const handleSortOption = (sortOption: SortOptions) => {
        setSortOption(sortOption);
    };

    const [services, setServices] = useState<IService[]>([]);

    useEffect(() => {
        const fetchServices = async () => {
            try {
                const response = await getServices();
                setServices(response);
            } catch (error) {
                console.error('Error fetching services:', error);
            }
        };

        fetchServices();
    }, []);

    const sortedServices = getSortedServices({services, selectedCategory, sortOption})

    return (
        <section id="services"  className="services" style={ !isDrawer ? {marginTop: '6rem'} : {}}>
            <div
                className={isDrawer ? 'servicesDrawerDiv' : 'servicesDiv'}
            >
                {isDrawer ? (
                    <div style={{marginBottom: '1rem'}}>
                        <Text size={'md'} style={{fontWeight: '400'}}>Виберіть послугу</Text>
                    </div>
                ) : (
                    <div style={{textAlign: 'center'}}>
                        <h2>Послуги</h2>
                    </div>
                )}

                <ServiceFilters selectedCategory={selectedCategory} handleCategoryChange={handleCategoryChange} sortOption={sortOption} handleSortOption={handleSortOption} isDrawer={isDrawer ? isDrawer : false}></ServiceFilters>

                {isDrawer ? (
                    <Stack>
                        {sortedServices.map((service) => (
                            <EnrollServiceItem key={service._id} {...service} isDrawer={isDrawer ? isDrawer : false} onSelect={onSelect} />
                        ))}
                    </Stack>
                ): (
                    <Stack>
                        {sortedServices.map((service) => (
                            <ServiceItem key={service._id} {...service} isDrawer={isDrawer ? isDrawer : false} />
                        ))}
                    </Stack>
                )}
            </div>
        </section>
    );
};

export default Services;
