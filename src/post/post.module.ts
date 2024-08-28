import { Module } from '@nestjs/common';
import { PostService } from './post.service';
import { PostRepository } from './repository/post.repository';
import { PostController } from './post.controller';
import { CommentModule } from 'src/comment/comment.module';

@Module({
    imports: [CommentModule],
    controllers: [PostController],
    providers: [PostService, PostRepository]
})
export class PostModule {}
