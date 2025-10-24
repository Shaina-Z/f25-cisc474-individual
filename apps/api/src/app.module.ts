import { Module } from '@nestjs/common';

import { LinksModule } from './links/links.module';
import {UserModule} from './user.module'
import {AssignmentModule} from './assignments.module'
import { AppService } from './app.service';
import { AppController } from './app.controller';
import { CourseModule } from './course.module';
import { AuthModule } from './auth.module';

@Module({
  imports: [LinksModule,UserModule, AssignmentModule, CourseModule, AuthModule], 
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
