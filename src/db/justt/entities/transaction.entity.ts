import {
  Entity,
  Column,
  ObjectIdColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'transaction' })
export class Transaction {
  @ObjectIdColumn()
  _id: number;

  @CreateDateColumn({ type: 'datetime' })
  dateCreated: Date = new Date();

  @UpdateDateColumn({ type: 'datetime' })
  lastUpdated: Date = new Date();

  @Column()
  customer_id: string;

  @Column()
  value: number;

  @Column()
  date: Date;

  // TODO: Enum
  @Column()
  currency: string;
}
