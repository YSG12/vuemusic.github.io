<template>
  <transition name="slide">
    <music-list :title="title" :bg-image="bgImage"></music-list>
  </transition>
</template>

<script type="text/ecmascript-6">
import MusicList from 'components/music-list/music-list';
import { mapGetters } from 'vuex';
// import { getSongList } from 'api/recommend';
// import { ERR_OK } from 'api/config';
import { createSong } from 'common/js/song';

export default {
  data() {
    return {
      songs: []
    };
  },
  computed: {
    title() {
      return this.disc.songListDesc;
    },
    bgImage() {
      return this.disc.picUrl;
    },
    ...mapGetters([
      'disc'
    ])
  },
  methods: {
    _getSongList() {
      // getSongList(this.disc.id).then((res) => {
      //   if (res.code === ERR_OK) {
      //     this.songs = this._normalizeSongs(res.cdlist[0].songlist);
      //     console.log(this.songs);
      //   }
      // });
    },
    _normalizeSongs(list) {
      let ret = [];
      list.forEach((item) => {
        const musicData = item.data;
        if (musicData.songid && musicData.albumid) {
          ret.push(createSong(musicData));
        }
      });
      return ret;
    }
  },
  created() {
    this._getSongList();
  },
  components: {
    MusicList
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .slide-enter-active, .slide-leave-active
    transition: all 0.3s

  .slide-enter, .slide-leave-to
    transform: translate3d(100%, 0, 0)
</style>
