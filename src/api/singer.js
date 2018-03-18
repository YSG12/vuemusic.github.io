import jsonp from 'common/js/jsonp';
import { options } from './config';
export function getSingerList() {
  const url = 'https://c.y.qq.com/v8/fcg-bin/v8.fcg?g_tk=1928093487&inCharset=utf-8&outCharset=utf-8&notice=0&format=jsonp&channel=singer&page=list&key=all_all_all&pagesize=100&pagenum=1&hostUin=0&needNewCode=0&platform=yqq';
  return jsonp(url, {}, options);
}
export function getSingerDetail(singerId) {
  const url = `https://c.y.qq.com/v8/fcg-bin/fcg_v8_singer_track_cp.fcg?singerid=${singerId}&g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5page&needNewCode=1&order=listen&from=h5&num=50&begin=0&_=1517537822852`;
  return jsonp(url, {}, options);
}
