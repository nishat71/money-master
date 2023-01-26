/*
1. add event handler with the calculate button
2. get the income amount from the income input field
 2-5. also make sure to convert the input into a number by using parseFloat

 3. Repeat step-2 for food Field, rent Field, clothes Field

4. calculate total expense amount
 4-5. set total expense amount

5. calculate total Balance amount After expense
 5-5. set total Balance amount

6. add event handler with the save button

7. get the percentage amount from the income input field

7. calculate Saving Amount
 7-5. set the Saving Amount total

8. calculate Remaining Balance
 8-5. set the Remaining Balance

 9. clear the input field  */

document.getElementById('btn-calculate').addEventListener('click', function () {
    const incomeField = document.getElementById('income-field');
    const incomeValueString = incomeField.value;
    const incomeValue = parseFloat(incomeValueString);
    console.log(incomeValue);



    const foodField = document.getElementById('food-amount');
    const foodValueString = foodField.value;
    const foodValue = parseFloat(foodValueString);
    console.log(foodValue);


    const rentField = document.getElementById('rent-amount');
    const rentValueString = rentField.value;
    const rentValue = parseFloat(rentValueString);
    console.log(rentValue);


    const clothesField = document.getElementById('clothes-amount');
    const clothesValueString = clothesField.value;
    const clothesValue = parseFloat(clothesValueString);
    console.log(clothesValue);



    //Set Total Expenses Amount
    const expenseTotalValue = foodValue + rentValue + clothesValue;
    const expenseAmount = document.getElementById('expense-amount');
    expenseAmount.innerText = expenseTotalValue;
    console.log(expenseTotalValue);



    // After expense (set) total Balance
    const balanceTotalValue = incomeValue - expenseTotalValue;
    const balanceAmount = document.getElementById('balance-amount');
    balanceAmount.innerText = balanceTotalValue;
    console.log(balanceTotalValue);
})



document.getElementById('save-btn').addEventListener('click', function () {
    const percentField = document.getElementById('percent-amount');
    const percentAmountString = percentField.value;
    const percentAmount = parseFloat(percentAmountString);
    console.log(percentAmount);


    //Income Amount
    const incomeField = document.getElementById('income-field');
    const incomeValueString = incomeField.value;
    const incomeValue = parseFloat(incomeValueString);


    const savingAmount = (incomeValue / 100) * percentAmount;
    const savingField = document.getElementById('saving-amount');
    savingField.innerText = savingAmount;
    console.log(savingAmount);


    const remainingAmount = incomeValue - savingAmount;
    const remainingBalance = document.getElementById('remaining-balance');
    remainingBalance.innerText = remainingAmount;
    console.log(remainingAmount);
})