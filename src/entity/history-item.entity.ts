import { Column, ObjectIdColumn } from 'typeorm';
import { Type } from 'class-transformer';
import { ObjectID } from 'mongodb';

export class HistoryItem {
  @ObjectIdColumn()
  public id: ObjectID;

  @Column({ type: 'date' })
  @Type(() => Date)
  public date: Date;

  constructor() {
    this.date = new Date();
  }
}
