function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username === "admin" && password === "123") {
        alert("Đăng nhập tài khoản admin");
    } else if (username === "user" && password === "123") {
        alert("Đăng nhập tài khoản user");
    } else
        alert("Tài khoản không tồn tại")
}
