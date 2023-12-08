"use strict";
var _a, _Geometry_origin;
const compteur = document.querySelector("#compteur");
let i = 0;
const increment = (e) => {
    e.preventDefault();
    i++;
    const span = compteur === null || compteur === void 0 ? void 0 : compteur.querySelector("span");
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
compteur === null || compteur === void 0 ? void 0 : compteur.addEventListener("click", increment);
//Alias and Generic
function identity(arg) {
    return arg;
}
const aa = identity(3);
// function first<Type>(arg: Type[]): Type {
//   return arg[0];
// }
// const aaa = first(["aze", "bze", "cze"]);
function consoleSize(arg) {
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
    // static{
    //   Geometry.#origin = {x: 0, y: 0}
    // }
    surface() {
        return 3;
    }
}
_a = Geometry;
_Geometry_origin = { value: { x: 0, y: 0 } };
class Triangle {
    constructor(x, y) { }
    surface() {
        return 3;
    }
}
function shapeGenerator(shapeType, x, y) {
    return new shapeType(x, y).surface();
}
shapeGenerator(Geometry, 10, 20);
shapeGenerator(Triangle, 10, 20);
const a = ["Tomate", 2];
const b = ["Banane", 3];
function merge(a, b) {
    return [...a, ...b];
}
const c = merge(a, b);
const d = [];
if (c[0]) {
    console.log(c[0].toUpperCase());
}
var STEPS;
(function (STEPS) {
    STEPS[STEPS["Intro"] = 0] = "Intro";
    STEPS[STEPS["Selection"] = 1] = "Selection";
    STEPS[STEPS["Panier"] = 2] = "Panier";
    STEPS[STEPS["Paiement"] = 3] = "Paiement";
})(STEPS || (STEPS = {}));
const steps = STEPS.Selection;
console.log(STEPS[steps]);
