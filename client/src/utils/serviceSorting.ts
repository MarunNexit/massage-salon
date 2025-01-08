import {IService} from "../models/services.ts";

export enum SortOptions {
    Newest = 'Новизна',
    PriceLowToHigh = 'Ціна від найменшої',
    PriceHighToLow = 'Ціна від найбільшої',
}

interface SortedServicesParams {
    services: IService[];
    selectedCategory: string;
    sortOption: SortOptions;
}


export const getSortedServices = ({ services, selectedCategory, sortOption }: SortedServicesParams) => {
    return [...services]
        .filter((service) => selectedCategory === 'ALL' || service.category === selectedCategory)
        .sort((a, b) => {
            switch (sortOption) {
                case SortOptions.PriceHighToLow:
                    return b.price - a.price;
                case SortOptions.PriceLowToHigh:
                    return a.price - b.price;
                case SortOptions.Newest:
                default:
                    return new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime();
            }
        });
};