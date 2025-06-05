export class Report {     
    id!: string;
    domain!: string;
    fileName!: string | null;
    passes!: number | null;
    incompletePasses!: number | null;
    violations!: number | null;
    jobErrorMessage!: string | null;
    status!: string;
    userId!: string;
    createdAt!: Date;
    updatedAt!: Date; 
}