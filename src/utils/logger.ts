export class Logger {
  private console: any;

  constructor(configs = {}) {
    this.console = (console as any).context();
  }

  public info(...args) {
    this.console.log(...args);
  }
  public warn(...args) {
    this.console.warn(...args);
  }
  public error(...args) {
    this.console.error(...args);
  }
}

export default new Logger();
