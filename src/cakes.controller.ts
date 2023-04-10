import { Body, Controller, Delete, Get, Header, HttpCode, Param, Post, Put, Query, Req } from '@nestjs/common';
import { Request } from 'express';
import { CakesService } from './cakes/cakes.service';
import { Cakes } from './cakes/entities/cakes.entity';
import { CreateCakeDTO } from './cakes/dto/create-cake-dto';
import { UpdateCakeDTO } from './cakes/dto/update-cake-dto';
@Controller('cakes')
export class CakesController {
    // Constructor creates a Service for interacting with Data Sources
    constructor(private readonly cakesService: CakesService) {}

    @Post()
    @HttpCode(200)
    async createResource(@Body() createCakeDTO: CreateCakeDTO) {
        console.log(createCakeDTO instanceof CreateCakeDTO)
        return this.cakesService.create(createCakeDTO);
    }

    @Put(':id')
    @HttpCode(200)
    async updateResource(
        @Param('id') id: string,
        @Body() updateCakeDTO: UpdateCakeDTO) {
        return this.cakesService.update(id, updateCakeDTO);
    }

    @Post(':mimic')
    @HttpCode(200)
    createPostBody(@Body() body: any) {
        return body
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.cakesService.remove(id);
    }

    @Get()
    @HttpCode(200)
    findAll(
        @Query() paginationQuery,
        @Req() request: Request): Cakes[] {
        const { offset, limit } = paginationQuery;
        return this.cakesService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: number) {
        console.log(typeof id);
        return this.cakesService.findOne(String(id));
    }
}
