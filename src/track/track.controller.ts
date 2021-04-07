import { CreateTrackDto } from './dto/create-track-dto';
import { Trackservis } from './track.servis';
import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { ObjectId } from 'mongoose';

@Controller('/track')
export class trackController{
    constructor(private trackServise:Trackservis){}
    @Get()
     getAll(){
            return this.trackServise.getAll()
    }
    @Post()
     create(@Body() dto:CreateTrackDto){
                return this.trackServise.create(dto)
    }
    @Get(':id')
     getOne(@Param('id') id:ObjectId){
                return this.trackServise.getOne(id)
    }
    @Delete('id')
     Delete(@Param('id') id:ObjectId){
            return this.trackServise.Delete(id)
    }
}