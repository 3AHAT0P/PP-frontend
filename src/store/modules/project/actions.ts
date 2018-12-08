declare global {
  interface IProjectActionContext {
    state: IProjectModuleState;
    rootState: IGlobalState;
    // getters: IProjectModuleGetters;
    // rootGetters: IMainGetters;
    commit: (name: string, data: any) => void;
    dispatch: (name: string, data: any) => void;
  }

  interface IProjectSaveActionData {
    id: string;
  }
}

export default {
  async save(
    { state, commit }: IProjectActionContext,
    { id }: IProjectSaveActionData,
  ) {
    const project: IProjectData = state.list[id];

    /*
    Здесь мы делаем запрос к серверу, на сохранение данных

    const response = await fetch();
    const data = response.json();

    commit('update', data);

    */

    return project;
  },
};
