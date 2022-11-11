import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { BotService } from './bot.service';
import { Bot } from './entity/bot.entity';
import { CreateBotDto } from './dto/create-bot.dto';
import { UpdateBotDto } from './dto/update-bot.dto';''

@Controller('bot')
export class BotController {
    constructor(
        private botService: BotService
    ) {}

    @Get()
    async findAll(): Promise<Bot[]> {
        return await this.botService.findAll();
    }

    @Get('/:id')
    async findById(@Param() params: any): Promise<Bot> {
        return await this.botService.findById(params.id);
    }

    @Delete('/:id')
    async deleteById(@Param() params: any): Promise<string> {
        return await this.botService.deleteById(params.id);
    }

    @Post()
    async insertBot(@Body() data: CreateBotDto): Promise<Bot> {
        return await this.botService.insertBot(data);
    }

    @Put()
    async updateBot(@Body() data: UpdateBotDto): Promise<Bot> {
        return await this.botService.updateBot(data);
    }
}
