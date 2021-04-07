import { CreateTrackDto } from './track/create-track-dto';
import { Trackservis } from './track.servis';
import { Body, Controller, Get, Post } from "@nestjs/common";

@Controller('/track')
export class trackController{
    constructor(private trackServise:Trackservis){}
    @Get()
     getAll(){
            return 'Gettt'
    }
    @Post()
     create(@Body() dto:CreateTrackDto){
                return this.trackServise.create(dto)
    }
     getOne(){

    }
     Delete(){
        
    }
}