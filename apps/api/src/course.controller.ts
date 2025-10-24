import { Body, Controller, Delete, Get, Param, Patch, Post,UseGuards} from '@nestjs/common';
import {Course as CourseModel} from '@repo/database';
import { CourseService } from './course.service';
import { CourseIn, CourseUpdate } from '@repo/api/courses';
import { AuthGuard } from '@nestjs/passport';
import { CurrentUser } from './current-user.decorator';
import { JwtUser } from './jwt.strategy';

@Controller('course')
export class CourseController{
    constructor(
        private readonly courseService: CourseService){}
    
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
  @UseGuards(AuthGuard('jwt'))
  @Patch("/:id")
  updateCourse(@Param('id') id:string, @Body() updateCourseDTO:CourseUpdate){
    return this.courseService.update(Number(id),updateCourseDTO);
  }
  @UseGuards(AuthGuard('jwt'))
  @Delete("/:id")
  remove(@Param('id') id:string){
      return this.courseService.remove(Number(id));
  }


}