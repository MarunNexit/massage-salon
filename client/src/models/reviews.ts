export interface IReviews {
    id: string;
    name: string;
    rating: number;
    comment: string;
    date: Date;
    isApproved: boolean;
}

export interface IApprovedReviews {
    _id: string;
    name: string;
    rating: number;
    comment: string;
    date: Date;
}
