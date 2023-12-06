"use strict";
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
