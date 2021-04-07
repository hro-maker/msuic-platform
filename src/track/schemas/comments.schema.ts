import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ComentDocument = Comment & Document;

@Schema()
export class Comment {
  @Prop()
  track_id: string;

  @Prop()
  username: string;
  @Prop()
  text: string;

}

export const CatSchema = SchemaFactory.createForClass(Comment);