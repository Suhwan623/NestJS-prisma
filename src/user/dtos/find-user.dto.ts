import { PickType } from "@nestjs/swagger";
import { UserEntity } from "../entities/user.entity";

export class FindOneUserOutPutDto extends PickType(UserEntity, [
    'id',
    'email',
    'name',
    'createdAt',
] as const) {}