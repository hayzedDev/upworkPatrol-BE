import { Injectable } from '@nestjs/common';
import { CreateNotificationDto } from './dto/create-notification.dto';
import * as TelegramBot from 'node-telegram-bot-api';
import { ConfigService } from '@nestjs/config/dist';
import { config } from 'dotenv';
config();
console.log(process.env.BOT_TOKEN);
const bot = new TelegramBot(process.env.BOT_TOKEN, {});

@Injectable()
export class NotificationService {
  constructor(private configService: ConfigService) {}

  async sendTelegramNotification(dto: CreateNotificationDto) {
    console.log(dto.telegramId);
    return await bot.sendMessage(dto.telegramId, 'Received your message');
  }
}
