function add() {
  let opOne = parseInt(document.getElementById("op-one").value)
  let opTwo = parseInt(document.getElementById("op-two").value)
  let answer = opOne + opTwo
  document.getElementById("result").value = answer
}

function subtract() {
  let opOne = parseInt(document.getElementById("op-one").value)
  let opTwo = parseInt(document.getElementById("op-two").value)
  let answer = opOne - opTwo
  document.getElementById("result").value = answer
}

function multiply() {
  let opOne = parseInt(document.getElementById("op-one").value)
  let opTwo = parseInt(document.getElementById("op-two").value)
  let answer = opOne * opTwo
  document.getElementById("result").value = answer
}

function divide() {
  let opOne = parseInt(document.getElementById("op-one").value)
  let opTwo = parseInt(document.getElementById("op-two").value)
  let answer = opOne / opTwo
  document.getElementById("result").value = answer
}