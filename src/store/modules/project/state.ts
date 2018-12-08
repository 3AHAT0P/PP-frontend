declare global {
  interface IProjectData {
    id: string;
    name: string;
  }

  interface IProjectCollection extends Hash<IProjectData> { }

  interface IProjectModuleState {
    list: IProjectCollection;
  }
}

export default {
  list: {},
} as IProjectModuleState;
