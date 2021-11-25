import { GenderType } from '@db/justt/entities/customer.entity';
import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsOptional, MaxLength, MinLength } from 'class-validator';

export class PostCustomerDTO {
  @ApiProperty()
  @MinLength(3)
  @MaxLength(64)
  customer_id: string;

  @ApiProperty()
  @MinLength(3)
  @MaxLength(256)
  @IsEmail()
  email: string;

  @ApiProperty()
  @MinLength(3)
  @MaxLength(256)
  first_name: string;

  @ApiProperty()
  @MinLength(3)
  @MaxLength(256)
  last_name: string;

  @ApiProperty()
  @IsOptional()
  gender: GenderType;

  @ApiProperty()
  @IsOptional()
  country: string;

  @ApiProperty()
  @IsOptional()
  city: string;

  @ApiProperty()
  @IsOptional()
  street: string;

  @ApiProperty()
  @IsOptional()
  phone: string;

  @ApiProperty()
  @IsOptional()
  currency: string;

  @ApiProperty()
  @IsOptional()
  cerdit_card_type: string;

  @ApiProperty()
  @IsOptional()
  cerdit_card_number: string;
}
