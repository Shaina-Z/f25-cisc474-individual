import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { User, Prisma} from '@repo/database';

@Injectable()
export class UserService {
   constructor(private prisma: PrismaService) {}

     async findUser(
    userWhereUniqueInput: Prisma.UserWhereUniqueInput,
  ): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: userWhereUniqueInput,
    });
  }
   
    async findUsers(params: {
     skip?: number;
    take?: number;
    cursor?: Prisma.UserWhereUniqueInput;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput;
  }):Promise<User[]>{
    const{skip, take, cursor, where, orderBy } = params
    return this.prisma.user.findMany({skip, take, cursor, where, orderBy })
  }
}