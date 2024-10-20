import { Module } from '@nestjs/common';
import { ReportsService } from './reports.service';
import { ReportsController } from './reports.controller';
import { PrinterModule } from 'src/printer/printer.module';

@Module({
  providers: [ReportsService],
  controllers: [ReportsController],
  imports: [PrinterModule],
})
export class ReportsModule {}
