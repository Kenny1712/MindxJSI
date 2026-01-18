// Toán tử số học 
/*
| Toán tử | Ý nghĩa     | Ví dụ (`a = 10, b = 3`) | Kết quả |
| ------- | ----------- | ----------------------- | ------- |
| `+`     | Cộng        | `a + b`                 | `13`    |
| -` `    | Trừ         | `a - b`                 | `7`     |
| `*`     | Nhân        | `a * b`                 | `30`    |
| `/`     | Chia        | `a / b`                 | `3.333` |
| `%`     | Chia lấy dư | `a % b`                 | `1`     |
| `**`    | Lũy thừa    | `a ** b`                | `1000`  |
| `++`    | Tăng 1      | `a++` hoặc `++a`        | `11`    |
| `--`    | Giảm 1      | `a--` hoặc `--a`        | `9`     |
*/
// ví dụ toán tử số học
let a = 10;
let b = 3;
let c = a % b;
console.log("Kết quả của phép toán a % b là: " , c); // Kết quả của phép toán a % b là: 1
// Toán tử gán 
/*
| Toán tử | Ý nghĩa        | Ví dụ    |
| ------- | -------------- | -------- |
| `=`     | Gán            | `x = 5`  |
| `+=`    | Cộng rồi gán   | `x += 2` |
| `-=`    | Trừ rồi gán    | `x -= 2` |
| `*=`    | Nhân rồi gán   | `x *= 2` |
| `/=`    | Chia rồi gán   | `x /= 2` |
| `%=`    | Lấy dư rồi gán | `x %= 2` |
*/
let x = 5;
x += 5;
console.log("Giá trị của x sau khi thực hiện x += 5 là: ", x); // Giá trị của x sau khi thực hiện x += 5 là: 10
x -= 10;
console.log("Giá trị của x sau khi thực hiện x -= 10 là: ", x); // Giá trị của x sau khi thực hiện x -= 10 là: 0
// Toán tử so sánh 
/*
|Toán tử | Ý nghĩa                      | Ví dụ       | Kết quả |
| ------- | ---------------------------- | ----------- | ------- |
| `==`    | So sánh bằng (lỏng)          | `5 == "5"`  | `true`  |
| `===`   | So sánh bằng (chặt, cả kiểu) | `5 === "5"` | `false` |
| `!=`    | Khác (lỏng)                  | `5 != "5"`  | `false` |
| `!==`   | Khác (chặt)                  | `5 !== "5"` | `true`  |
| `>`     | Lớn hơn                      | `5 > 3`     | `true`  |
| `<`     | Nhỏ hơn                      | `5 < 3`     | `false` |
| `>=`    | Lớn hơn hoặc bằng            | `5 >= 5`    | `true`  |
| `<=`    | Nhỏ hơn hoặc bằng            | `5 <= 4`    | `false` |
*/
4 === "4"; // false

// Toán tử logic
/*
| Toán tử | Ý nghĩa        | Ví dụ           | Kết quả   |        |   |         |        |
| ------- | -------------- | --------------- | --------- | ------ | - | ------- | ------ |
| `&&`    | Và (AND)       | `true && false` | `false`   |        |   |         |        |
| ||`      |                | ||`              | Hoặc (OR) | \`true |   | false\` | `true` |
| `!`     | Phủ định (NOT) | `!true`         | `false`   |        |   |         |        |
*/
// toán tử &&: tất cả đk phải đúng
// toán tử ||: chỉ cần 1 đk đúng
// toán tử !: đảo ngược logic
let student = true;
let age = 20;
if (student == true && age >= 18 ) {
    console.log("Sinh viên đủ tuổi");
} else {
    console.log("Sinh viên chưa đủ tuổi");
}