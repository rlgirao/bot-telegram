import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { EnvUtil } from './util/env-util';
import { Logger, ValidationPipe } from '@nestjs/common';
import 'reflect-metadata';

declare const module: any;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('bots-telegram/api');
  app.enableCors();
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    }),
  );

  await app.listen(EnvUtil.TelegramPort).then(() => {
    Logger.log(
      `Bots Telegram is listening on port ${EnvUtil.TelegramPort}`,
      'Bootstrap',
    );
  });

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}

bootstrap().then();
