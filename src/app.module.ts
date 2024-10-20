import { Module } from '@nestjs/common';
import { ReportsModule } from './reports/reports.module';
import { PrinterModule } from './printer/printer.module';

@Module({
  imports: [ReportsModule, PrinterModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
