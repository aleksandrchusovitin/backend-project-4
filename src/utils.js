import { writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const generateFileName = (initialUrl, folder) => {
  const url = new URL(initialUrl);
  const urlWithoutExtraSymbols = `${url.hostname}${url.pathname}${url.search}`.replaceAll(/[^a-zA-Z0-9]/g, '-');
  return `${folder}/${urlWithoutExtraSymbols}.html`;
};

export const saveFile = (pathName, data) => {
  writeFile(pathName, data);
};

export const core = (url, data, folder = process.cwd()) => {
  const pathName = generateFileName(url, folder);
  saveFile(pathName, data);
  console.log(pathName);
};

export const getFixturePath = (filename) => path.resolve(__dirname, '../__fixtures__/', filename);
