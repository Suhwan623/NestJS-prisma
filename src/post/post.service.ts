import { Injectable, NotFoundException } from "@nestjs/common";
import { FindOnePostOutPutDto } from "src/post/dtos/find-post.dto";
import { PostRepository } from "./repository/post.repository";

@Injectable()
export class PostService {
    constructor(private readonly postRepository: PostRepository) {}
    async findOnePostdetail(postId: number): Promise<FindOnePostOutPutDto> {
        const post = await this.postRepository.findOnePost(postId)

        if(!post) {
            throw new NotFoundException('찾으려는 게시물이 없습니다.');
        }

        return post;
    }

    async createPost(title: string, content: string, userId: number): Promise<any> {
        const isCreated = this.postRepository.createPost(title, content, userId);

        return isCreated;
    }
}