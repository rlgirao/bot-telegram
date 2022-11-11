import { Injectable } from '@nestjs/common';
import { BotService } from 'src/bot/bot.service';
import { Log } from 'src/util/logs';
import { Telegraf } from 'telegraf';

@Injectable()
export class TelegramService {

    constructor(
        private readonly botService: BotService
    ) {}

    async start(id: string): Promise<void> {
        const bot = await this.botService.findById(id);

        Log.info("Telegram Service", `Bot iniciado ${bot.name}`);

        const telegram = new Telegraf(bot.token);

        telegram.start(ctx => {
            const botName = ctx.botInfo.username;
            const from = ctx.update.message.from;

            Log.info("Telegram Service",`Bot started: ${botName}`);

            ctx.reply(`Seja bem vindo sr(a) ${from.first_name}`);
        });

        telegram.launch();

        telegram.on('text', (ctx) => {
            const botName = ctx.botInfo.username;
            const message = JSON.stringify(ctx.update.message);
            Log.info("Telegram Service",`Bot: ${botName} Message: ${message}`);
            ctx.reply("resposta a texto!");
        });

        telegram.on('photo', (ctx) => {
            const botName = ctx.botInfo.username;
            const message = JSON.stringify(ctx.update.message);
            Log.info("Telegram Service",`Bot: ${botName} Message: ${message}`);
            ctx.reply("resposta a foto!");
        });

        telegram.on('video', (ctx) => {
            const botName = ctx.botInfo.username;
            const message = JSON.stringify(ctx.update.message);
            Log.info("Telegram Service",`Bot: ${botName} Message: ${message}`);
            ctx.reply("resposta a video!");
        });

        telegram.on('document', (ctx) => {
            const botName = ctx.botInfo.username;
            const message = JSON.stringify(ctx.update.message);
            Log.info("Telegram Service",`Bot: ${botName} Message: ${message}`);
            ctx.reply("resposta a documento!");
        });

        telegram.on('audio', (ctx) => {
            const botName = ctx.botInfo.username;
            const message = JSON.stringify(ctx.update.message);
            Log.info("Telegram Service",`Bot: ${botName} Message: ${message}`);
            ctx.reply("resposta a mp3!");
        });

        telegram.on('voice', (ctx) => {
            const botName = ctx.botInfo.username;
            const message = JSON.stringify(ctx.update.message);
            Log.info("Telegram Service",`Bot: ${botName} Message: ${message}`);
            ctx.reply("resposta a audio!");
        });
    }
}
