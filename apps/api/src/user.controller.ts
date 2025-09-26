import { Controller, Get} from '@nestjs/common';
import {User as UserModel} from '@repo/database';
import { UserService } from './user.service';

@Controller('user')
export class UserController{
    constructor(
        private readonly userService: UserService){}
    
    @Get()
    async findAll():(Promise<UserModel[]>){
        return this.userService.users({})
    }


}

