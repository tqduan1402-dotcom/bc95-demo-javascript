// Lấy thẻ form
const formThue = document.getElementById("formThue");

formThue.addEventListener("submit", function(event) {
    // CHẶN TRÌNH DUYỆT LOAD LẠI TRANG
    event.preventDefault();

    // 1. Lấy dữ liệu
    let hoTen = document.getElementById("txtHoTen").value;
    let tongThuNhap = Number(document.getElementById("numTongThuNhap").value);
    let soPhuThuoc = Number(document.getElementById("numPhuThuoc").value);

    // 2. Tính thu nhập chịu thuế
    let thuNhapChiuThue = tongThuNhap - 4 - (soPhuThuoc * 1.6);
    let thuePhaiTra = 0;
    let thueSuat = 0;

    // 3. Logic tính thuế (If-Else)
    if (thuNhapChiuThue > 0) {
        if (thuNhapChiuThue <= 60) thueSuat = 5;
        else if (thuNhapChiuThue <= 120) thueSuat = 10;
        else if (thuNhapChiuThue <= 210) thueSuat = 15;
        else if (thuNhapChiuThue <= 384) thueSuat = 20;
        else if (thuNhapChiuThue <= 624) thueSuat = 25;
        else if (thuNhapChiuThue <= 960) thueSuat = 30;
        else thueSuat = 35;

        thuePhaiTra = thuNhapChiuThue * (thueSuat / 100);

        // 4. Hiển thị kết quả
        let KetQua = document.getElementById("KetQua");
        KetQua.classList.remove("hidden");
        KetQua.innerHTML = `
            <p>Họ tên: <strong>${hoTen}</strong></p>
            <p>Thuế suất: <strong>${thueSuat}%</strong></p>
            <p class="text-xl mt-2 text-red-600 font-bold">Thuế phải nộp: ${thuePhaiTra.toLocaleString()} Triệu VND</p>
        `;
    } else {
        alert("Thu nhập của bạn chưa đến mức phải đóng thuế!");
    }
});