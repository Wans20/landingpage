function message(id, text) {
    document.getElementById(id).innerHTML = text ;
    document.getElementById(id).style.display = "inline";
}

const usernama="admin";
const pass=123;

function LoginCek() {
    // GET INPUTAN
    let username = document.getElementById("user").value;
    let password=document.getElementById("pass").value;
    if(username===""||username===null){
        message("alert","Please Input Username First !!!");
    }else if(password==="" || password===null){
        message("alert","Please,Don't Forget To Enter Your Password Too !!!");
    }else{
        if(username==usernama && password==pass) { 
            alert ("LOGIN SUCCESS, WELCOME TO MY STORE");
            window.location.href="index.html";
        } else if(username != usernama && password != pass) {
            // console.log("isi username", username);
            // console.log("isi password", password);
            document.getElementById("user").value=null;
            document.getElementById("pass").value=null;
            alert("Password dan Username Tidak Sama");
        } else if (username != usernama){
            document.getElementById("user").value=null;
            alert ("Username Tidak Sama");
        } else {
            document.getElementById("pass").value=null;
            alert ("Password Tidak Sama");
        } 
    }
}