// Step-1(Deposit)
document.getElementById("deposit-button").addEventListener("click", function()
{
    // Step-2(Deposit)
    // console.log("Clicked");
    const depositInput = document.getElementById("deposit-input");
    const depositAmount =depositInput.value;
    // console.log(depositAmount);

    // Step-3(Deposit)
    const depositTotal = document.getElementById("deposit-total");
    const depositTotalAmount = depositTotal.innerText;
    depositTotal.innerText = parseFloat(depositTotalAmount) + parseFloat(depositAmount);
    // console.log(depositTotalAmount);

    // Step-4(Deposit)
    const balanceTotal = document.getElementById("balance-total");
    const balanceTotalAmount = balanceTotal.innerText;
    balanceTotal.innerText = parseFloat(balanceTotalAmount) + parseFloat(depositAmount);
    // console.log(balanceTotalAmount);

    depositInput.value = "";
});

// Step-1(Withdraw)
document.getElementById("withdraw-button").addEventListener("click", function()
{
    // Step-2(Withdraw)
    // console.log("Clicked");
    const withdrawInput = document.getElementById("withdraw-input");
    const withdrawAmount = withdrawInput.value;
    // console.log(withdrawAmount);

    // Step-3(Withdraw)
    const withdrawTotal = document.getElementById("withdraw-total");
    const withdrawTotalAmount = withdrawTotal.innerText;
    withdrawTotal.innerText = parseFloat(withdrawTotalAmount) + parseFloat(withdrawAmount);
    // console.log(withdrawTotalAmount);

    // Step-4(Withdraw)
    const balanceTotal = document.getElementById("balance-total");
    const balanceTotalAmount = balanceTotal.innerText;
    balanceTotal.innerText = parseFloat(balanceTotalAmount) - parseFloat(withdrawAmount);

    withdrawInput.value = "";
});