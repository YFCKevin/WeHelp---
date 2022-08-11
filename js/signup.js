var btn = document.querySelector('.send');
btn.addEventListener('click',getData);

function getData(){
    var memText = document.querySelector('.signUp').value;
    var passwordStr = document.querySelector('.password').value;
    var account = {'email':memText,'password':passwordStr};
    var xhr = new XMLHttpRequest();
    xhr.open('post','https://hexschool-tutorial.herokuapp.com/api/signup',true);
    xhr.setRequestHeader('Content-type','application/json');
    var data = JSON.stringify(account);
    xhr.send(data);
    console.log(data)
    xhr.onload = function(){
        callbackData = JSON.parse(xhr.responseText);
        if (callbackData == "註冊帳號成功"){
            alert("註冊帳號成功");
        }else{
            alert("註冊帳號失敗");
        }
    }
}
    // fetch('https://hexschool-tutorial.herokuapp.com/api/signup').then(function(response){
    //     return response.text;
    // }).then(function(){

    // })
    



