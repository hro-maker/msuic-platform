import { Comment, CommentSchema } from './schemas/comments.schema';
import { Track, TrackSchema } from './schemas/track.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { Module } from "@nestjs/common";
import { trackController } from "./track.controller";
import { Trackservis } from "./track.servis";





@Module({
    imports:[
        MongooseModule.forFeature([{name:Track.name,schema:TrackSchema}]),
        MongooseModule.forFeature([{name:Comment.name,schema:CommentSchema}])
    ],
    controllers:[trackController],
    providers:[Trackservis]
})
export class TrackModule{}