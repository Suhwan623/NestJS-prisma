import { ApiProperty } from "@nestjs/swagger";
import { IsDateString, IsEmpty, IsInt, IsNotEmpty, IsString } from "class-validator";

export class PostEntity {
    @ApiProperty({
        type: Number,
        required: true,
    })
    @IsInt()
    id: number;

    @ApiProperty({
        type: String,
        description: '제목',
        example: 'test1',
        required: true,
    })
    @IsString()
    @IsNotEmpty()
    title: string;

    @ApiProperty({
        type: String,
        description: '내용',
        example: 'testing..',
        required: true,
    })
    @IsString()
    @IsEmpty()
    content: string;

    @ApiProperty({
        type: Date,
    })
    @IsDateString()
    createdAt: Date;
    
    @ApiProperty({
        type: Date,
    })
    @IsDateString()
    updatedAt: Date | null;

    @ApiProperty({
        type: Number,
        description: '유저 아이디',
        example: '1',
        required: true,
    })
    @IsInt()
    userId: number;
}