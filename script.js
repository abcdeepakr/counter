var plusOne = document.getElementById("plusOne"),
  count = 0;
sequence = "";
plusOne.onclick = function () {
  count += 1;
  document.getElementById("update").innerHTML = count;
  sequence += "+1";
};

var plusFive = document.getElementById("plusFive");
plusFive.onclick = function () {
  count += 5;
  document.getElementById("update").innerHTML = count;
  sequence += "+5";
};

var plusTen = document.getElementById("plusTen");
plusTen.onclick = function () {
  count += 10;
  document.getElementById("update").innerHTML = count;
  sequence += "+10";
};

var minusOne = document.getElementById("minusOne");
minusOne.onclick = function () {
  count -= 1;
  document.getElementById("update").innerHTML = count;
  sequence += "-1";
};

var minusFive = document.getElementById("minusFive");
minusFive.onclick = function () {
  count -= 5;
  document.getElementById("update").innerHTML = count;
  sequence += "-5";
};

var minusTen = document.getElementById("minusTen");
minusTen.onclick = function () {
  count -= 10;
  document.getElementById("update").innerHTML = count;
  sequence += "-10";
};

function seq() {
  document.getElementById("finalSequence").innerHTML =
    "Your Sequence is " + sequence;
}
