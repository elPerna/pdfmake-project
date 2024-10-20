import { TDocumentDefinitions } from 'pdfmake/interfaces';

// Función para retornar el documento
export const billReport = (): TDocumentDefinitions => {
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
            text: 'REPORTE DE CONTROL DE ACTUALIZACIONES - RESUMEN\nCARTERA DE PROCEDIMIENTOS DE SALUD (CPT)',
            alignment: 'center',
            bold: true,
          },
        ],
        alignment: 'justify',
      },
      {
        text: ' Del: 01/07/2024 al: 31/07/2024',
        alignment: 'center',
        fontSize: 10,
      },
      {
        table: {
          widths: ['*', '*', '*', '*', '*'],
          headerRows: 1,

          body: [
            [
              { text: 'Grupo', alignment: 'center', color: '#99b4d1' },
              { text: 'Sección', alignment: 'center', color: '#99b4d1' },
              { text: 'Sub Sección', alignment: 'center', color: '#99b4d1' },
              { text: 'Nivel', alignment: 'center', color: '#99b4d1' },
              { text: 'Cant. Registros', alignment: 'right', color: '#99b4d1' },
            ],
            [
              {
                text: 'REGISTROS MODIFICADOS',
                colSpan: 5,
                alignment: 'left',
                color: '#99b4d1',
                decoration: 'underline',
              },
            ],
            [
              {
                text: 'Usuario : ',
                alignment: 'left',
                color: '#99b4d1',
                fontSize: 10,
              },
              {
                text: '75811613 LEYTON RISCO MARYURI',
                alignment: 'left',
                color: '#000',
                fontSize: 10,
              },
              {},
              {},
              {},
            ],
            [
              {
                text: 'PROCEDIMIENTOS DE APOYO AL DIAGNOSTICO',
                alignment: 'left',
                fontSize: 10,
              },
              { text: 'PATOLOGIA CLINICA', alignment: 'center', fontSize: 10 },
              { text: 'MICROBIOLOGIA', alignment: 'center', fontSize: 10 },
              { text: 'MICROBIOLOGIA', alignment: 'center', fontSize: 10 },
              { text: '1', alignment: 'right', fontSize: 10 },
            ],
            [
              {
                text: 'Usuario : ',
                alignment: 'left',
                color: '#99b4d1',
                fontSize: 10,
              },
              {
                text: 'ADMIN ADMIN ADMIN ADMIN',
                alignment: 'left',
                color: '#000',
                fontSize: 10,
              },
              {},
              {},
              {},
            ],
            [
              {
                text: 'PROCEDIMIENTOS DE APOYO AL DIAGNOSTICO',
                alignment: 'left',
                fontSize: 10,
              },
              { text: 'IMAGENOLOGIA', alignment: 'center', fontSize: 10 },
              {
                text: 'RADIOLOGIA DIAGNOSTICA',
                alignment: 'center',
                fontSize: 10,
              },
              { text: 'CABEZA Y CUELLO', alignment: 'center', fontSize: 10 },
              { text: '1', alignment: 'right', fontSize: 10 },
            ],
            [
              {
                text: 'PROCEDIMIENTOS DE APOYO AL DIAGNOSTICO',
                alignment: 'left',
                fontSize: 10,
              },
              { text: 'IMAGENOLOGIA', alignment: 'center', fontSize: 10 },
              {
                text: 'ULTRASONIDO DIAGNOSTICO',
                alignment: 'center',
                fontSize: 10,
              },
              {
                text: 'PELVIS',
                alignment: 'center',
                fontSize: 10,
              },
              { text: '1', alignment: 'right', fontSize: 10 },
            ],
            [
              {
                text: 'PROCEDIMIENTOS DE APOYO AL DIAGNOSTICO',
                alignment: 'left',
                fontSize: 10,
              },
              { text: 'IMAGENOLOGIA', alignment: 'center', fontSize: 10 },
              {
                text: 'ULTRASONIDO DIAGNOSTICO',
                alignment: 'center',
                fontSize: 10,
              },
              {
                text: 'PROCEDIMIENTOS DE GUIA CON ULTRASONIDO',
                alignment: 'center',
                fontSize: 10,
              },
              { text: '1', alignment: 'right', fontSize: 10 },
            ],
            [
              {
                text: 'PROCEDIMIENTOS DE APOYO AL DIAGNOSTICO',
                alignment: 'left',
                fontSize: 10,
              },
              { text: ' PATOLOGIA CLINICA', alignment: 'center', fontSize: 10 },
              { text: 'BIOQUIMICA', alignment: 'center', fontSize: 10 },
              { text: 'BIOQUIMICA', alignment: 'center', fontSize: 10 },
              { text: '1', alignment: 'right', fontSize: 10 },
            ],
            // Agregar más filas según sea necesario
          ],
        },
        layout: {
          hLineWidth() {
            return 0; // Sin líneas horizontales
          },
          vLineWidth() {
            return 0; // Sin líneas verticales
          },
        }, // Diseño personalizado para eliminar bordes
        margin: [0, 20, 0, 0],
      },
    ],
  };
};
