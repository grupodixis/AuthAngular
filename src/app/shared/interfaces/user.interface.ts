export interface User{
    id: number;
    username: string;
    password: string;
    email: string;
    provider: string;
    confirmed: boolean;
    blocked: boolean;
    role:{
        id:number;
        name:string;
        description: string;
        type: string;
    }
    created_at: Date;
    updated_at: Date;
    parte:number[]
}

