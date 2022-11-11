import { BaseModelEntity } from 'src/entity/base-model.entity';
import { Column, Entity } from 'typeorm';

@Entity({ name: 'bot' })
export class Bot extends BaseModelEntity {
  @Column()
  name!: string;

  @Column()
  token!: string;

  constructor() {
    super();
  }
}
