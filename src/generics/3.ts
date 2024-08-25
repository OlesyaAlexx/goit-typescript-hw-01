function merge<T, U>(objA: T, objB: U): T & U {
  return Object.assign({}, objA, objB);
}
const obj1 = { name: "Max", age: 30 };
const obj2 = { color: "blue", weight: 70 };

const mergedObj = merge(obj1, obj2);
console.log(mergedObj);
