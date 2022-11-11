import { IsNotEmpty } from 'class-validator';

export class StartBotDto {
  @IsNotEmpty({
    message: 'O id do bot deve ser informado',
  })
  id: string;
}
