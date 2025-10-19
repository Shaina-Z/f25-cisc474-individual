import { Body, Controller, Get, Param, Post} from '@nestjs/common';
import {Course as CourseModel} from '@repo/database';
import { CourseService } from './course.service';
import { CourseIn } from '@repo/api/courses';

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

    @Post()
    create(@Body() createCourseDto: CourseIn) {
    return this.courseService.create(createCourseDto);
  }


}