declare global {
  interface IActionContext {
    state: IGlobalState;
    commit: (name: string, data: any) => void;
    dispatch: (name: string, data: any) => void;
  }
}

export default { };
