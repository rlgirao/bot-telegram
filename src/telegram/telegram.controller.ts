import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { StartBotDto } from './dto/start.dto';
import { TelegramService } from './telegram.service';

@Controller('telegram')
export class TelegramController {
    constructor(
        private readonly telegramService: TelegramService,
      ) {}

    @Post('start')
    @HttpCode(200)
    async start(@Body() body: StartBotDto): Promise<any> {

        await this.telegramService.start(body.id);
        return {
            success: true,
            statusCode: 200,
        };
    }
}
