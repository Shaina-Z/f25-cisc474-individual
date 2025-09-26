import { Module } from '@nestjs/common';

import { LinksModule } from './links/links.module';
import {UserModule} from './user.module'
import { AppService } from './app.service';
import { AppController } from './app.controller';

@Module({
  imports: [LinksModule,UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
