// import { options } from './config';
// import axios from 'axios';
import jsonp from 'common/js/jsonp';
export function getLyric(id) {
  const url = `https://api.darlin.me/music/lyric/${id}`;
  return jsonp(url, {}, {});
};
