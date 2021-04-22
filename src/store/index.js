import {
  createStore
} from 'vuex'

export default createStore({
  state: {
    activeName: "upload",
    isUpload: true,
  },
  mutations: {
    uploadTap(state) {
      state.activeName = "upload";
    },
    resultTap(state) {
      state.activeName = "result";
    },
    uploadVideo(state) {
      state.isUpload = true;
    }
  },
  actions: {},
  modules: {}
})