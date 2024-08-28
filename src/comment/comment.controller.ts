import { Controller, Get, Post, Body,} from '@nestjs/common';
import { CommentService } from './comment.service';
import { CreateCommentDto } from './dtos/create-comment.dto';

@Controller('comment')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @Post()
  async createComment(@Body() body: CreateCommentDto): Promise<true> {
    const isCreated = await this.commentService.createComment(
      body.content,
      body.postId,
      body.userId,
      body.parentId,
    )

    return isCreated;
  }
}