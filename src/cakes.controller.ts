import { Body, Controller, Get, Header, HttpCode, Param, Post, Put, Query, Req } from '@nestjs/common';
import { Request } from 'express';
import { CreateCakeDTO, UpdateCakeDTO } from './dto'
@Controller('cakes')
export class CakesController {
    @Post()
    @Header('Cache-Control', 'none')
    @HttpCode(204)
    create(): string {
      return 'This action bakes a new cake';
    }

    @Post()
    @HttpCode(200)
    async createResource(@Body() createCakeDTO: CreateCakeDTO) {
        return `This action creates a new the recipe for a cake!`;
    } 

    @Put(':id')
    @HttpCode(200)
    async updateResource(
        @Param('id') id: string,
        @Body() updateCakeDTO: UpdateCakeDTO) {
        return `This action updates the recipe for #${id} cake!`;
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