let c = 36
let d = 67
/*
1. Khai báo hàm: Một khối lệnh được thực thi 1 hành động hay 1 tính năng nào đó
*/
// Cách 1: Hàm thường
function sum(a, b) {
    let c = a + b;
    console.log("Tổng là: ", c);
}
//Gọi hàm
sum(c, d); // Truyền đối số

// Cách 2
let sum2 = function(a, b) {
    let c = a + b;
    console.log("Tổng là: ", c);
}
sum2(c,d);
// Cách 3: Hàm mũi tên (Arrow function)
let sum3 = (a, b) => {
    return a + b;
}
console.log("Tổng là: ", sum3(c,d));