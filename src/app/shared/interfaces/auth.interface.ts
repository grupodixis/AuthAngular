import { User } from "./user.interface";

export interface Auth{
    jwt:string;
    user: User;
}