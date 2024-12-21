export interface PricingCardProps {
    id: string;
    title: string;
    price: number;
    diamonds?: number;
    description?: string[];
    benefits?: string[];
    isPopular?: boolean;
    currency?: string;
}