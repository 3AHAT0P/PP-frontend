declare global {
  interface IGlobalGetters extends Hash<any> {
    getMajorVersion: (
      state: IGlobalState,
      getters: IGlobalGetters,
    ) => number;
  }
}

export default {
  getMajorVersion(state) {
    return Number(state.version.split('.')[0]);
  },
} as IGlobalGetters;
