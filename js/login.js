// step number...........1

document.getElementById('button-login').addEventListener('click',function(event){
    // step number........2 prevent loadding browser
    event.preventDefault();
    console.log('wellcome to click me ')

    // step number...........3
    const phoneNumber = document.getElementById('phone-number').value;
    console.log(phoneNumber);
})