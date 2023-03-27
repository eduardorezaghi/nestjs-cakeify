import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CakesController } from './cakes.controller';
import { CakesService } from './cakes/cakes.service';

@Module({
  imports: [],
  controllers: [AppController, CakesController],
  providers: [AppService, CakesService],
})
export class AppModule {}
