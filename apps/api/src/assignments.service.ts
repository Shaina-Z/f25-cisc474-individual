import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { Assignment, Prisma} from '@repo/database';

@Injectable()
export class AssignmentService {
   constructor(private prisma: PrismaService) {}

   async findAssignment(
          assignmentWhereUniqueInput: Prisma.AssignmentWhereUniqueInput,
        ): Promise<Assignment | null> {
          return this.prisma.assignment.findUnique({
            where: assignmentWhereUniqueInput,
          });
        }

    async findAssignments(params: {
     skip?: number;
    take?: number;
    cursor?: Prisma.AssignmentWhereUniqueInput;
    where?: Prisma.AssignmentWhereInput;
    orderBy?: Prisma.AssignmentOrderByWithRelationInput;
  }):Promise<Assignment[]>{
    const{skip, take, cursor, where, orderBy } = params
    return this.prisma.assignment.findMany({skip, take, cursor, where, orderBy })
  }

}