import { IsNotEmpty } from 'class-validator';

export class UpdateBotDto {
  @IsNotEmpty({
    message: 'O id do bot deve ser informado',
  })
  id: string;

  @IsNotEmpty({
    message: 'O nome do bot deve ser informado',
  })
  name: string;

  @IsNotEmpty({
    message: 'O token do bot deve ser informado',
  })
  token: string;
}
