import { Body, Controller, Get, Param, ParseIntPipe, Post } from "@nestjs/common";
import { PostService } from "./post.service";
import { CreatePostDto } from "src/post/dtos/create-post.dto";
import { FindOnePostOutPutDto } from "src/post/dtos/find-post.dto";
import { ApiOkResponse, ApiOperation } from "@nestjs/swagger";

@Controller('/post')
export class PostController {
    constructor(private readonly postService: PostService) {}
    @ApiOperation({
        summary: '게시글 작성 API',
        description: '게시글을 작성 할 수 있습니다.',
    })
    @ApiOkResponse({
        type: CreatePostDto,
    })
    @Post()
    async createPost(@Body() body: CreatePostDto): Promise<true> {
        const isCreated = await this.postService.createPost(
            body.title,
            body.content,
            body.userId,
        )

        return isCreated;
    }
    @ApiOperation({
        summary: '게시글 정보 확인 API',
        description: '게시글 하나의 정보를 상세확인 할 수 있습니다.'
    })
    @ApiOkResponse({
        type: FindOnePostOutPutDto,
    })
    @Get('/:postId')
    async getOnePost(
        @Param('postId', ParseIntPipe) postId: number,
    ): Promise<FindOnePostOutPutDto> {
        const post = await this.postService.findOnePostdetail(postId);

        return post;
    }
}