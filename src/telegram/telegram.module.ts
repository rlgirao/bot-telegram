import { TelegramController } from './telegram.controller';
import { TelegramService } from './telegram.service';
import { Module } from '@nestjs/common';
import { BotModule } from 'src/bot/bot.module';

@Module({
    imports: [BotModule],
    controllers: [TelegramController,],
    providers: [TelegramService,],
    exports: [TelegramService]
})
export class TelegramModule { }
