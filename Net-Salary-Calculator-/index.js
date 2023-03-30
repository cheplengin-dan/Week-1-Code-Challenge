// assigned values for basicSalary & benefits
const basicSalary = 50000;
const benefits = 10000;
const taxablePay = basicSalary + benefits;

// this function calculates the payee tax
function calculatePayeeTax(taxablePay){
let tax = 0;

if (taxablePay <= 24000) {
  tax = taxablePay * 0.1;
} else if (taxablePay <= 32333) {
  tax = (24000 * 0.1) + ((taxablePay - 24000) * 0.25);
} else {
  tax = (24000 * 0.1) + (8333 * 0.25) + ((taxablePay - 32333) * 0.3);
}
}

console.log(`The Payee Tax for a basic salary of ${basicSalary} and benefits of ${benefits} is Ksh ${tax.toFixed(2)}.`);

// this function calculates the NHIF and returns the deduction

function calculateNHIF(basicSalary) {
    let nhifDeduction = 0;

    if (basicSalary >= 0 && basicSalary <= 5999) {
      nhifDeduction = 150;
    } else if (basicSalary >= 6000 && basicSalary <= 7999) {
      nhifDeduction = 300;
    } else if (basicSalary >= 8000 && basicSalary <= 11999) {
      nhifDeduction = 400;
    } else if (basicSalary >= 12000 && basicSalary <= 14999) {
      nhifDeduction = 500;
    } else if (basicSalary >= 15000 && basicSalary <= 19999) {
      nhifDeduction = 600;
    }
    return nhifDeduction;

}

// this function calculates the NSSF and returns the deduction

function calculateNSSF(basicSalary) {
    let nssfDeduction = 0;

    if (basicSalary >= 0 && basicSalary <= 6000) {
        nssfDeduction = 400;   
    } else if ( basicSalary >= 60001 && basicSalary <= 18000) {
        nssfDeduction = 12000;
    }
    return nssfDeduction;

}

// the function calculateNetSalary callbacks the other functions and returns the net salary

function calculateNetSalary(basicSalary, benefits, calculatePayeeTax, calculateNHIF, calculateNSSF) {
  const grossSalary = basicSalary + benefits;
  const payeeTax = calculatePayeeTax(grossSalary);
  const nhifDeduction = calculateNHIF(basicSalary);
  const nssfDeduction = calculateNSSF(basicSalary);
  const deductions = payeeTax + nhifDeduction + nssfDeduction;
  const netSalary = grossSalary - deductions;
  return netSalary;
}
const netSalary =  calculateNetSalary(basicSalary, benefits, calculatePayeeTax, calculateNHIF, calculateNSSF);

console.log("Net salary:", netSalary);
