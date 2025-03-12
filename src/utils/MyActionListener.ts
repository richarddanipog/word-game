type TListener = (data: string) => void;

class MyActionListener {
  private actions: Map<string, TListener[]>;

  constructor() {
    this.actions = new Map<string, TListener[]>();
  }

  registerListener(action: string, listener: TListener): void {
    const eventNotExist = !this.actions.has(action);
    if (eventNotExist) {
      this.actions.set(action, []);
    }

    const listeners = this.actions.get(action);
    if (listeners) {
      listeners.push(listener);
    }
  }

  removeListener(action: string): void {
    this.actions.delete(action);
  }

  emit(action: string, data?: string): void {
    const eventNotExist = !this.actions.has(action);
    if (eventNotExist) {
      throw new Error(`Can't emit an event. Event "${action}" doesn't exist.`);
    }

    const listeners = this.actions.get(action);
    if (listeners) {
      listeners.forEach((listener) => listener(data as string));
    }
  }
}

export const actionListener = new MyActionListener();
export default MyActionListener;
