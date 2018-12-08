declare global {
  interface IProjectModuleGetters {
    getById: (
      state: IProjectModuleState,
      getters: IProjectModuleGetters,
      rootState: IGlobalState,
      rootGetters: IGlobalGetters,
    ) => (id: string) => IProjectData;
  }
}

export default {
  getById(state) {
    return (id: string) => state.list[id];
  },
} as IProjectModuleGetters;
