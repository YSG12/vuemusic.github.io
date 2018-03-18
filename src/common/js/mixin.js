import { mapGetters } from 'vuex';
export const playlistMixin = {
  computed: {
    ...mapGetters([
      'playlist'
    ])
  },
  mouted() {
    this.handlePlaylist(this.playlist);
  },
  activated() {
    this.handlePlaylist(this.playlist);
  },
  watch: {
    playlist(newVal) {
      this.handlePlaylist(newVal);
    }
  },
  method: {
    handlePlaylist() {
      throw new Error('compnent must implement handlePlaylist method');
    }
  }
};
