import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { Course, Prisma} from '@repo/database';

@Injectable()
export class CourseService {
   constructor(private prisma: PrismaService) {}

    async findCourses(params: {
     skip?: number;
    take?: number;
    cursor?: Prisma.CourseWhereUniqueInput;
    where?: Prisma.CourseWhereInput;
    orderBy?: Prisma.CourseOrderByWithRelationInput;
  }):Promise<Course[]>{
    const{skip, take, cursor, where, orderBy } = params
    return this.prisma.course.findMany({skip, take, cursor, where, orderBy })
  }

}