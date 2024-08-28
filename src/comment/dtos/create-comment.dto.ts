import { PickType } from "@nestjs/swagger";
import { CommentEntity } from "../entities/comment.entity";

export class CreateCommentDto extends PickType(CommentEntity, [
    'content',
    'userId',
    'postId',
    'parentId'
] as const) {}
