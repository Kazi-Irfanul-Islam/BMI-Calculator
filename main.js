const form = document.querySelector("#bmiForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const result = document.querySelector("#results");
  const comment = document.querySelector("#comment");

  if (isNaN(height) || height <= 0) {
    result.innerHTML = `❌ Please provide a valid height.`;
    comment.innerHTML = "";
  } else if (isNaN(weight) || weight <= 0) {
    result.innerHTML = `❌ Please provide a valid weight.`;
    comment.innerHTML = "";
  } else {
    let bmi = (weight / ((height * height) / 10000)).toFixed(2); // ✅ Correct formula

    result.innerHTML = `<span>BMI : <strong>${bmi}</strong></span>`;
    if (bmi < 18.6) {
      comment.innerHTML = "<p>🟡 Comment: Under Weight</p>";
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      comment.innerHTML = "<p>🟢 Comment: Normal Range</p>";
    } else {
      comment.innerHTML = "<p>🔴 Comment: Over Weight</p>";
    }
  }
});

// ✅ Reset button
const resetBtn = document.querySelector("#resetBtn");
resetBtn.addEventListener("click", () => {
  document.querySelector("#height").value = "";
  document.querySelector("#weight").value = "";
  document.querySelector("#results").innerHTML = "";
  document.querySelector("#comment").innerHTML = "";
});
