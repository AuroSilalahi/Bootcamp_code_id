import { Controller, Get } from '@nestjs/common';
import { CostumersService } from './customers.service';

@Controller('costumers')
export class CostumersController {
  constructor(private Services: CostumersService) {}
  @Get()
  public async getAll() {
    return await this.Services.findAll();
  }
}
