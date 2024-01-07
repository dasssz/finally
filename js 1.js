function sendMoney() {
    var budget1 = parseInt(document.querySelector('#budget1').textContent);
    var budget2 = parseInt(document.querySelector('#budget2').textContent);

    if (budget1 >= 5) {
        budget1 -= 5;
        budget2 += 5;
    } else {
        alert("Insufficient budget on First Website.");
    }

    document.querySelector('#budget1').textContent = budget1;
    document.querySelector('#budget2').textContent = budget2;
}

