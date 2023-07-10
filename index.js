// Bài tập 1 - Tìm số nguyên dương nhỏ nhất

function timSoNguyen() {
  var sum = 0;
  var n = 1;

  while (sum < 10000) {
    sum += n;
    n++;
  }

  document.getElementById("kq1").innerHTML =
    "Số nguyên dương nhỏ nhất là: " + (n - 1);
}

// Bài tập 2 nhập 2 số

function sum() {
  var numberX = Number(document.getElementById("num-x").value);
  var numberN = Number(document.getElementById("num-n").value);

  var sum0 = 0;

  for (var i = 1; i <= numberN; i++) {
    sum0 += Math.pow(numberX, i);
  }

  document.getElementById("kq2").innerHTML =
    "Sum of S(" + numberN + ") = " + sum0;
}

// Bài tập 3

function tinhGiaiThua() {
  var numberN = Number(document.getElementById("so-n").value);

  var giaiThua = 1; // điều kiện tính giai thừa đầu vài !=0

  for (var i = 1; i <= numberN; i++) {
    giaiThua *= i;
  }

  document.getElementById("kq3").innerHTML =
    "Giai thừa của số " + numberN + " là: " + giaiThua;
}

// Bài tập 4 - Nhấn khởi tạo 10 div xanh-đỏ

function xuatKetQua() {
  for (var i = 0; i < 10; i++) {
    var div = document.createElement("div");
    div.textContent = "Div " + (i + 1);

    if (i % 2 === 0) {
      div.classList.add("red");
    } else {
      div.classList.add("blue");
    }

    document.getElementById("hienthi10div").appendChild(div);
  }
}
