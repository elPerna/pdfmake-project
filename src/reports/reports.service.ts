import { Injectable } from '@nestjs/common';
import { PrinterService } from '../printer/printer.service';
import { billReport } from './documents/bill.report';
import { billDetailReport } from './documents/billDetail.reports';

@Injectable()
export class ReportsService {
  constructor(private readonly printer: PrinterService) {}
  async getBillReport() {
    const docDefinition = billReport();

    return this.printer.createPdf(docDefinition);
  }
  async getBillDetailReport() {
    const docDefinition = billDetailReport();

    return this.printer.createPdf(docDefinition);
  }
}
