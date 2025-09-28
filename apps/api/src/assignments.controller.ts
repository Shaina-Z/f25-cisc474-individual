import { Controller, Get, Param} from '@nestjs/common';
import {Assignment as AssignmentModel} from '@repo/database';
import { AssignmentService } from './assignments.service';

@Controller('assignment')
export class AssignmentController{
    constructor(
        private readonly assignmentService: AssignmentService){}
    @Get('assignment/:id')
            async getUserById(@Param('id') id: string): Promise<AssignmentModel> {
            return this.assignmentService.findAssignment({ id: Number(id) });
          } 

    @Get()
    async findAll():(Promise<AssignmentModel[]>){
        return this.assignmentService.findAssignments({})
    }


}
