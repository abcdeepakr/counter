var plusOne = document.getElementById("plusOne"),
  count = 0;
plusOne.onclick = function () {
  count += 1;
  document.getElementById("update").innerHTML = count;
};

var plusFive = document.getElementById("plusFive");
plusFive.onclick = function () {
  count += 5;
  document.getElementById("update").innerHTML = count;
};

var plusTen = document.getElementById("plusTen");
plusTen.onclick = function () {
  count += 10;
  document.getElementById("update").innerHTML = count;
};

var minusOne = document.getElementById("minusOne");
minusOne.onclick = function () {
  count -= 1;
  document.getElementById("update").innerHTML = count;
};

var minusFive = document.getElementById("minusFive");
minusFive.onclick = function () {
  count -= 5;
  document.getElementById("update").innerHTML = count;
};

var minusTen = document.getElementById("minusTen");
minusTen.onclick = function () {
  count -= 10;
  document.getElementById("update").innerHTML = count;
};

function clear() {
  document.getElementById("reset").reset();
}
