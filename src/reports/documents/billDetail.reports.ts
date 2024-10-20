import { TDocumentDefinitions } from 'pdfmake/interfaces';

export const billDetailReport = (): TDocumentDefinitions => {
  return {
    pageSize: 'A4',
    pageOrientation: 'landscape',
    pageMargins: [40, 40, 40, 40],

    content: [
      {
        stack: [
          {
            text: [
              {
                text: 'Fecha: ',
                color: '#99b4d1',
                bold: true,
                fontSize: 10,
              },
              {
                text: new Date().toLocaleDateString(),
                bold: true,
                fontSize: 10,
              },
            ],
          },
          {
            text: [
              {
                text: 'Hora: ',
                color: '#99b4d1',
                bold: true,
                fontSize: 10,
              },
              {
                text: new Date().toLocaleTimeString([], {
                  hour: '2-digit',
                  minute: '2-digit',
                  second: '2-digit',
                  hour12: false,
                }),
                bold: true,
                fontSize: 10,
              },
            ],
          },
          {
            text: [
              {
                text: 'Página: ',
                color: '#99b4d1',
                bold: true,
                fontSize: 10,
              },
              { text: '1', bold: true, alignment: 'justify', fontSize: 10 },
            ],
          },
        ],
        alignment: 'right',
      },
      {
        columns: [
          {
            text: 'REPORTE DE CONTROL DE ACTUALIZACIONES - DETALLE\nCARTERA DE PROCEDIMIENTOS DE SALUD (CPT)',
            alignment: 'center',
            bold: true,
          },
        ],
        alignment: 'center',
      },
      {
        text: ' Del: 01/07/2024 al: 31/07/2024',
        alignment: 'center',
        fontSize: 10,
      },
      // Tabla con datos jerárquicos
      {
        table: {
          headerRows: 1,
          body: [
            [
              {
                text: 'Grupo',
                color: '#99b4d1',
                bold: true,
                alignment: 'center',
              },
              {
                text: 'Sección',
                color: '#99b4d1',
                bold: true,
                alignment: 'center',
              },
              {
                text: 'Sub Sección',
                color: '#99b4d1',
                bold: true,
                alignment: 'center',
              },
              {
                text: 'Nivel',
                color: '#99b4d1',
                bold: true,
                alignment: 'center',
              },
              {
                text: 'Cant. Registros',
                color: '#99b4d1',
                bold: true,
                alignment: 'center',
              },
            ],
            [
              {
                text: `Usuario: `,
                alignment: 'left',
                margin: [0, 20, 0, 10], // Margen superior e inferior
                fontSize: 10,
                color: '#99b4d1',
                bold: true,
              },
              {
                text: '75811613 LEYTON RISCO MARYURI',
                alignment: 'left',
                margin: [0, 20, 0, 10],
                fontSize: 10,
                color: '#000',
                bold: true,
              },
              {},
              {},
              {},
            ],
            // Datos estáticos en forma de árbol
            [
              {
                text: '2 PROCEDIMIENTOS DE APOYO AL DIAGNOSTICO',
                colSpan: 5,
                alignment: 'left',
                color: '#000',
                fontSize: 10,
              },
            ],
            [
              {
                text: '02 PATOLOGIA CLINICA',
                colSpan: 5,
                margin: [20, 0],
                color: '#000',
                fontSize: 10,
              },
            ],
            [
              {
                text: '04 MICROBIOLOGIA',
                colSpan: 5,
                margin: [40, 0],
                color: '#000',
                fontSize: 10,
              },
            ],
            [
              {
                text: '00 MICROBIOLOGIA',
                colSpan: 5,
                margin: [60, 0],
                color: '#000',
                fontSize: 10,
              },
              {
                text: '10 registros',
                colSpan: 5,
                margin: [60, 0],
                color: '#000',
                fontSize: 10,
              },
            ],
            [
              {
                text: '87046.01 CULTIVO BACTERIAL DE HECES (COPROCULTIVO), AEROBICO DE SALMONELLA, SHIGUELLA Y PATOGENOS ADICIONALES CON MIC',
                colSpan: 5,
                margin: [80, 0],
                color: '#000',
                fontSize: 10,
              },
              {
                text: '3 registros',
                colSpan: 5,
                margin: [80, 0],
                color: '#99b4d1',
              },
            ],
            [
              {
                text: `Usuario: `,
                alignment: 'left',
                margin: [0, 20, 0, 10], // Margen superior e inferior
                fontSize: 10,
                color: '#99b4d1',
                bold: true,
              },
              {
                text: '75811613 LEYTON RISCO MARYURI',
                alignment: 'left',
                margin: [0, 20, 0, 10],
                fontSize: 10,
                color: '#000',
                bold: true,
              },
              {},
              {},
              {},
            ],
            // Datos estáticos en forma de árbol
            [
              {
                text: '2 PROCEDIMIENTOS DE APOYO AL DIAGNOSTICO',
                colSpan: 5,
                alignment: 'left',
                color: '#000',
                fontSize: 10,
              },
            ],
            [
              {
                text: '02 PATOLOGIA CLINICA',
                colSpan: 5,
                margin: [20, 0],
                color: '#000',
                fontSize: 10,
              },
            ],
            [
              {
                text: '04 MICROBIOLOGIA',
                colSpan: 5,
                margin: [40, 0],
                color: '#000',
                fontSize: 10,
              },
            ],
            [
              {
                text: '00 MICROBIOLOGIA',
                colSpan: 5,
                margin: [60, 0],
                color: '#000',
                fontSize: 10,
              },
              {
                text: '10 registros',
                colSpan: 5,
                margin: [60, 0],
                color: '#000',
                fontSize: 10,
              },
            ],
            [
              {
                text: '87046.01 CULTIVO BACTERIAL DE HECES (COPROCULTIVO), AEROBICO DE SALMONELLA, SHIGUELLA Y PATOGENOS ADICIONALES CON MIC',
                colSpan: 5,
                margin: [80, 0],
                color: '#000',
                fontSize: 10,
              },
              {
                text: '3 registros',
                colSpan: 5,
                margin: [80, 0],
                color: '#99b4d1',
              },
            ],
          ],
        },
        layout: {
          hLineWidth() {
            return 0;
          },
          vLineWidth() {
            return 0;
          },
        },
      },
    ],
  };
};
