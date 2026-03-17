// BÀI 1: Tính lương nhân viên
document.getElementById("btn-vnd").addEventListener("click", () => {
    
    let change = 23500
    let monNeyUsd = Number(document.getElementById("input-money").value)

    if (monNeyUsd === "" || isNaN(monNeyUsd) || Number(monNeyUsd) < 0) {
        alert("Vui lòng nhập số ngày làm hợp lệ (là số dương)!");
        return;
    }


   let VND = monNeyUsd * change

    let result = document.getElementById("result-vnd")
    result.innerText = `
        ${monNeyUsd} USD = ${VND.toLocaleString()} VND
    `
    result.classList.remove("hidden")
    // .toLocaleString() : dùng để định dạng số vd 4000 -> 4.000
})
// 2. NHIỆM VỤ DỌN DẸP: Chạy khi đang NHẬP (Input) (tham khảo chat gpt)
    
    // Nếu người dùng xóa sạch ô nhập
document.getElementById("input-money").addEventListener("input", function() {
    if (this.value === "") {
        document.getElementById("result-vnd").classList.add("hidden");
    }
});

