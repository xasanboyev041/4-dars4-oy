// 1 Masala 

// const isPrime = (num) => {
//     if (num <= 1) return false
//     if (num === 2 || num === 3) return true
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//         if (num % i === 0) {
//             return false
//         }
//     }
//     return true
// }

// 2 Masala 

// const isPerfectNumber = function (num) {
//     let sum = 0
//     for (let i = 1; i <= num / 2; i++) {
//         if (num % i === 0) {
//             sum += i
//         }
//     }
//     return sum === num && num !== 0
// }

// 3 Masala 

// let str = prompt("Enter text...")
// count = 0
// for (let i = 0; i < str.length; i++) {
//     let l = str[i]
//     if(l === "a" || l === "i" || l === "o`" || l === "u" || l === "e" || l === "o"){
//         count ++
//     }else (
//         count ++
//     )

// }
// console.log(`kiritilgan textda ${count} ta unli harif bor`)
// console.log(`kiritilgan textda ${count} ta undosh harif bor`)




// 4 Masala 

// const closestToFive = (num_one, num_two) => {
//     const diff_one = Math.abs(num_one - 5)
//     const diff_two = Math.abs(num_two - 5)
//     if (diff_one < diff_two) {
//         return num_one
//     } else if (diff_two < diff_one) {
//         return num_two
//     } else {
//         return num_one
//     }
// }

// 5 Masala 

// const rectangle = (a, b) => {
//     const area = a * b
//     const perimeter = 2 * (a + b)

//     return {
//         area,
//         perimeter
//     }
// }
// const result = rectangle(5, 7)
// console.log("Yuzasi:", result.area)
// console.log("Perimetri:", result.perimeter)

// 6 Masala 

// const power = (a, n) => {
//     let result = 1
//     for (let i = 0; i < n; i++) {
//         result *= a
//     }

//     return result
// }

// 7 Masala 

const sign = (n) => {
    if (n < 0) {
        return -1
    } else if (n > 0) {
        return 1
    } else {
        return 0
    }
}