function login() {
    const username = document.getElementById("username").value;
    if (username.trim() !== "") {
      // Redirect to the next page after successful login
      window.location.href = "main.html";
    } else {
      alert("Please enter a valid username.");
    }
  
}



document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("Easy1").addEventListener("click", easy1);
  document.getElementById("Medium1").addEventListener("click", medium1);
  document.getElementById("Hard1").addEventListener("click", hard1);
});

function easy1() {
  const min = 1;
  const max = 30;
  const num1 = Math.floor(Math.random() * (max - min + 1)) + min;
  const num2 = Math.floor(Math.random() * (max - min + 1)) + min;
  mainfun(num1, num2);
}

function medium1() {
  const min = 50;
  const max = 100;
  const num1 = Math.floor(Math.random() * (max - min + 1)) + min;
  const num2 = Math.floor(Math.random() * (max - min + 1)) + min;
  mainfun(num1, num2);
}

function hard1() {
  const min = 100;
  const max = 200;
  const num1 = Math.floor(Math.random() * (max - min + 1)) + min;
  const num2 = Math.floor(Math.random() * (max - min + 1)) + min;
  mainfun(num1, num2);
}

function mainfun(num1, num2) {
  const correctSum = num1 + num2;
  document.getElementById("display1").textContent = `What is the sum of ${num1} and ${num2}?`;
  let input1 = document.getElementById("input1");
  let input2 = document.getElementById("input2");
  let output1 = document.getElementById("output1");

  function fun1() {
    const userAnswer = parseInt(input1.value);
    if (userAnswer === correctSum) {
      output1.textContent = "You are correct!";
    } else {
      output1.textContent = `You are wrong. The correct answer is ${correctSum}`;
    }
    document.getElementById("displayUsername").textContent = username;
  }

  input2.addEventListener("click", fun1);
}




