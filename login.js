var x = document.getElementById("login");
var y = document.getElementById("register");
var z = document.getElementById("btn");

function register(){
  x.style.left = "-400px";
  y.style.left = "50px";
  z.style.left = "100px";
}
function login(){
  x.style.left = "50px";
  y.style.left = "450px";
  z.style.left = "0";
}


function setCookie(cname,cvalue,exdays) {
var d = new Date();
d.setTime(d.getTime() + (exdays*24*60*60*1000));
var expires = "expires=" + d.toGMTString();
document.cookie = cname+"="+cvalue+"; "+expires;
}
function getCookie(cname) {
var name = cname + "=";
var ca = document.cookie.split(';');
for(var i=0; i<ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0)==' ') c = c.substring(1);
    if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
    }
}
return "";
}

function checkCookie() {
  for (var i = 1; i < 2; i++) {
    var submit =getCookie("clear"+ i);
    if (submit != "") {
      document.getElementById("account").style.display = "inline-block";
      document.getElementById("navlogin").style.display = "none";
    }
  }
  }

function submit1(){
      var submit=getCookie("clear1");
      submit = "loggedin";
    setCookie("clear1", submit, 30);
    loginAlert();
      
  }
  function submit2(){
    var submit=getCookie("clear2");
    submit = "registered";
    setCookie("clear2", submit, 30);
    registeredAlert();
  }
function logout(){
  var submit = getCookie("clear1")
  submit = "";
  setCookie("clear1", submit, 30);
  logoutAlert();
}
  function loginAlert()
  {
    alert ("You're logged in! Please wait to be redirected to the homepage or click on home.");
    window.location.href = "/final_project/index.html";
	
  }
  function registeredAlert()
  {
    var v = document.getElementById("myCheck").required;
      //window.location.reload();
	
  }
  function logoutAlert()
  {
    alert ("You have logged out!");
    window.location.reload();
	
  }
