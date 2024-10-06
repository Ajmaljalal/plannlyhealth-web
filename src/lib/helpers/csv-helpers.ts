const Papa = require('papaparse');

export const convertToCsv = (objects: any) => {
  const header = Object.keys(objects[0]).join(',');
  const rows = objects.map((obj: any) => Object.values(obj).join(','));
  return [header, ...rows].join('\n');
}

export const downloadCsv = (objects: any, filename: string) => {
  filename = `${filename}.csv`
  const csv = convertToCsv(objects);
  const blob = new Blob([csv], { type: 'text/csv' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  link.click();
  URL.revokeObjectURL(url);
  link.remove();
}

interface CSVRow {
  [key: string]: string;
}

export const csvToObject = (file: File): Promise<Array<CSVRow>> => {
  return new Promise((resolve, reject) => {
    Papa.parse(file, {
      complete: (result: any) => {
        if (result.errors.length) {
          reject(new Error(`CSV parsing error: ${result.errors[0].message}`));
          return;
        }

        const rows: Array<CSVRow> = result.data.map((rowArray: string[]) => {
          const row: CSVRow = {};
          const headers = result.data[0] as string[];
          for (let j = 0; j < headers.length; j++) {
            row[headers[j].toLowerCase()] = rowArray[j];
          }
          return row;
        });

        // Remove the header row
        rows.shift();

        resolve(rows);
      },
      error: (error: any) => {
        reject(error);
      },
      skipEmptyLines: true
    });
  });
}