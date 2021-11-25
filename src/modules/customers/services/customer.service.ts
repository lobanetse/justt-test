import { ConnectionNames } from '@db/config/typeorm.config';
import { Customer } from '@db/justt/entities/customer.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, InsertResult, Repository, UpdateResult } from 'typeorm';
import { PostCustomerDTO } from '../dto/request.dto';

@Injectable()
export class CustomerService {
  constructor(
    @InjectRepository(Customer, ConnectionNames.justt)
    private _customerRepository: Repository<Customer>,
  ) {}

  getCustomers(): Promise<Customer[]> {
    return this._customerRepository.find();
  }

  getCustomersByID(customer_id: string): Promise<Customer> {
    return this._customerRepository.findOne({
      where: {
        customer_id,
      },
    });
  }

  updateCustomer(
    data: Partial<PostCustomerDTO> & { customer_id: string },
  ): Promise<UpdateResult> {
    return this._customerRepository.update(
      {
        customer_id: data.customer_id,
      },
      data,
    );
  }

  postCustomer(data: Partial<PostCustomerDTO>): Promise<InsertResult> {
    return this._customerRepository.insert(data);
  }

  deleteCustomer(customer_id: string): Promise<DeleteResult> {
    return this._customerRepository.delete({
      customer_id,
    });
  }
}
