import { IsNotEmpty } from 'class-validator';

export class CreateBotDto {
  @IsNotEmpty({
    message: 'O nome do bot deve ser informado',
  })
  name: string;

  @IsNotEmpty({
    message: 'O nome do bot deve ser informado',
  })
  token: string;
}
