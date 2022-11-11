import { Module } from '@nestjs/common';
import { BotController } from './bot.controller';
import { BotService } from './bot.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BotRepository } from './bot.repository';
import { Bot } from './entity/bot.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([Bot, BotRepository]),
    ],
    controllers: [BotController],
    providers: [BotService],
    exports: [BotService],
})
export class BotModule { }
