import { Controller, Get, Res } from '@nestjs/common';
import { ReportsService } from './reports.service';
import { Response } from 'express';
// import { ApiTags } from '@nestjs/swagger';

// @ApiTags('Reportes')
@Controller('reports')
export class ReportsController {
  constructor(private readonly resportsService: ReportsService) {}

  @Get('bill')
  async getBillReport(@Res() response: Response) {
    const pdfDoc = await this.resportsService.getBillReport();
    response.setHeader('Content-Type', 'application/pdf');
    pdfDoc.info.Title = 'Test';
    pdfDoc.pipe(response);
    pdfDoc.end();
  }
  @Get('billDetail')
  async getBillDetailReport(@Res() response: Response) {
    const pdfDoc = await this.resportsService.getBillDetailReport();
    response.setHeader('Content-Type', 'application/pdf');
    pdfDoc.info.Title = 'Test';
    pdfDoc.pipe(response);
    pdfDoc.end();
  }
}
