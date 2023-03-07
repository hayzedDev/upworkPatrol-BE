import { Injectable } from '@nestjs/common';
import { CreateNotificationDto } from './dto/create-notification.dto';
import * as TelegramBot from 'node-telegram-bot-api';
import { config } from 'dotenv';
config();
const bot = new TelegramBot(process.env.BOT_TOKEN, {});

@Injectable()
export class NotificationService {
  // constructor(private configService: ConfigService) {}

  /**
   *
   * @param dto
   * @returns null
   */
  async sendTelegramNotification(dto: CreateNotificationDto) {
    console.log(dto.telegramId);
    return await bot.sendMessage(dto.telegramId, 'Received your message');
  }
}
