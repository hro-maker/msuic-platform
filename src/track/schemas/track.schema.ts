import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose'

export type TrackDocument = Track & Document;

@Schema()
export class Track {
  @Prop()
  name: string;

  @Prop()
  artist: string;

  @Prop()
  track: string;

  @Prop()
  picture: string;

  @Prop()
  listens: number;

  @Prop()
  audio: string;
  @Prop({type:[{type:mongoose.Schema.Types.ObjectId,ref:"Comment"}]})
  coments: Comment[];
}

export const TrackSchema = SchemaFactory.createForClass(Track);