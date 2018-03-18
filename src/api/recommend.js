import jsonp from 'common/js/jsonp';
import { commonParams, options } from './config';

export function getRecommend(url) {
  const data = Object.assign({}, commonParams, {
    uin: 0,
    needNewCode: 1
  });
  return jsonp(url, data, options);
}
export function getSongList(disstid) {
  const url = `http://ustbhuangyi.com/music/api/getCdInfo?g_tk=1928093487&inCharset=utf-8&outCharset=utf-8&notice=0&format=jsonp&disstid=${disstid}&type=1&json=1&utf8=1&onlysong=0&platform=yqq&hostUin=0&needNewCode=0`;
  console.log(jsonp(url, {}, options));
  // const data = Object.assign({}, {
  //   g_tk: 1928093487,
  //   notice: 0,
  //   format: 'json'
  // }, {
  //   disstid,
  //   type: 1,
  //   json: 1,
  //   utf8: 1,
  //   onlysong: 0,
  //   platform: 'h5',
  //   hostUin: 0,
  //   needNewCode: 0
  // });
  // return jsonp(url, data, options);
}
