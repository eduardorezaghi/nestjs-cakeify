/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CakesController } from './cakes.controller';
import { CakesService } from './cakes/cakes.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CakesModule } from './cakes/cakes.module';


@Module({
  imports: [CakesModule,
    TypeOrmModule.forRoot({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: 'pass123',
        database: 'postgres',
        autoLoadEntities: true,
        // Disable ```synchronize``` flag on production!
        synchronize: true,
    }),
  ],
  controllers: [AppController, CakesController],
  providers: [AppService, CakesService],
})
export class AppModule {}
