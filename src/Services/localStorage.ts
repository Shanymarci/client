class LocalStorageModule<T> {
    private storageKey: string;
  
    constructor(storageKey: string) {
      this.storageKey = storageKey;
    }
  
    getData(): T | null {
      const data = localStorage.getItem(this.storageKey);
      return data ? JSON.parse(data) : null;
    }
  
    setData(data: T): void {
      const jsonData = JSON.stringify(data);
      localStorage.setItem(this.storageKey, jsonData);
    }
  
    updateData(updatedData: Partial<T>): void {
      const existingData = this.getData() || {};
      const mergedData = { ...existingData, ...updatedData };
      this.setData(mergedData as T);
    }
  
    removeData(): void {
      localStorage.removeItem(this.storageKey);
    }
  }

  export { LocalStorageModule };