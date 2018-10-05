import { getLyric } from 'api/song';
import { ERR_OK } from 'api/config';
import { Base64 } from 'js-base64';

export default class Song {
  constructor({id, mid, singer, name, album, duration, image, url}) {
    this.id = id;
    this.mid = mid;
    this.singer = singer;
    this.name = name;
    this.album = album;
    this.duration = duration;
    this.image = image;
    this.url = url;
  };
  getLyric() {
    if (this.lyric) {
      return Promise.resolve(this.lyric);
    }
    return new Promise((resolve) => {
      getLyric(this.id).then((res) => {
        if (res.retcode === ERR_OK) {
          this.lyric = Base64.decode(res.lyric);
          resolve(this.lyric);
        }
      });
    });
  }
}

export function createSong(musicData) {
  return new Song({
    id: musicData.songid,
    mid: musicData.songmid,
    singer: filterSinger(musicData.singer),
    name: musicData.songname,
    album: musicData.albumname,
    duration: musicData.interval,
    image: `https://y.gtimg.cn/music/photo_new/T002R300x300M000${musicData.albummid}.jpg?max_age=2592000`,
    url: `http://dl.stream.qqmusic.qq.com/C400${musicData.songmid}.m4a?guid=4772485760&vkey=2DA6E45C959381A15FFEDD899767CEA524532BAABC9B464BC886EDDB1A48FC62542AC0040457EF3D168CF50A1F0B39CDFC7E046BCFEC0145&uin=0&fromtag=38`
  });
}

export function filterSinger(singer) {
  let ret = [];
  if (!singer) {
    return '';
  }
  singer.forEach((s) => {
    ret.push(s.name);
  });
  return ret.join('/');
}
