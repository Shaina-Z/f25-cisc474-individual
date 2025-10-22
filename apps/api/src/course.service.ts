import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { Course, Prisma} from '@repo/database';
import { CourseIn, CourseOut, CourseUpdate} from '@repo/api/courses';
@Injectable()
export class CourseService {
   constructor(private prisma: PrismaService) {}

   async findCourse(
       courseWhereUniqueInput: Prisma.CourseWhereUniqueInput,
     ): Promise<Course | null> {
       return this.prisma.course.findUnique({
         where: courseWhereUniqueInput,
       });
     }

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
 async create(createCourseDto: CourseIn): Promise<CourseOut> {
    const newCourse = await this.prisma.course.create({
      data: createCourseDto,
    });
    return {
      title: newCourse.title,
      id: newCourse.id,
    };
  }

    update(id: number, updateCourseDto: CourseUpdate) {
    return this.prisma.course.update({
      where: { id },
      data: updateCourseDto,
    });
  }
}