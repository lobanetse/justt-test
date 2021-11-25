import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, InsertResult, Repository, UpdateResult } from 'typeorm';

import { ConnectionNames } from '@db/config/typeorm.config';
import { Transaction } from '@db/justt/entities/transaction.entity';

@Injectable()
export class TransactionsService {
  constructor(
    @InjectRepository(Transaction, ConnectionNames.justt)
    private _transactionRepository: Repository<Transaction>,
  ) {}

  getTransactions(): Promise<Transaction[]> {
    return this._transactionRepository.find();
  }

  getTransactionByID(id: string): Promise<Transaction> {
    return this._transactionRepository.findOne(id);
  }

  updateTransaction(
    data: Partial<Transaction> & { id: string },
  ): Promise<UpdateResult> {
    return this._transactionRepository.update(data.id, data);
  }

  createTransaction(data: Partial<Transaction>): Promise<InsertResult> {
    return this._transactionRepository.insert(data);
  }

  deleteTransaction(id: string): Promise<DeleteResult> {
    return this._transactionRepository.delete(id);
  }
}
