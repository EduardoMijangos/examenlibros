import { User } from './../../users/entities/user.entity';
import { IsNotEmpty, IsNumber, IsString } from "class-validator";


export class CreateTaskDto {
    @IsString()
    @IsNotEmpty()
    title: string

    @IsString()
    description: string

    @IsNumber()
    important: number

    user: User
    userid:number
}
