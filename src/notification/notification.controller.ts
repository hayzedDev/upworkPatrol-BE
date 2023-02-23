import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { NotificationService } from './notification.service';
import { CreateNotificationDto } from './dto/create-notification.dto';
import { AuthenticationGuard } from 'src/common/guards/AuthenticationGuard';
import { Public } from 'src/common/decorators/publicDecorator';
import { ApiTags } from '@nestjs/swagger';

@UseGuards(AuthenticationGuard)
@ApiTags('Notification')
@Controller('notification')
export class NotificationController {
  constructor(private readonly notificationService: NotificationService) {}

  @Public()
  @Post()
  async sendTelegramNotification(@Body() dto: CreateNotificationDto) {
    return await this.notificationService.sendTelegramNotification(dto);
  }
}
