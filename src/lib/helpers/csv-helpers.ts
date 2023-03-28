
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
    const fileReader = new FileReader();

    fileReader.onload = function () {
      const rows: Array<CSVRow> = [];
      const fileContents = fileReader.result as string;
      const lines = fileContents.split('\n');
      const headers = lines[0].trim().split(',');

      for (let i = 1; i < lines.length; i++) {
        if (lines[i].trim() === '') continue; // skip empty lines

        const fields = lines[i].trim().split(',');

        if (fields.length !== headers.length) {
          reject(new Error(`Invalid CSV format on line ${i + 1}`));
        }

        const row: CSVRow = {};

        for (let j = 0; j < headers.length; j++) {
          row[headers[j]] = fields[j];
        }

        rows.push(row);
      }

      resolve(rows);
    };

    fileReader.onerror = function () {
      reject(fileReader.error);
    };

    fileReader.readAsText(file);
  });
}