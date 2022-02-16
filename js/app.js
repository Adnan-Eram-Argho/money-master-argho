let income = document.getElementById('income')
let ids = ['income', 'food', 'others', 'rent']
// calculate button
function inputId(id) {
    return document.getElementById(id);
}
document.getElementById('calc-btn').addEventListener('click', function (e) {
    for (const id of ids) {
        if (inputId(id).value <= 0) {
            alert('plese write a positive number in ' + id)
        } else if (isNaN(parseFloat(inputId(id).value)) == true || inputId(id).value == '') {
            alert('plese write a number in the input box of ' + id);
            break
        }
    }
    // total expenses
    inputId('total-expenses').innerText = (parseFloat(inputId('food').value) + parseFloat(inputId('others').value) + parseFloat(inputId('rent').value));
    // balance
    if ((parseFloat(income.value) < inputId('total-expenses').innerText)) {
        alert('Controll your expenses')
    } else {
        inputId('Balance').innerText = (parseFloat(income.value) - parseFloat(inputId('total-expenses').innerText))
    }

})