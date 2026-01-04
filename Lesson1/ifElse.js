// if, else if, else
/*
if (điều kiện) {
    // Khối mã thực thi nếu điều kiện đúng (true)
} else if (điều kiện khác) {
    // Khối mã thực thi nếu điều kiện khác đúng (true)
} else {
    // Khối mã thực thi nếu tất cả các điều kiện trên đều sai (false)
}
*/
let score = 36;
if (score >= 9) {
  console.log("Xuất sắc");
} else if (score >= 7) {
  console.log("Giỏi");
} else if (score >= 5) {
  console.log("Khá");
} else {
  console.log("Yếu");
}



// Toán tử 3 ngôi
// Cú pháp: điều kiện ? giá trị_nếu_đúng : giá trị_nếu_sai
let age = 20;
let canVote = age >= 18 ? "Được phép bầu cử" : "Chưa đủ tuổi bầu cử";
console.log(canVote); // In ra "Được phép bầu cử"