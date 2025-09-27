import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { AssignmentController } from './assignments.controller';
import { AssignmentService } from './assignments.service';

@Module({
  controllers: [AssignmentController],
  providers: [AssignmentService, PrismaService],
})
export class AssignmentModule {}