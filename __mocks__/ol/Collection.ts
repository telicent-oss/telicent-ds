export default class MockCollection<T = any> {
  private items: T[] = [];

  constructor(initialItems: T[] = []) {
    this.items = [...initialItems];
  }

  // Get all items as array
  getArray(): T[] {
    return [...this.items];
  }

  // Add an item
  push(item: T): void {
    this.items.push(item);
  }

  // Remove an item
  remove(item: T): boolean {
    const index = this.items.indexOf(item);
    if (index === -1) return false;
    this.items.splice(index, 1);
    return true;
  }

  // Clear all items
  clear(): void {
    this.items = [];
  }

  // Length property
  get length(): number {
    return this.items.length;
  }

  // Event stubs (OL Collection has 'add', 'remove', 'change' events)
  on(_event: string, _listener: (...args: any[]) => void) {
    // no-op
  }
  once(_event: string, _listener: (...args: any[]) => void) {
    // no-op
  }
  un(_event: string, _listener?: (...args: any[]) => void) {
    // no-op
  }
}
