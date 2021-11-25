import {
  Entity,
  Column,
  ObjectIdColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

export enum GenderType {
  male = 'Male',
  female = 'Female',
}

@Entity({ name: 'customers' })
export class Customer {
  @ObjectIdColumn()
  _id: number;

  @CreateDateColumn({ type: 'datetime' })
  dateCreated: Date = new Date();

  @UpdateDateColumn({ type: 'datetime' })
  lastUpdated: Date = new Date();

  @Column()
  customer_id: string;

  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Column()
  email: string;

  @Column()
  gender: string;

  @Column()
  country: string;

  @Column()
  city: string;

  @Column()
  street: string;

  @Column()
  phone: string;

  @Column()
  total_price: string;

  // TODO: Add some currency enum or list
  @Column()
  currency: string;

  @Column()
  cerdit_card_type: string;

  @Column()
  cerdit_card_number: string;
}
