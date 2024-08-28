import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/database/prisma/prisma.service";
import { FindOnePostOutPutDto } from "src/post/dtos/find-post.dto";

@Injectable()
export class PostRepository {
    constructor(private readonly prisma: PrismaService) {}

    async findOnePost(postId: number): Promise<FindOnePostOutPutDto | null> {
        const post = await this.prisma.post.findFirst({
            select: {
                id: true,
                title: true,
                content: true,
                createdAt: true,
                updatedAt: true,
                userId: true,
            },
            where: {
                id: postId,
            },
        });

        return post;
    }

    async createPost(title: string, content: string, userId: number): Promise<true>{
        await this.prisma.post.create({
            data: {
                title,
                content,
                userId,
            },
        });

        return true;
    }
}