let income = document.getElementById('income')
let ids = ['income', 'food', 'others', 'rent',]
// calculate button
function inputId(id) {
    return document.getElementById(id);
}
//error handeling
function errorHands(ids) {
    let letters = ['a', 'b', 'd', 'c', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'w', 'x', 'y', 'z'];

    for (const id of ids) {
        for (const letter of letters) {
            if (inputId(id).value.toLowerCase().includes(letter)) {
                alert('plese write a number in the input box of ' + id);
                break;
            } else {
                if (inputId(id).value <= 0) {
                    alert('plese write a positive number in ' + id)
                    break
                } else if (isNaN(parseFloat(inputId(id).value)) == true || inputId(id).value == '' || inputId(id).value.toLowerCase().includes(letter)) {
                    debugger
                    alert('plese write a number in the input box of ' + id);
                    break
                }
            }
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
    ids[4] = 'save';
    errorHands(ids);
    // save amount
    inputId('save-amount').innerText = (parseFloat(income.value) * (parseFloat(inputId('save').value) / 100));
    // remain ammount
    inputId('remain-amount').innerText = inputId('Balance').innerText - inputId('save-amount').innerText;
    if (inputId('remain-amount').innerText <= 0) {
        alert('you should have spent less this mounth')
    }
})