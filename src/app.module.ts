import { TelegramModule } from './telegram/telegram.module';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { BotModule } from './bot/bot.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { mongodbConfig } from './datababe/mongodb-config.repository';

@Module({
  imports: [
    TypeOrmModule.forRoot(mongodbConfig()),
    BotModule,
    TelegramModule,
    ConfigModule.forRoot({
      expandVariables: true,
    }),
  ],
})
export class AppModule { }
