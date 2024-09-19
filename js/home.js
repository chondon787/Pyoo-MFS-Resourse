// ste-1...add event handler money

document.getElementById('btn-add-money').addEventListener('click',function(event){
    event.preventDefault();
const inputAddMoney = document.getElementById('input-add-money').value;
console.log(inputAddMoney)
const inputPinNumber = document.getElementById('input-pin-number').value 
//  console.log(inputPinNumber)
// log in accound password
if(inputPinNumber === '5555'){
    console.log('additing money in the accound')

    // // get the corrent balence
const balance = document.getElementById('account-balance').innerText;
console.log(balance)

 const addMoneyNumber = parseFloat(inputAddMoney)
 const balanceNumber = parseFloat(balance)
 const newMoney = balanceNumber + addMoneyNumber;
 console.log(newMoney)

 document.getElementById('account-balance').innerText = newMoney
}

else{
    alert('faild the number')
}
 



})
 