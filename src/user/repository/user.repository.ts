import { ForbiddenException, Injectable, UnauthorizedException } from "@nestjs/common";
import { PrismaService } from "src/database/prisma/prisma.service";
import { FindOneUserOutPutDto } from "src/user/dtos/find-user.dto";

@Injectable()
export class UserRepository {
    constructor(private readonly prisma: PrismaService) {}

    async createUser(
        email: string,
        name: string,
        hashedPassword: string
    ): Promise<true> {

        const existringUser = await this.prisma.user.findUnique({
            where: {
                email: email,
            },
        });

        if(existringUser){
            throw new ForbiddenException('해당 이메일이 존재합니다.')
        }
        
        await this.prisma.user.create({
            data: {
                email,
                password: hashedPassword,
                name,
            },
        });

        return true;
    }

    async findUser(userId: number): Promise<FindOneUserOutPutDto | null> {
        const user = await this.prisma.user.findUnique({
            select: {
                id: true,
                email: true,
                name: true,
                createdAt: true,
            },
            where: {
                id: userId
            },
        });

        return user;
    }
}