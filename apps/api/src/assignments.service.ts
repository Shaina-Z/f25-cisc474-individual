import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { Assignment, Prisma} from '@repo/database';

@Injectable()
export class UserService {
   constructor(private prisma: PrismaService) {}

    async findAssignments(params: {
     skip?: number;
    take?: number;
    cursor?: Prisma.UserWhereUniqueInput;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput;
  }):Promise<Assignment[]>{
    const{skip, take, cursor, where, orderBy } = params
    return this.prisma.assignment.findMany({skip, take, cursor, where, orderBy })
  }

}