import { CreateTrackDto } from './track/create-track-dto';
import { Comment, ComentDocument } from './schemas/comments.schema';
import { Track, TrackDocument } from './schemas/track.schema';
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from 'mongoose';


@Injectable()
export class Trackservis{
    constructor(@InjectModel(Track.name) private TrackModel: Model<TrackDocument>,
    @InjectModel(Comment.name) private ComentModel: Model<ComentDocument>,
    ) {}
    async getAll(){

    }
    async create(dto: CreateTrackDto):Promise<Track>{
            const track=await this.TrackModel.create({ ...dto,listens:0 })
            return track
    }
    async getOne(){

    }
    async Delete(){
        
    }
}
