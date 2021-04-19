import {init, clean, urlToXlsx} from './utils';
import {utils} from 'xlsx';
import {DistRow, RawRow, Skills} from './type'



(async () => {
  init();
  const distRoot = [];
  const target = await urlToXlsx('https://www.applic.or.jp/prom/chiiki_adviser/R3/R3dispatch_request_form_2.xlsx');
  const sheet = target.Sheets["アドバイザー"]
  //utils.sheet_to_json()
  const json = utils.sheet_to_json(sheet,{
    range:6
  }) as Array<RawRow>

  const distRows = json.map((row:RawRow) :Partial<DistRow> => {
    const dist : Partial<DistRow> = {};

    dist.ふりがな = row.ふりがな
    dist["No."] = parseInt(row["No."])
    dist.委嘱者 = row.委嘱者.split("\r\n")[0].trim()
    dist.所属役職 = row.所属役職.split("\r\n")

    Skills.map((key) => {
        switch (row[key]) {
          case '':
            dist[key] = {
              canAdvice:false,
              canLecture:false,
            }
            break;
          case '□':
            dist[key] = {
              canAdvice:true,
              canLecture:false,
            }
            break;
          case '◇':
            dist[key] = {
              canAdvice:false,
              canLecture:true,
            }
            break;
          case '★':
            dist[key] = {
              canAdvice:true,
              canLecture:true,
            }
            break;
        }
    })

    dist.pdf_url = row.__EMPTY_9
    dist.web_url = row.__EMPTY_10
    dist.コメント = row.__EMPTY_2

    return dist
  })

  console.log(distRows[0])


  //clean();
})();



