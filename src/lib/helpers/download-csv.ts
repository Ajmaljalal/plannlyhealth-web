
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