const compteur = document.querySelector("#compteur");
let i = 0;

const increment = (e: Event) => {
  e.preventDefault();
  i++;
  const span = compteur?.querySelector("span");
  if (span) {
    span.innerText = i.toString();
  }
};

// //Narrowing
// function printId(id: string | number) {
//     if (typeof id === "number") {
//         console.log((id * 3).toString())
//     } else {
//         console.log(id.toUpperCase())
//     }

// }

// function exemple(a: string | string[]) {
//     if (Array.isArray(a)) {
//         return a[0]
//     }
//     return
// }

// function isDate(a: any): a is Date {
//     return a instanceof Date
// }

// function exemple2(a: Date | HTMLInputElement) {
//     if (isDate(a)) {
//         a
//     }
// }

compteur?.addEventListener("click", increment);

//Alias and Generic
function identity<ArgType>(arg: ArgType): ArgType {
  return arg;
}

const aa = identity(3);

// function first<Type>(arg: Type[]): Type {
//   return arg[0];
// }

// const aaa = first(["aze", "bze", "cze"]);

function consoleSize<Type extends { length: number }>(arg: Type): Type {
  console.log(arg.length);
  return arg;
}
const abb = consoleSize(["3", 2]);

//readonly

// function reverse<T>(arr:readonly T[]):T[] {
//     return [...arr].reverse();
// }

// class A {
//     #a = 3
//     // protected b = 3
//     // public c = 3
//     log() {
//         console.log(this.#a)
//     }
// }
// // class B extends A {
// //     log() {
// //         console.log(this.b)
// //     }
// // }
// const aInstance = new A();
// aInstance.log()
// console.log(aInstance)

// class Collection <T> {
//     constructor(private items: T[]) {

//     }
//     add (item: T): this{
//         this.items.push(item)
//         return this
//     }
//     // add (item: T): this{
//     //     this.items.push(item)
//     //     return this
//     // }
//     first (): T | null {
//         return this.items[0] || null
//     }
//     isEqual(a: this){
//         return a.items === this.items
//     }
// }
// const a = new Collection(["aze",2])
// //const c = a.add(3)
// const b = a.first
// const c = new Collection([1,2])
// a.isEqual(c)

// class Point {
//   x = 0;
//   y = 0;
// }

// class Geometry {
//   x = 0;
//   y = 0;
//   surface = 0;
// }
// function getX(p: Point) {
//   return p.x
// }
// getX(new Geometry())

//abstract

// abstract class Geometry {
//   x = 0
//   y = 0
//   abstract surface(): number
// }

// class Triangle extends Geometry {
//   x = 0
//   y = 0
//   surface(): number {
//       return 3
//   }
// }

class Geometry {
  static #origin: { x: number; y: number } = { x: 0, y: 0 };
  // static{
  //   Geometry.#origin = {x: 0, y: 0}
  // }

  surface() {
    return 3;
  }
}

class Triangle {
  constructor(x: number, y: number) {}
  surface() {
    return 3;
  }
}

type InstantiableShape = {
  new (x: number, y: number): {
    surface: () => number;
  };
};

function shapeGenerator(shapeType: InstantiableShape, x: number, y: number) {
  return new shapeType(x, y).surface();
}

shapeGenerator(Geometry, 10, 20);
shapeGenerator(Triangle, 10, 20);

type listItem = [string, number];
const a: listItem = ["Tomate", 2];
const b: listItem = ["Banane", 3];

function merge<T extends unknown[], U extends unknown[]>(
  a: T,
  b: U
): [...T, ...U] {
  return [...a, ...b];
}
const c = merge(a, b);

const d = [] as string[]
if (c[0]) {
  console.log(c[0].toUpperCase())
}

enum STEPS {
  Intro ,
  Selection ,
  Panier ,
  Paiement 
}
const steps: STEPS = STEPS.Selection
console.log(STEPS[steps])

export class Point {
  x = 0;
  y = 0;
  move(x:number , y:number) {
    this.x,
    this.y
    return this
  }
}

window.ga('send',{
  hitType: 'event',
  eventCategory: 'category'
})




import scrollTo from 'scroll-to'

scrollTo(500, 1200, {
  ease: 'out-bounce',
  duration: 1500
});