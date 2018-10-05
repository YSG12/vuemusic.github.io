import jsonp from 'common/js/jsonp';
import {commonParams, options} from './config';

export function getHotKey() {
  const url = 'https://c.y.qq.com/splcloud/fcgi-bin/gethotkey.fcg';
  const data = Object.assign({}, commonParams, {
    platform: 'h5',
    neddnewCode: 1
  });
  return jsonp(url, data, options);
}

export function search(query, page, zhida, perpage) {
  const url = `http://ustbhuangyi.com/music/api/search?format=json&w=${query}&p=${page}&perpage=${perpage}&n=${perpage}&catZhida=${zhida ? 1 : 0}&zhidaqu=1`;
  // const url = `http://ustbhuangyi.com/music/api/search?g_tk=1928093487&inCharset=utf-8&outCharset=utf-8&notice=0&format=json&w=%E6%97%A0%E8%8D%AF%E5%8F%AF%E6%95%91&p=1&perpage=20&n=20&catZhida=1&zhidaqu=1&t=0&flag=1&ie=utf-8&sem=1&aggr=0&remoteplace=txt.mqq.all&uin=0&needNewCode=1&platform=h5`;
  const data = Object.assign({}, commonParams, {
    t: 0,
    flag: 1,
    ie: 'utf-8',
    sem: 1,
    aggr: 0,
    remoteplace: 'txt.mss.all',
    uid: 0,
    needNewCode: 1,
    platform: 'h5'
  });
  return jsonp(url, data, options);
}
