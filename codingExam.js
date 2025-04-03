document.getElementById("Button1").addEventListener("click", function () {
  let loan = parseFloat(prompt("Loan amount (just numbers):"));
  let percent = parseFloat(prompt("Down payment percent:"));
  let term = parseFloat(prompt("Loan term in years (15 or 30):"));

  if (term !== 15 && term !== 30) {
    alert("Only 15 or 30 allowed.");
    return;
  }

  let months = term * 12;
  let yearlyRate = 5.75;
  let monthlyRate = yearlyRate / 12 / 100;
  let downAmount = loan * (percent / 100);
  let baseLoan = loan - downAmount;

  let r = monthlyRate;
  let n = months;
  let mPayment = (r * baseLoan) / (1 - Math.pow(1 + r, -n));
  let totalLoanCost = mPayment * n;
  let totalInterest = totalLoanCost - baseLoan;

  let balance = baseLoan;
  let result = "";

  for (let month = 1; month <= months; month++) {
    let thisInterest = balance * r;
    let thisPrincipal = mPayment - thisInterest;
    balance -= thisPrincipal;
    if (balance < 0) balance = 0;

    result += "Month " + month + " Balance: $" + balance.toFixed(2) + "\n";

    if (balance === 0) {
      result += "This is the Ending Amortization Calculator...\n";
      break;
    }
  }

  result =
    "Loan After Down Payment: $" + baseLoan.toFixed(2) + "\n" +
    "Monthly Payment: $" + mPayment.toFixed(2) + "\n" +
    "Total Interest: $" + totalInterest.toFixed(2) + "\n" +
    "Total Loan Cost: $" + totalLoanCost.toFixed(2) + "\n\n" +
    result;

  document.getElementById("output").textContent = result;
});
