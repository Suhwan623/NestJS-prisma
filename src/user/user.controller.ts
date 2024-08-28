import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { FindOneUserOutPutDto } from 'src/user/dtos/find-user.dto';
import { signUpBodyDto } from './dtos/user-body.dto';
import { ApiOkResponse, ApiOperation } from '@nestjs/swagger';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}
    
    @Get()
    async getUserPage(): Promise<string> {
        const res = await this.userService.getUserPage();

        return res;
    }
    @ApiOperation({
        summary: '회원가입 API',
        description: '이메일, 이름, 비밀번호를 적고 회원가입을 할 수 있습니다',
    })
    @ApiOkResponse({
        type: signUpBodyDto,
    })
    @Post('/sign-up')
    async signUp(@Body() body: signUpBodyDto): Promise<true> {
        const isCreated = await this.userService.signUp(
            body.email,
            body.name,
            body.password,
        );

        return isCreated;
    }

    @ApiOperation({
        summary: '유저 정보 확인 API',
        description: '유저 정보를 확인 할 수 있습니다',
    })
    @ApiOkResponse({
        type: FindOneUserOutPutDto,
    })
    @Get('/:userId/info')
    async findUser(@Param('userId', ParseIntPipe) userId: number): Promise<FindOneUserOutPutDto | null> {
        const user = this.userService.findUser(userId);

        return user;
    }
}
