import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/database/prisma/prisma.service";

@Injectable()
    export class CommentRepository {
        constructor(private readonly prisma: PrismaService) {}
    async createComment(content: string, parentId: number, userId: number, postId: number): Promise<true> {
        await this.prisma.comment.create({
            data: {
                content,
                parentId,
                userId,
                postId,
            },
        });

        return true;
    }
}