
// creat login 

document.getElementById('button-login').addEventListener('click',function(event){
    event.preventDefault();
    const phoneNumber = document.getElementById('phone-number').value
    const pinNumber = document.getElementById('pin-number').value
    // console.log(phoneNumber, pinNumber)

    if(phoneNumber ==='01302220150' && pinNumber === '5555'){
        console.log('you are logged in sucsessful');
       window.location.href = 'home.html'
        }
        else{
            alert('wrong phonnumber or number')
    }
});