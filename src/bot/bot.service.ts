import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BotRepository } from './bot.repository';
import { Bot } from './entity/bot.entity';
import { CreateBotDto } from './dto/create-bot.dto';
import { UpdateBotDto } from './dto/update-bot.dto';
import { Log } from 'src/util/logs';

@Injectable()
export class BotService {
  constructor(
    @InjectRepository(BotRepository)
    private botRepository: BotRepository,
  ) {}

  async findAll(): Promise<Bot[]> {
    const bots = await this.botRepository.find();

    Log.info("Bot Service",`Lista dos bots: ${bots ?? []}`);
    
    return bots ?? [];
  }

  async findById(id: string): Promise<Bot> {
    const bot = await this.botRepository.findOne(id);

    if (!bot) {
      throw new NotFoundException(`Bot não encontrado`);
    }

    Log.info("Bot Service",`Bot: ${bot}`);

    return bot;
  }

  async deleteById(id: string): Promise<string> {
    const bot = await this.botRepository.findOne(id);

    if (!bot) {
      throw new NotFoundException(`Bot não encontrado`);
    }

    Log.info("Bot Service",`Bot deletado: ${bot}`);

    await this.botRepository.delete(id);

    return "Bot deletado com sucesso";
  }

  async insertBot(data: CreateBotDto): Promise<Bot> {
    const bot = await this.botRepository.createBot(data);

    Log.info("Bot Service",`Inserindo novo bot: ${bot}`);

    return bot;
  }

  async updateBot(data: UpdateBotDto): Promise<Bot> {
    const bot = await this.findById(data.id);

    Log.info("Bot Service",`Atualizando bot: ${bot}`);

    bot.updatedAt = new Date();

    Object.keys(data).forEach((key) => {
      bot[key] = data[key];
    });

    await this.botRepository.update(bot.id, bot);

    const newBot = await this.findById(bot.id);

    Log.info("Bot Service",`Novo bot atualizado: ${bot}`);

    return newBot;
  }
}
