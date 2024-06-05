function calculatePPF() {
    let annualInvestment = parseFloat(document.getElementById('annualInvestment').value);
    let interestRate = parseFloat(document.getElementById('interestRate').value);
    let investmentPeriod = parseInt(document.getElementById('investmentPeriod').value);
    
    if (isNaN(annualInvestment) || isNaN(interestRate) || isNaN(investmentPeriod)) {
        alert('Please enter valid numbers.');
        return;
    }
    
    let totalAmount = 0;
    for (let i = 0; i < investmentPeriod; i++) {
        totalAmount = (totalAmount + annualInvestment) * (1 + (interestRate / 100));
    }
    
    document.getElementById('result').innerText = 'Amount: ₹' + totalAmount.toFixed(2);
}
