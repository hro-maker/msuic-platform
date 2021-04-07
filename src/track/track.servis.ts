import { CreateTrackDto } from './dto/create-track-dto';
import { Comment, ComentDocument } from './schemas/comments.schema';
import { Track, TrackDocument } from './schemas/track.schema';
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model, ObjectId } from 'mongoose';
import { CreateComentDto } from './dto/Coment-coment-dto';


@Injectable()
export class Trackservis{
    constructor(@InjectModel(Track.name) private TrackModel: Model<TrackDocument>,
    @InjectModel(Comment.name) private ComentModel: Model<ComentDocument>,
    ) {}
    async getAll():Promise<Track[]>{
            const tracks=await  this.TrackModel.find()
            return tracks
    }
    async create(dto: CreateTrackDto):Promise<Track>{
            const track=await this.TrackModel.create({ ...dto,listens:0 })
            return track
    }
    async getOne(id:ObjectId):Promise<Track>{
        const track=await  this.TrackModel.findById(id)
            return track
    }
    async Delete(id:ObjectId):Promise<ObjectId>{
            const track=await this.TrackModel.findByIdAndDelete(id)
            return track._id
    }

    async Addcomment(dto:CreateComentDto):Promise<Comment>{
        const track=await this.TrackModel.findById(dto.trackId)
        const coment= await this.ComentModel.create({...dto})
        track.coments.push(coment._id)
        await track.save()
        return coment
    }
}
