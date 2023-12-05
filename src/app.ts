const compteur = document.querySelector('#compteur')
let i = 0

const increment = (e: Event) => {
    e.preventDefault();
    i++;
    const span = compteur?.querySelector('span')
    if (span) {
        span.innerText= i.toString()
    }
}

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

compteur?.addEventListener('click', increment)