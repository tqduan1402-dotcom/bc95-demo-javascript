function tinhTienDien() {
    const name = document.getElementById('name').value;
    const kw = Number(document.getElementById('kw').value);
    let tongTien = 0;

    if (kw <= 50) {
        tongTien = kw * 500;
    } else if (kw <= 100) {
        tongTien = (50 * 500) + (kw - 50) * 650;
    } else if (kw <= 200) {
        tongTien = (50 * 500) + (50 * 650) + (kw - 100) * 850;
    } else if (kw <= 350) {
        tongTien = (50 * 500) + (50 * 650) + (100 * 850) + (kw - 200) * 1100;
    } else {
        tongTien = (50 * 500) + (50 * 650) + (100 * 850) + (150 * 1100) + (kw - 350) * 1300;
    }

    // Định dạng tiền tệ VND (ví dụ: 100,000đ)
    const currentFormat = new Intl.NumberFormat('vn-VN');

    const resultDiv = document.getElementById('result');
    resultDiv.classList.remove('hidden');
    resultDiv.innerHTML = `Họ tên: <b>${name}</b> <br> Tiền điện: <span class="text-xl font-bold">${currentFormat.format(tongTien)}đ</span>`;
}