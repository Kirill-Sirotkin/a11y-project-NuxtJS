import type { Report } from '~/models/Report';

export class Account {     
    id!: string;
    email!: string;
    firstName!: string | null;
    lastName!: string | null;
    organization!: string | null;
    isOAuth!: boolean;
    isActive!: boolean;
    isVerified!: boolean;
    role!: string;
    subscription!: string;
    remainingReports!: number;
    createdAt!: Date;
    updatedAt!: Date; 
    reports!: Report[];
}