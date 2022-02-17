function calcTotalExpenses(){
    const foodValue = document.getElementById('food-value').value;
    const rentValue = document.getElementById('rent-value').value;
    const clothesValue = document.getElementById('clothes-value').value;
    // calculate total Expenses
    const totalExpenses =parseInt(foodValue) + parseInt(rentValue) + parseInt(clothesValue);
    document.getElementById('total-expenses').innerText = totalExpenses;
    return totalExpenses;
}
// total income
function balance(){
    const totalIncome = document.getElementById('total-income').value;
    const foodInput = document.getElementById('food-value').value;
    const rentInput =  document.getElementById('rent-value').value;
    const clothesInput =  document.getElementById('clothes-value').value;
    const totalExpenses = calcTotalExpenses();
    // balance calculation
    if(isNaN(totalIncome) || totalIncome < 0){
       alert('⚠️ Give a Positve number in Income  !');
    }
    else if(isNaN(foodInput) || foodInput < 0){
        alert('⚠️ Give a Positve number in Food  !');
    }
    else if(isNaN(rentInput) || rentInput < 0){
        alert('⚠️ Give a Positve number in Rent  !');
    }
    else if(isNaN(clothesInput) || clothesInput < 0){
        alert('⚠️ Give a Positve number in Clothes  !');
    }
    else if(totalIncome < totalExpenses){
        alert('⚠️ How is it possible man! Income < expenses ??  !');
    }
    else{
    const balance = parseInt(totalIncome - totalExpenses);
    document.getElementById('have-balance').innerText = balance;
    return  balance;
    }
};

