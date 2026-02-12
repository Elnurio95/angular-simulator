class Collection<T> {
  arr: T[] = [];

  constructor(arr: T[]) {
    this.arr = arr;
  }

  getAllItems(): T[] {
    return [...this.arr];
  }

  getItem(index: number): T | undefined {
    return this.arr[index];
  }

  cleanCollection(): void {
    this.arr = [];
  }

  removeItem(index: number): T[] {
    return this.arr.splice(index, 1);
  }

  changeItem(index: number): T {
    const newItem = this.arr[index];
    return newItem;
  }
}

const numArr = new Collection<number>([1, 2, 3]);
const strArr = new Collection<string>(['cat', 'dog', 'bird']);

console.log(numArr.getItem(2));
console.log(strArr.removeItem(2));
