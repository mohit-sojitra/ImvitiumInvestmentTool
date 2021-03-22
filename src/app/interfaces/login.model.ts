import { UserModel } from "./user.model";

export interface LoginModel{
    access_token:string,
    token_type:string,
    expires_in:number,
    register:UserModel
}