import { PickType } from "@nestjs/swagger";
import { UserEntity } from "../entities/user.entity";

export class signUpBodyDto extends PickType(UserEntity, [
    'email',
    'password',
    'name',
] as const) {}