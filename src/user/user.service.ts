import { Injectable, NotFoundException } from '@nestjs/common';
import { UserRepository } from './repository/user.repository';
import * as bcrypt from 'bcrypt';
import { FindOneUserOutPutDto } from 'src/user/dtos/find-user.dto';

@Injectable()
export class UserService {
    constructor(private readonly userRepository: UserRepository) {}
    async getUserPage(): Promise<string> {
        return 'User Main Page';
    }

    async signUp(email: string, name: string , password: string): Promise<true> {
        const hashedPassword = bcrypt.hashSync(password, 10);

        const isCreated = this.userRepository.createUser(email, name, hashedPassword);

        return isCreated;
    }

    async findUser(userId: number): Promise<FindOneUserOutPutDto | null> {
        const user = this.userRepository.findUser(userId)

        if(!user) {
            throw new NotFoundException('없어요');
        }

        return user;
    }
}
