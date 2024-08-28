import { PickType } from "@nestjs/swagger";
import { PostEntity } from "../entities/post.entity";

export class FindOnePostOutPutDto extends PickType(PostEntity, [
    'id',
    'title',
    'content',
    'createdAt',
    'userId',
] as const) {}