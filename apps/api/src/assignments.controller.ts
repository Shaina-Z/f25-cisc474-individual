import { Controller, Get} from '@nestjs/common';
import {Assignment as AssignmentModel} from '@repo/database';
import { AssignmentService } from './assignments.service';

@Controller('assignment')
export class AssignmentController{
    constructor(
        private readonly assignmentService: AssignmentService){}
    
    @Get()
    async findAll():(Promise<AssignmentModel[]>){
        return this.assignmentService.findAssignments({})
    }


}
