// 1. Kiểu dữ liệu nguyên thủy (Primitive Data Types)
/*
    1.  String (Chuỗi): Dùng để lưu trữ văn bản: "Xin chào", 'JavaScript'
    2.  Number (Số): Dùng để lưu trữ số nguyên và số thập phân: 42, 3.14
    3.  Boolean (Luận lý): Chỉ có hai giá trị true (đúng) và false (sai): true, false
    4.  Undefined (Chưa xác định): Biến được khai báo nhưng chưa được gán giá trị: let x; // x có giá trị undefined
    5.  Null (Rỗng): Đại diện cho giá trị rỗng hoặc không tồn tại: 
*/
// Ví dụ:
let name = "Nguyen Van A"; // String
let age = 25; // Number
let isStudent = true; // Boolean
let address; // Undefined
let phoneNumber = null; // Null

// Kiểm tra kiểu dữ liệu typeof()
console.log(typeof name); // "string"

// 2. Kiểu dữ liệu tham chiếu (Reference Data Types)
/*
    1.  Object (Đối tượng): Lưu trữ các cặp key-value (khóa-giá trị): {name: "Nguyen Van A", age: 25}
    2.  Array (Mảng): Lưu trữ danh sách các giá trị theo thứ tự: [1, 2, 3, 4, 5]
    3.  Function (Hàm): Khối mã có thể tái sử dụng để thực hiện một nhiệm vụ cụ thể
*/
// Ví dụ:
let person = {
  name: "Nguyen Van A",
  age: 25,
  new_person: { name: "Nguyen Van B", age: 30 },
}; // Object


let numbers = [1, 2, 3, 4, 5, "Home", { name: "Nguyen Van C", age: 28 }]; // Array
console.log(numbers);


function greet() {
  // Function
  console.log("Hello!");
}

// Gọi hàm
greet(); // In ra "Hello!"
