import { ConnectionNames } from '@db/config/typeorm.config';
import { Customer } from '@db/justt/entities/customer.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomerController } from './customer.controller';
import { CustomerService } from './services/customer.service';

@Module({
  imports: [TypeOrmModule.forFeature([Customer], ConnectionNames.justt)],
  providers: [CustomerService],
  controllers: [CustomerController],
})
export class CustomerModule {}
