
var btn = document.getElementById("btn")
btn.onclick = function(){
let Username = document.getElementById
("Username").value
let email = document.getElementById
("password").value
let password = document.getElementById
("password").value
let confirm = document.getElementById
("confirm").value
if(Username.length != 0 ){}
  if(email.length != 0 ){}
    if(password.length >=3 ){
      }
     else{
      alert("password must be 3 caracters or more")
     }
     if(password == confirm){
        
            if (confirm("sign up complete . click ok to log in") == true) {
    console.log('ok');
    location.assign("project3.html")
  } else {
    console.log('no');
  }
       }
    else {
        alert("password dont match")}
}