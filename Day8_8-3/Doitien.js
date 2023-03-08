function showMessage() {
    let Amount = document.getElementById("Amount").value;
    let From = document.getElementById("From").value;
    let To = document.getElementById("To").value;
    let ketqua;


if (From === "USD" && To === "VND") {
    ketqua = Amount * 23000
} else if (From === "VND" && To === "USD") {
    ketqua = Amount / 23000
}
document.getElementById("ketqua").innerHTML = ketqua
}



