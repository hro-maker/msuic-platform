import { Module } from "@nestjs/common";
import { trackController } from "./track.controller";
import { Trackservis } from "./track.servis";



@Module({
    controllers:[trackController],
    providers:[Trackservis]
})
export class TrackModule{}