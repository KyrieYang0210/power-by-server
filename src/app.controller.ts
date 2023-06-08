import { Controller, Post } from '@nestjs/common';
import { ToolsService } from './utils/tools.service';
import * as bcrypt from 'bcrypt';
import * as fs from 'fs';
@Controller()
export class AppController {
  constructor(private readonly toolsService: ToolsService) {}

  @Post('/captcha')
  async getCode() {
    return this.toolsService.captche();
  }
}
