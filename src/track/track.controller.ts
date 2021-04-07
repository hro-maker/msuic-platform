import { Controller, Get } from "@nestjs/common";

@Controller('/track')
export class trackController{
    @Get()
     getAll(){
            return 'Gettt'
    }
     create(){

    }
     getOne(){

    }
     Delete(){
        
    }
}