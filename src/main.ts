import { AppModule } from './app.module';
import { NestFactory } from '@nestjs/core';

const start= async()=>{
    try {
        const PORT=process.env.PORT || 5000
        const app=await NestFactory.create(AppModule)
        app.enableCors()
       await app.listen(PORT,()=>console.log(`server started on Port ${PORT}`))
        
    } catch (error) {
        console.log(error)
    }
}
start()