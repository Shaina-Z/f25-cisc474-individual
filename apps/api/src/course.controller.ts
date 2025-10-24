import { Body, Controller, Get, Param, Post,UseGuards} from '@nestjs/common';
import {Course as CourseModel} from '@repo/database';
import { CourseService } from './course.service';
import { CourseIn } from '@repo/api/courses';
import { AuthGuard } from '@nestjs/passport';
import { CurrentUser } from './current-user.decorator';
import { JwtUser } from './jwt.strategy';

@Controller('course')
export class CourseController{
    constructor(
        private readonly courseService: CourseService){}

    @UseGuards(AuthGuard('jwt'))
    @Get('/:id')
        async getUserById(@Param('id') id: string): Promise<CourseModel> {
        return this.courseService.findCourse({ id: Number(id) });
      }  
  @UseGuards(AuthGuard('jwt'))
    @Get()
    async findAll():(Promise<CourseModel[]>){
        return this.courseService.findCourses({})
    }

    @UseGuards(AuthGuard('jwt'))
    @Post()
    create(@Body() createCourseDto: CourseIn) {
    return this.courseService.create(createCourseDto);
  }


}