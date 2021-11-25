import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, MaxLength, MinLength } from 'class-validator';

export class PostTransactionDTO {
  @ApiProperty()
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(256)
  currency: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  value: number;

  @ApiProperty()
  @IsNotEmpty()
  customer_id: string;

  date: Date = new Date();
}
