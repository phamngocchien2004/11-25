/*var username = document.getElementById("username");
var email = document.getElementById("email");
var password = document.getElementById("password");*/

/*let errorMsg = document.getElementsByClassName("error"),
    successIcon=document.getElementsByClassName("success-icon"),
    failureIcon=document.getElementsByClassName("failure-icon")*/

    let classes=(classes) => document.getElementsByClassName(classes);


let id = (id) => document.getElementById(id);

let username= id("username"),
    email=id("email"),
    password=id("password"),
    errorMsg=classes("error"),
    successIcon=classes("success-icon"),
    failureIcon=classes("failure-icon");

form.addEventListener("submit",(e) => {
    e.preventDefault();
    engine(username,0,"Username can not be blank");
    engine(email,1,"Email can not be blank");
    engine(password,2,"Password can not be blank");

});

let engine = (id, serial, message) => {
    if (id.value.trim()==="") {
        errorMsg[serial].innerHTML=message;
        successIcon[serial].style.opacity="0";
        failureIcon[serial].style.opacity="1";
        id.style.border="2px solid red";
    } else {
        errorMsg[serial].innerHTML="";
        successIcon[serial].style.opacity="1";
        failureIcon[serial].style.opacity="0";
        id.style.border="2px solid red";

    }


}
