export interface ApiError{
    timestamp: string;
    code: number;
    status: string;
    errors: string[];
}