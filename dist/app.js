"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _A_a;
const compteur = document.querySelector('#compteur');
let i = 0;
const increment = (e) => {
    e.preventDefault();
    i++;
    const span = compteur === null || compteur === void 0 ? void 0 : compteur.querySelector('span');
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
compteur === null || compteur === void 0 ? void 0 : compteur.addEventListener('click', increment);
//Alias and Generic
function identity(arg) {
    return arg;
}
const aa = identity(3);
function first(arg) {
    return arg[0];
}
const aaa = first(["aze", "bze", "cze"]);
function consoleSize(arg) {
    console.log(arg.length);
    return arg;
}
const abb = consoleSize(['3', 2]);
//readonly
function reverse(arr) {
    return [...arr].reverse();
}
class A {
    constructor() {
        _A_a.set(this, 3
        // protected b = 3
        // public c = 3
        );
    }
    // protected b = 3
    // public c = 3
    log() {
        console.log(__classPrivateFieldGet(this, _A_a, "f"));
    }
}
_A_a = new WeakMap();
// class B extends A {
//     log() {
//         console.log(this.b)
//     }
// }
const aInstance = new A();
aInstance.log();
console.log(aInstance);
class Collection {
    constructor(items) {
        this.items = items;
    }
    add(item) {
        this.items.push(item);
        return this;
    }
    // add (item: T): this{
    //     this.items.push(item)
    //     return this
    // }
    first() {
        return this.items[0] || null;
    }
    isEqual(a) {
        return a.items === this.items;
    }
}
const a = new Collection(["aze", 2]);
//const c = a.add(3)
const b = a.first;
const c = new Collection([1, 2]);
a.isEqual(c);

