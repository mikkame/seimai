import fs from 'fs';
import path from 'path';
import axios from 'axios';
import xlsx, {Sheet} from 'xlsx';

export const init = () => {
  if (fs.existsSync('./tmp')) {
    fs.rmdirSync('./tmp', { recursive: true });
  }
  fs.mkdirSync('./tmp');
};

export const clean = () => {
  if (fs.existsSync('./tmp')) {
    fs.rmdirSync('./tmp', { recursive: true });
  }
};

export const fileDownload = async (url: string, saveTo:string) :Promise<void> => {
  const response = await axios.get(url,{
    responseType:'arraybuffer',
  }).catch((error) => {
    console.error(`${url}のダウンロードに失敗しました。詳細なエラーは次の通りです`)
    console.error(error)
    process.exit(1)
  })
  fs.writeFileSync(path.join('./tmp', path.basename(saveTo)), response.data)
}

export const fileToXlsx = (filePath:string) : xlsx.WorkBook => {
  const rawData = fs.readFileSync(path.join('./tmp', path.basename(filePath)))
  return xlsx.read(rawData)
}

export const urlToXlsx = async (url: string):Promise<xlsx.WorkBook> => {
  const fileName = path.basename(url)
  await fileDownload(url, fileName)
  return fileToXlsx(fileName)

}

