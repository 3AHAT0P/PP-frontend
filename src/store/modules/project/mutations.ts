import Vue from 'vue';

import { uuid } from '@/utils';

declare global {
  interface IProjectCreateMutationData {
    id?: string;
    name: string;
  }
  interface IProjectDeleteMutationData {
    id: string;
  }
  interface IProjectUpdateNameMutationData {
    id: string;
    name: string;
  }
}

export default {
  create(state: IProjectModuleState, { id = uuid(), name }: IProjectCreateMutationData): IProjectData {

    const project: IProjectData = {
      id,
      name,
    };

    Vue.set(state.list, id, project);

    return project;
  },
  delete(state: IProjectModuleState, { id }: IProjectDeleteMutationData): void {
    Vue.delete(state.list, id);
  },
  updateName(
    state: IProjectModuleState,
    {
      id,
      name,
    }: IProjectUpdateNameMutationData,
  ): void {
    const project: IProjectData = state.list[id];
    Vue.set(project, 'name', name);
  },
};
