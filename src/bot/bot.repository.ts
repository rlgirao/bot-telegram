import { EntityRepository, Repository } from 'typeorm';
import { Bot } from './entity/bot.entity';
import { CreateBotDto } from './dto/create-bot.dto';

@EntityRepository(Bot)
export class BotRepository extends Repository<Bot> {
    async createBot(data: CreateBotDto): Promise<Bot> {
        const newBot = new Bot();
        newBot.name = data.name;
        newBot.token = data.token;
    
        return await this.save(newBot);
      }
}
