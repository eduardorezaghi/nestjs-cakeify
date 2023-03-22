import { Controller, Get, Header, HttpCode, Post, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('cakes')
export class CakesController {
    @Post()
    @Header('Cache-Control', 'none')
    @HttpCode(204)
    create(): string {
      return 'This action bakes a new cake';
    }

    @Get()
    @HttpCode(200)
    findAll(@Req() request: Request): string {
        return 'This action will return all baked cakes!'
    }
}