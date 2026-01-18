// Mảng
// 1. Khai báo mảng
let myArray = ["Skibidi", 1, 2, 3, 4, 5, true, [1,3,2], {name: "Skibidi", age: 18}];
// index - []: Các vị trí và thứ tự bắt đầu từ 0
// item - (): Các dữ liệu, giá trị được khai báo trong mảng
let nums = new Array(1,2,3,4,5); // Cách khai báo mảng khác
console.log(myArray);
// 2. Truy xuất phần tử trong mảng
console.log(myArray[0]); // Truy xuất phần tử đầu tiên
console.log(myArray[7]); // Truy xuất phần tử thứ 8
console.log(myArray[myArray.length - 1]); // Truy xuất phần tử cuối cùng
// 3. Thay đổi phần tử trong mảng
myArray[0] = "Skibidi Toilet";
console.log(myArray);
// 4. Độ dài mảng
console.log("Độ dài của myArray là: ",myArray.length);
// 5. Duyệt mảng
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log("Phần tử thứ " + index + " là: ", element);
}
/*6. Các phương thức mảng
| Hàm           | Mô tả                     | Ví dụ                     |
| ------------- | ------------------------- | ------------------------- |
| `push()`      | Thêm vào cuối             | `fruits.push("Nho")`      |
| `pop()`       | Xoá phần tử cuối          | `fruits.pop()`            |
| `shift()`     | Xoá phần tử đầu           | `fruits.shift()`          |
| `unshift()`   | Thêm vào đầu              | `fruits.unshift("Dưa")`   |
| `slice(a, b)` | Cắt mảng từ `a` đến `b-1` | `fruits.slice(1, 3)`      |
| `splice()`    | Xoá hoặc thêm phần tử     | `fruits.splice(1, 1)`     |
| `indexOf()`   | Vị trí phần tử            | `fruits.indexOf("Chuối")` |
| `includes()`  | Kiểm tra có tồn tại       | `fruits.includes("Táo")`  |
*/
// Ví dụ sử dụng các phương thức mảng
let fruits = ["Táo", "Chuối", "Cam"];
console.log("Mảng ban đầu: ", fruits);

// push() - thêm phần tử vào cuối mảng
fruits.push("Nho");
console.log("Sau khi push Nho: ", fruits);
// pop() - xoá phần tử cuối mảng
fruits.pop();
console.log("Sau khi pop: ", fruits);
// shift() - xoá phần tử đầu mảng
fruits.shift();
console.log("Sau khi shift: ", fruits);
// unshift() - thêm phần tử vào đầu mảng
fruits.unshift("Dưa");
console.log("Sau khi unshift Dưa: ", fruits);
//slice(a,b) - cắt mảng từ vị trí a đến b-1
let slide = fruits.slice(1, 3);
console.log("Mảng cắt từ vị trí 1 đến 2: ", slide);
//splice(index, số lượng) - xoá phần tử từ vị trí index
fruits.splice(1, 1); // Xoá 1 phần tử từ vị trí 1
console.log("Sau khi splice vị trí 1: ", fruits);
// indexOf(item) - tìm vị trí của phần tử
let index = fruits.indexOf("Cam");
console.log("Vị trí của Cam trong mảng: ", index);
// includes(item) - kiểm tra phần tử có trong mảng hay không
let hasApple = fruits.includes("Táo");
console.log("Mảng có chứa Táo không? ", hasApple);