import { CreateTrackDto } from './dto/create-track-dto';
import { Trackservis } from './track.servis';
import { Body, Controller, Delete, Get, Param, Post, UploadedFiles, UseInterceptors } from "@nestjs/common";
import { ObjectId } from 'mongoose';
import { CreateComentDto } from './dto/Coment-coment-dto';
import { FileFieldsInterceptor } from '@nestjs/platform-express';

@Controller('/track')
export class trackController{
    constructor(private trackServise:Trackservis){}
    @Get()
     getAll(){
            return this.trackServise.getAll()
    }
    @Post()
    @UseInterceptors(FileFieldsInterceptor([
        { name: 'picture', maxCount: 1 },
        { name: 'audio', maxCount: 1 }
      ]))
     create(@UploadedFiles() files,@Body() dto:CreateTrackDto){
         const {picture,audio}=files
                return this.trackServise.create(dto,picture[0],audio[0])
    }
    @Get(':id')
     getOne(@Param('id') id:ObjectId){
                return this.trackServise.getOne(id)
    }
    @Delete(':id')
     Delete(@Param('id') id:ObjectId){
            return this.trackServise.Delete(id)
    }
    @Post('/comment')
    addcomment(@Body()dto:CreateComentDto){
        return this.trackServise.Addcomment(dto)
    }
}