document.getElementById('buyBitcoin').addEventListener('click', function() {
    alert("Buy Bitcoin feature is not implemented yet.");
});

document.getElementById('sendMoney').addEventListener('click', function() {
    const amount = prompt("Enter the amount you want to send:");
    if (amount) {
        alert(`You have sent $${amount}.`);
    }
});

document.getElementById('receiveMoney').addEventListener('click', function() {
    const amount = prompt("Enter the amount you want to receive:");
    if (amount) {
        alert(`You have received $${amount}.`);
    }
});
