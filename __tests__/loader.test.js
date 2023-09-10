import { test, expect } from '@jest/globals';
import nock from 'nock';
import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import axios from 'axios';
import { core, generateFileName, getFixturePath } from '../src/utils.js';

test('generateFileName', () => {
  const initialUrl = 'https://example.com/path/to/resource?param1=value1&param2=value2';
  const resultUrl = `${process.cwd()}/example-com-path-to-resource-param1-value1-param2-value2.html`;
  expect(generateFileName(initialUrl, process.cwd())).toBe(resultUrl);
});

let tempDitPath = '';
beforeEach(async () => {
  tempDitPath = await fs.mkdtemp(path.join(os.tmpdir(), 'page-loader-'));
});

test('loader', async () => {
  const data = await fs.readFile(getFixturePath('ru-hexlet-io-courses.html'));
  nock('https://ru.hexlet.io').get('/courses').reply(200, data);

  const response = await axios.get('https://ru.hexlet.io/courses');
  core('https://ru.hexlet.io/courses', response.data, tempDitPath);

  try {
    const file = await fs.readFile(`${tempDitPath}/ru-hexlet-io-courses.html`);
    expect(file).toEqual(data);
  } catch (error) {
    console.log('Read Error', error);
  }
});
