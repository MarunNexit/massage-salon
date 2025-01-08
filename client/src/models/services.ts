export interface IService {
    _id: string;
    category: 'TOP' | 'ALL';
    name: string;
    duration: number;
    price: number;
    description: string;
    dateAdded: Date;
}