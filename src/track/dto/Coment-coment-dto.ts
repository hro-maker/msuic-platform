import { ObjectId } from "mongoose";

export class CreateComentDto{
    readonly username:string;
    readonly  text:string;
    readonly trackId:ObjectId
}