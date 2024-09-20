// // cashout section start

// document.getElementById('btn-cash-out-money').addEventListener('click',function(event){
//     event.preventDefault();
//     // cashout money aand send money
//     const cashOutMoney = document.getElementById('input-cash-out-money').value;
//     const cashOut = parseFloat(cashOutMoney)
//     const PinNumber = document.getElementById('input-cash-out-pin-number').value;

    
// //  reduce the mouney
// const newMoney = balanceNumber - cashOut
     

//     if(PinNumber === '5555'){
        
//         const balance = document.getElementById('account-balance').innerText;
//      const balanceNumber = parseFloat(balance)
//      const balance = document.getElementById('account-balance').innerText = newMoney;

//     }
//     else{
//         alert('faild plz try letter')
//     }
        
// })




document.getElementById('btn-cash-out-money').addEventListener('click', function(event) {
    event.preventDefault();

    const cashOutMoney = document.getElementById('input-cash-out-money').value;
    const cashOut = parseFloat(cashOutMoney);
    const PinNumber = document.getElementById('input-cash-out-pin-number').value;

     if (PinNumber === '5555') {
        
        const balance = document.getElementById('account-balance').innerText;
        const balanceNumber = parseFloat(balance);

         
        if (balanceNumber >= cashOut) {
            const newMoney = balanceNumber - cashOut;
            document.getElementById('account-balance').innerText = newMoney;
        } else {
            alert('successfull');
        }
    } else {
        alert('fild plz try latter');
    }
});
