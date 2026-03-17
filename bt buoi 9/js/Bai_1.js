// BÀI 1: Tính lương nhân viên
document.getElementById("btn-luong").addEventListener("click", () => {
    let salaryPerDay = 100000
    let numberOfWork = Number(document.getElementById("input-day").value)

    if (numberOfWork === "" || isNaN(numberOfWork) || Number(numberOfWork) < 0) {
        alert("Vui lòng nhập số ngày làm hợp lệ (là số dương)!");
        return;
    }


   let salary = salaryPerDay * numberOfWork

    let result = document.getElementById("result-luong")
    result.innerText = `
        Lương bạn nhận được ${salary.toLocaleString()} 
    `
    result.classList.remove("hidden")
    // .toLocaleString() : dùng để định dạng số vd 4000 -> 4.000
})
// 2. NHIỆM VỤ DỌN DẸP: Chạy khi đang NHẬP (Input) (tham khảo chat gpt)
    
    // Nếu người dùng xóa sạch ô nhập
document.getElementById("input-day").addEventListener("input", function() {
    if (this.value === "") {
        document.getElementById("result-luong").classList.add("hidden");
    }
});