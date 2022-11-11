import { Column, ObjectIdColumn } from 'typeorm';
import { Type } from 'class-transformer';
import { ObjectId } from 'mongodb';

export class BaseModelEntity {
  @ObjectIdColumn()
  public id: ObjectId;

  @Column({ type: 'date' })
  @Type(() => Date)
  public createdAt: Date;

  @Column({ type: 'date' })
  @Type(() => Date)
  public updatedAt: Date;

  constructor() {
    this.createdAt = new Date();
  }
}
