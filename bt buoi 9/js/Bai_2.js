document.getElementById("btn-trungbinh").addEventListener("click", () => {
    // LƯU Ý: dù nhập số vào ô input nhưng kết quả trả về là kiểu chữ
    // => chuyển chữ => số
    let num1 = Number(document.getElementById("input-num1").value) 
    let num2 = Number(document.getElementById("input-num2").value)
    let num3 = Number(document.getElementById("input-num3").value)
    let num4 = Number(document.getElementById("input-num4").value)
    let num5 = Number(document.getElementById("input-num5").value)

    let  avg = (num1 + num2 + num3 + num4 + num5) / 5

    let result = document.getElementById("result-trungbinh")
    result.innerText = `
        Trung bình của 5 số là: ${avg}
    `
})