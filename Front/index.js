const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  const form = document.getElementById("form");
  const answer = document.getElementById("answer");

  if (form.style.display === "none") {
    form.style.display = "block";
    answer.style.display = "none";
  } else {
    form.style.display = "none";
    answer.style.display = "block";
  }
});

btn.addEventListener("click", function () {
  const data = {
    height: document.getElementById("height").value,
    weight: document.getElementById("weight").value,
  };

  fetch("/counter", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      document.getElementById(
        "answer"
      ).innerHTML = `Your BMI is ${data.result}`;
    });
});
