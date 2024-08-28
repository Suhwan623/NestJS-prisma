import { Injectable } from '@nestjs/common';
import { CommentRepository } from './Repository/comment.repository';

@Injectable()
export class CommentService {
  constructor(private readonly CommentRepository: CommentRepository) {}
  async createComment(content: string, parentId: number, postId: number, userId: number): Promise<any> {
      const createPost = await this.CommentRepository.createComment(content, parentId, postId, userId);

      createPost
  }
}
