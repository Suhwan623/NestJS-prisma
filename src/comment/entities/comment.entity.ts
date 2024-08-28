import { ApiProperty } from "@nestjs/swagger";
import { IsIn, IsInt, IsNumber, IsString } from "class-validator";

export class CommentEntity {
    @ApiProperty({
        type: Number,
        required: true,
    })
    @IsInt()
    id: number;

    @ApiProperty({
        type: String,
        required: true,
    })
    @IsString()
    content: string;

    @ApiProperty({
        type: Number,
        required: true,
    })
    @IsNumber()
    userId: number;

    @ApiProperty({
        type: Number,
        required: true,
    })
    @IsNumber()
    postId: number;

    @ApiProperty({
        type: Number,
        required: true,
    })
    @IsNumber()
    parentId: number;
}