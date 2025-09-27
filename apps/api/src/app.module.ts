import { Module } from '@nestjs/common';

import { LinksModule } from './links/links.module';
import {UserModule} from './user.module'
import {AssignmentModule} from './assignments.module'
import { AppService } from './app.service';
import { AppController } from './app.controller';

@Module({
  imports: [LinksModule,UserModule, AssignmentModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
