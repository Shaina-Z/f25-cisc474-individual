import { Controller, Get, Param, UnauthorizedException, UseGuards} from '@nestjs/common';
import {User as UserModel} from '@repo/database';
import { UserService } from './user.service';
import { AuthGuard } from '@nestjs/passport';
import { CurrentUser } from './current-user.decorator';
import { JwtUser } from './jwt.strategy';

@Controller('user')
export class UserController{
    constructor(
        private readonly userService: UserService){}
   
   @UseGuards(AuthGuard('jwt'))
  @Get('me')
  async me(@CurrentUser() auth: JwtUser) {
    console.log(auth);
    if (!auth || !auth.userId) {
      throw new UnauthorizedException();
    }
    const user = await this.userService.findUser({id:auth.userId});
    if (!user) {
      throw new Error('User not found');
    }
    // Return only what your client needs (include the DB id!)
    return {
      id: user.id,
      name: user.name,
      email: user.email,
    };
  }

     @Get('/:id')
    async getUserById(@Param('id') id: string): Promise<UserModel> {
    return this.userService.findUser({ id: Number(id) });
  }    

    @Get()
    async findAll():(Promise<UserModel[]>){
        return this.userService.findUsers({})
    }


}

