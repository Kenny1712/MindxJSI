// 1. Tạo đối tượng
let person = {
    name: "Skibidi Toilet",
    age: 36,
    newPerson: {
        name: "Skibidi",
        age: 67
    },
    Array: [
        1, 2, 4, true
    ]
};
// 2. Truy cập giá trị trong object
// Dùng dấu .
let namePerson = person.name;
console.log(namePerson);

// 3. Thêm sửa xóa thuộc tính
person.gender = "Male"; // Thêm thuộc tính
person.age = 37; // Sửa thuộc tính
delete person.Array; // Xóa thuộc tính
console.log("sau khi thêm sửa xóa: ", person);

// 4. Một số hàm làm việc với object
/*
| Hàm                   | Mô tả                   | Ví dụ                             |
| --------------------- | ----------------------- | --------------------------------- |
| `Object.keys(obj)`    | Lấy mảng key            | `["name", "age"]`                 |
| `Object.values(obj)`  | Lấy mảng giá trị        | `["Hưng", 25]`                    |
| `Object.entries(obj)` | Lấy mảng `[key, value]` | `[["name", "Hưng"], ["age", 25]]` |
*/

