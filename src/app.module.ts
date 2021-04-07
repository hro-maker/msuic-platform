import { FileModul } from './files/file-module';
import { TrackModule } from './track/track.module';
import { Module } from "@nestjs/common";
import { MongooseModule } from '@nestjs/mongoose';
import { ServeStaticModule } from '@nestjs/serve-static';
import * as path from 'path';

@Module({
    imports: [
        ServeStaticModule.forRoot({
            rootPath: path.resolve(__dirname, 'static'),
          }),
        MongooseModule.forRoot('mongodb+srv://admin:admin@cluster0.qlzbx.mongodb.net/music?retryWrites=true&w=majority'),
        TrackModule,
        FileModul,
    ] 
})
export class AppModule { }