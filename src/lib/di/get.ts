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

  static tryFind<T>(name: string): T | null {
    if (this._repos.has(name)) {
      return this._repos.get(name);
    } else {
      return null;
    }
  }

  static delete(name: string) {
    if (this._repos.has(name)) {
      this._repos.delete(name);
    }
  }
}

export default Get;
