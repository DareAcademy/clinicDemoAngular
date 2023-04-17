import { country } from "./country";

export class patient{
    id!:number;
    fName!:string;
    lName!:string;
    phone!:string;
    email!:string;
    bDate!:Date;
    country_Id!:number
    country!:country

}