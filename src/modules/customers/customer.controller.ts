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
import { PostCustomerDTO } from './dto/request.dto';
import { CustomerService } from './services/customer.service';

@ApiTags(Tags.customer)
@Controller()
export class CustomerController {
  constructor(private readonly _customerService: CustomerService) {}

  @Get('/')
  getCustomers() {
    return this._customerService.getCustomers();
  }

  @Get('/:id')
  getCustomersByID(@Param('id') id: string) {
    return this._customerService.getCustomersByID(id);
  }

  @Put('/:id')
  updateCustomer(
    @Param('id') customer_id: string,
    @Body() data: Partial<PostCustomerDTO>,
  ) {
    return this._customerService.updateCustomer({ ...data, customer_id });
  }

  @Post('/')
  postCustomer(@Body() data: PostCustomerDTO) {
    return this._customerService.postCustomer(data);
  }

  @Delete('/:id')
  deleteCustomer(@Param('id') customer_id: string ) {
    return this._customerService.deleteCustomer(customer_id);
  }
}
