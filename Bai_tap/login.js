var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
function login(){
    username = document.getElementById("username").value;
    password = document.getElementById("password").value;
    console.log("username = " + username);
    console.log("pasword = " +password);
    if(username === "admin" && password === "123"){
        alert("Đăng nhập tài khoản Admin");
    }
    else if(username === "user" && password === "123"){
        alert("Đăng nhập tài khoản user");
    }
    else {
        alert("Tài khoản không tồn tại");
    }
}