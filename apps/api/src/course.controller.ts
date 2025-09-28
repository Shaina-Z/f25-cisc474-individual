import { Controller, Get} from '@nestjs/common';
import {Course as CourseModel} from '@repo/database';
import { CourseService } from './course.service';

@Controller('course')
export class CourseController{
    constructor(
        private readonly courseService: CourseService){}
    
    @Get()
    async findAll():(Promise<CourseModel[]>){
        return this.courseService.findCourses({})
    }


}