import { Controller, Get, Param} from '@nestjs/common';
import {Course as CourseModel} from '@repo/database';
import { CourseService } from './course.service';

@Controller('course')
export class CourseController{
    constructor(
        private readonly courseService: CourseService){}
    @Get('/:id')
        async getUserById(@Param('id') id: string): Promise<CourseModel> {
        return this.courseService.findCourse({ id: Number(id) });
      }  

    @Get()
    async findAll():(Promise<CourseModel[]>){
        return this.courseService.findCourses({})
    }


}