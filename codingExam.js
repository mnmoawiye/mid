document.getElementById("Button1").addEventListener("click", function () {
    let loan = Number(prompt("Enter loan amount:"));
    let percent = Number(prompt("Enter down payment percent:"));
    let term = Number(prompt("Enter loan term (15 or 30):"));
  
    if (term !== 15 && term !== 30) {
      alert("Term must be 15 or 30.");
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
  
    // Monthly loop comes first in output
    for (let month = 1; month <= months; month++) {
      let thisInterest = balance * r;
      let thisPrincipal = mPayment - thisInterest;
      balance -= thisPrincipal;
      if (balance < 0) balance = 0;
      result += "Month " + month + " Remaining: $" + balance.toFixed(2) + "\n";
  
      if (balance === 0) {
        result += "This is the Ending Amortization Calculator...\n";
        break;
      }
    }
  
    // Summary info comes after the loop
    result = "Loan After Down: $" + baseLoan.toFixed(2) + "\n" +
             "Monthly Payment: $" + mPayment.toFixed(2) + "\n" +
             "Total Interest: $" + totalInterest.toFixed(2) + "\n" +
             "Total Cost: $" + totalLoanCost.toFixed(2) + "\n\n" + result;
  
    document.getElementById("output").textContent = result;
  });
  