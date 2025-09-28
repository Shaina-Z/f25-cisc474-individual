import { Controller, Get, Param} from '@nestjs/common';
import {User as UserModel} from '@repo/database';
import { UserService } from './user.service';

@Controller('user')
export class UserController{
    constructor(
        private readonly userService: UserService){}
    
     @Get('/:id')
    async getUserById(@Param('id') id: string): Promise<UserModel> {
    return this.userService.findUser({ id: Number(id) });
  }    

    @Get()
    async findAll():(Promise<UserModel[]>){
        return this.userService.findUsers({})
    }


}

