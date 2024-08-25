let mixedType: string | number;

mixedType = "string";
console.log(mixedType);

mixedType = 20;
console.log(mixedType);

type EnableOrDisable = "enable" | "disable";
let value: EnableOrDisable;
value = "enable";
console.log(value);
value = "disable";
console.log(value);

export {};
