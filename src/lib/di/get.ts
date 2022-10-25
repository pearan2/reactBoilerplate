class Get {
  private static _repos = new Map<string, any>();

  static put<T>(name: string, obj: T) {
    this._repos.set(name, obj);
  }

  static find<T>(name: string): T {
    if (this._repos.has(name)) {
      return this._repos.get(name);
    } else {
      throw Error(`${name} is not put`);
    }
  }
}

export default Get;
