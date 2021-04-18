import * as fs from 'fs';

export const init = () => {
  if (fs.existsSync('./tmp')) {
    fs.rmdirSync('./temp', { recursive: true });
  }
  fs.mkdirSync('./tmp');
};

export const clean = () => {
  if (fs.existsSync('./tmp')) {
    fs.rmdirSync('./tmp', { recursive: true });
  }
};
