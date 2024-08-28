import { ApiProperty } from "@nestjs/swagger";
import { IsDateString, IsEmail, IsInt, IsNotEmpty, IsString } from "class-validator";

export class UserEntity {
    @ApiProperty({
        type: Number,
        required: true,
    })
    @IsInt()
    id: number;

    @ApiProperty({
        type: String,
        description: '이메일',
        example: 'example@gmail.com',
        required: true,
    })
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @ApiProperty({
        type: String,
        description: '비밀번호',
        example: '1234',
        required: true,
    })
    @IsString()
    @IsNotEmpty()
    password: string;

    @ApiProperty({
        type: String,
        description: '닉네임',
        example: 'suhwan',
        required: true,
    })
    @IsString()
    @IsNotEmpty()
    name: string;

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
}