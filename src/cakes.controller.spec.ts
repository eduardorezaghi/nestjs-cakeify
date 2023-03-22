import { Controller, Get } from '@nestjs/common';

@Controller('cakes')
export class CakesController {
    @Get()
    findAll(): string {
        return 'This action will return all baked cakes!'
    }
}