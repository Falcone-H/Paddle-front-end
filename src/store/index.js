import {
  createStore
} from 'vuex'

export default createStore({
  state: {
    activeName: "upload",
    toPlay: true,
    isUpload: false,
    videoSrc: ""
  },
  mutations: {
    uploadVideo(state) {
      state.isUpload = true;
    },
    changeVideoSrc(state, src) {
      state.videoSrc = src;
    },
    changeActiveName(state, name) {
      state.activeName = name;
    }
  },
  actions: {},
  modules: {}
})