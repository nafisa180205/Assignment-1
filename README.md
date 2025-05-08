🚀**What are some differences between interfaces and types in TypeScript?**
✅Interface defines the structure of classes and method inside them. 

interface User {
  name: string;
  age: number;
}


Interface can be extended using extends keyword. 

interface AdminUser extends User {
  role: "admin";
}


✅Where as type acts as data structure of object and their properties. 
type User = {
  name: string;
  age: number;
};

Union (|) and Intersection (&) are used in types to marge 2 types 
type Admin =  {
  role: "admin";
};

type AdminUser = User & Admin




🚀**What is the use of the keyof keyword in TypeScript? Provide an example.**

✅ The keyof operator used to create a combination of the keys of a given type. it can be used in  generic functions that only accept keys of a specific object type.

type User = {
  name: string;
  age: number;
};

type userKeys = keyof User; (name | age)

function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const user: User = { name: "MR.Jin", age: 300 };
console.log(getValue(user, "name")); 

From The example we can see that keyof Operator ensures key safety. It only allows valid key. 


