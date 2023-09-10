#!/usr/bin/env node

import { Command } from 'commander';
import loader from '../src/loader.js';

const program = new Command();

program
  .version('1.0.0')
  .description('Pages loader utility')
  .arguments('<url>')
  .option('-o, --output [dir]', 'output dir', process.cwd())
  .action((url) => {
    loader(url);
  });
program.parse(process.argv);
