function updatenumberOfcover(isTrue) {
    let covernum = document.getElementById('cover');
    let covernumstring = covernum.value;
    let prevcasenumber = parseInt(covernumstring);
    let coverprice = document.getElementById('coverprice');
    let prevprice = coverprice.innerText;
    let price = parseInt(prevprice);
    if (isTrue == true) {
        let newprice = price + 59;
        coverprice.innerText = newprice;
        let newcasenumber = prevcasenumber + 1;
        covernum.value = newcasenumber;
        return newprice;
    } else if (isTrue == false) {
        let newprice = price - 59;
        coverprice.innerText = newprice;
        let newcasenumber = prevcasenumber - 1;
        covernum.value = newcasenumber;
        return newprice;
    }
}
function updateCoverprice(money) {
    let phoneprice = document.getElementById('Phoneprice');
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
document.getElementById('increaseCovernum').addEventListener('click', () => {
    let price = updatenumberOfcover(true);
    updateCoverprice(price);
})

document.getElementById('decreaseCovernum').addEventListener('click', () => {
    let price = updatenumberOfcover(false);
    updateCoverprice(price);
});

document.getElementById('cancel').addEventListener('click', () => {
    let covernum = document.getElementById('cover');
    covernum.value = 0;
    let coverprice = document.getElementById('coverprice');
    coverprice.innerText = 0;
    let phoneprice = document.getElementById('Phoneprice').innerText;
    //tax function
    let tax = document.getElementById('tax');
    let taxamount = parseInt(phoneprice) * 0.1;
    let finaltax = Math.round(taxamount);
    tax.innerText = finaltax;
    let finalamount = parseInt(phoneprice) + taxamount;
    let subtotal = document.getElementById('subtotal');
    subtotal.innerText = phoneprice;
    let total = document.getElementById('total');
    total.innerText = finalamount;

})
