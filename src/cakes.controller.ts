import { Body, Controller, Get, Header, HttpCode, Param, Post, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('cakes')
export class CakesController {
    @Post()
    @Header('Cache-Control', 'none')
    @HttpCode(204)
    create(): string {
      return 'This action bakes a new cake';
    }

    @Post(':mimic')
    @HttpCode(200)
    createPostBody(@Body() body: any) {
        return body
    }

    @Get()
    @HttpCode(200)
    findAll(@Req() request: Request): string {
        return 'This action will return all baked cakes!'
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return `This action will return #${id} cake!`
    }
}