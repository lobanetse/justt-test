import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Tags } from '@root/swagger/constants';
import { PostTransactionDTO } from './dto/request.dto';
import { TransactionsService } from './services/transactions.service';

@ApiTags(Tags.transaction)
@Controller()
export class TransactionsController {
  constructor(private readonly _transactionService: TransactionsService) {}

  @Get('/')
  getTransactions() {
    return this._transactionService.getTransactions();
  }

  @Get('/:id')
  getTransactionByID(@Param('id') id: string) {
    return this._transactionService.getTransactionByID(id);
  }

  @Put('/:id')
  updateTransaction(@Param('id') id: string, @Body() data: PostTransactionDTO) {
    return this._transactionService.updateTransaction({ ...data, id });
  }

  @Post('/')
  postTransaction(@Body() data: any) {
    return this._transactionService.createTransaction(data);
  }

  @Delete('/:id')
  deleteTransaction(@Param('id') id: string) {
    return this._transactionService.deleteTransaction(id);
  }
}
