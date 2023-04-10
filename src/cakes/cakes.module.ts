import { Module } from '@nestjs/common';
import { CakesController } from 'src/cakes.controller';
import { CakesService } from './cakes.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cakes } from './entities/cakes.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Cakes])],
  controllers: [CakesController],
  providers: [CakesService],
})
export class CakesModule {}
