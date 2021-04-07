import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose'
export type ComentDocument = Comment & Document;

@Schema()
export class Comment {
  @Prop()
  username: string;
  @Prop()
  text: string;

  @Prop({type:mongoose.Schema.Types.ObjectId,ref:"Track"})
  track: string;
}

export const CommentSchema = SchemaFactory.createForClass(Comment);