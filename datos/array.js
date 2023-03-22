class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }
  get(index) {
    return this.data[index];
  }
  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.data;
  }
  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }
  delete(index) {
    const deleteItem = this.data[index];
    this.shiftIndex(index);
    return deleteItem;
  }
  shiftIndex(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i - 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }
  insert(item) {
    this.unShift(item);
    return item;
  }
  unShift(item) {
    for (let i = this.length; i > 0; i--) {
      this.data[i] = this.data[i - 1];
    }
    this.data[0] = item;
    this.length++;
  }
  shift() {
    const shiftItem = this.data[0];
    for(let i = 0; i < this.length - 1; i++) {
        this.data[i] = this.data[i+1]
    }
    delete this.data[this.length - 1];
    this.length--;
    return shiftItem;
  }
}

const myArray = new MyArray();

console.log(myArray.push("Danilo"));
console.log(myArray.push("Danila"));
console.log(myArray);
console.log(myArray.insert("Andrés"));
console.log(myArray);
console.log(myArray.insert("Felipo"));
console.log(myArray);
console.log(myArray.shift())
console.log(myArray);
console.log(myArray.shift())
console.log(myArray.shift())
console.log(myArray);

