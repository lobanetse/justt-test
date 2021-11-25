import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { TransactionsController } from './transactions.controller';
import { TransactionsService } from './services/transactions.service';
import { Transaction } from '@db/justt/entities/transaction.entity';
import { ConnectionNames } from '@db/config/typeorm.config';

@Module({
  imports: [TypeOrmModule.forFeature([Transaction], ConnectionNames.justt)],
  providers: [TransactionsService],
  controllers: [TransactionsController],
})
export class TransactionsModule {}
