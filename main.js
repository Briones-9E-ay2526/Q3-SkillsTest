function calculateTotal() {
    const adfee = 50;
    const ticket = 250;
    let quantity = parseFloat(document.getElementById('ticket').value) || 0;
    let subtotal = ticket * quantity;
    let total = stotal + adfee;
    document.getElementById('stotal').value = subtotal;
    document.getElementById('total').value = total;
}