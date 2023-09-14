function updatenumberOfphone(isTrue) {
    let covernum = document.getElementById('phone');
    let covernumstring = covernum.value;
    let prevcasenumber = parseInt(covernumstring);
    let coverprice = document.getElementById('Phoneprice');
    let prevprice = coverprice.innerText;
    let price = parseInt(prevprice);
    if (isTrue == true) {
        let newprice = price + 1219;
        coverprice.innerText = newprice;
        let newcasenumber = prevcasenumber + 1;
        covernum.value = newcasenumber;
        return newprice;
    } else if (isTrue == false) {
        let newprice = price - 1219;
        coverprice.innerText = newprice;
        let newcasenumber = prevcasenumber - 1;
        covernum.value = newcasenumber;
        return newprice;
    }
}
function updatePhoneprice(money) {
    let phoneprice = document.getElementById('coverprice');
    let phoneprevprice = parseInt(phoneprice.innerText);
    let subtotal = document.getElementById('subtotal');
    let Newsubtotal = phoneprevprice + money;
    let tax = document.getElementById('tax');
    let taxamount = Newsubtotal * 0.1;
    let finaltax = Math.round(taxamount);
    tax.innerText = finaltax;
    let finalSubtotal = Newsubtotal + finaltax;
    subtotal.innerText = Newsubtotal;
    let total = document.getElementById('total');
    total.innerText = finalSubtotal;
}
document.getElementById('increasephone').addEventListener('click', () => {
    let money = updatenumberOfphone(true);
    updatePhoneprice(money);
})
document.getElementById('decreasephone').addEventListener('click', () => {
    let money = updatenumberOfphone(false);
    updatePhoneprice(money);
})
document.getElementById('remove').addEventListener('click', () => {
    let numberofphone = document.getElementById('phone');
    numberofphone.value = 0;
    let priceofphone = document.getElementById('Phoneprice');
    priceofphone.innerHTML = 0;
    let coverprice = document.getElementById('coverprice').innerText;
    //tax
    let tax = document.getElementById('tax');
    let taxamount = parseInt(coverprice) * 0.1;
    let finaltax = Math.round(taxamount);
    tax.innerText = finaltax;
    let finalamount = parseInt(coverprice) + taxamount;
    let subtotal = document.getElementById('subtotal');
    subtotal.innerText = finalamount;
    let total = document.getElementById('total');
    total.innerText = finalamount;


})
document.getElementById('Purchase').addEventListener('click', () => {
    alert('Thank you for purchasing');
})