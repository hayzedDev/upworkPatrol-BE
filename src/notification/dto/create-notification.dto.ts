import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export class CreateNotificationDto {
  @IsNumber()
  @ApiProperty({
    description: 'The telegram id of the receiver',
    example: 12378497,
  })
  telegramId: number;
}
