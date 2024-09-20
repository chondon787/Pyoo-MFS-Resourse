// step-1 ......cash out btn money
document.getElementById('btn-cash-out').addEventListener('click',function(event){
    event.preventDefault();

    // step-2...const or variable cash out money and pin
    const cashOutMoney = document.getElementById('input-cash-out-money').value;
    const cashOutPin = document.getElementById('input-cash-out-pin-number').value;

    // step-3.... pin code set
    if(cashOutPin === '5555'){
        console.log('transition successfull')
    }
    else{
        alert('Faild plz try again')
    }

    // step-4..main= balance stand a variable called accountBalance
    const Balance = document.getElementById('account-balance').innerText;

    // step-5 chang the string by const a number
    const cashOutNumber = parseFloat(cashOutMoney);
    const BalanceNumber = parseFloat(Balance);
    const newNumber = BalanceNumber - cashOutNumber
    
    // step-6 newnumber reduc (-) main balance 
    document.getElementById('account-balance').innerText = newNumber;
})




 