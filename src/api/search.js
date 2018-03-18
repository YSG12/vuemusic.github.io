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
  const url = `https://c.y.qq.com/soso/fcgi-bin/search_for_qq_cp?w=${query}&p=${page}&perpage=${perpage}&n=${perpage}&catZhida=${zhida ? 1 : 0}&zhidaqu=1`;
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
