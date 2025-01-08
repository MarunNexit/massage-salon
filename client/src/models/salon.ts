export interface ISalon {
    name: string;
    phone: string;
    address: string;
    logo?: string;
    description: string;
    closureReason?: string;
    updatedAt: Date;
}