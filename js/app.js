let income = document.getElementById('income')
let ids = ['income', 'food', 'others', 'rent',]
// calculate button
function inputId(id) {
    return document.getElementById(id);
}
//error handeling
function errorHands(ids) {
    for (const id of ids) {
        if (inputId(id).value <= 0) {
            alert('plese write a positive number in ' + id)
        } else if (isNaN(parseFloat(inputId(id).value)) == true || inputId(id).value == '') {
            alert('plese write a number in the input box of ' + id);
            break
        }
    }
}
// calculate button
document.getElementById('calc-btn').addEventListener('click', function (e) {
    errorHands(ids);
    // total expenses
    inputId('total-expenses').innerText = (parseFloat(inputId('food').value) + parseFloat(inputId('others').value) + parseFloat(inputId('rent').value));
    // balance
    if ((parseFloat(income.value) < inputId('total-expenses').innerText)) {
        alert('Controll your expenses')
    } else {
        inputId('Balance').innerText = (parseFloat(income.value) - parseFloat(inputId('total-expenses').innerText))
    }
})
// save button
document.getElementById('save-btn').addEventListener('click', function (e) {
    ids.push('save');
    errorHands(ids);
    // save amount
    inputId('save-amount').innerText = (parseFloat(income.value) * (parseFloat(inputId('save').value) / 100));
    // remain ammount
    inputId('remain-amount').innerText = inputId('Balance').innerText - inputId('save-amount').innerText;
    if (inputId('remain-amount').innerText <= 0) {
        alert('you should have spent less this mounth')
    }
})