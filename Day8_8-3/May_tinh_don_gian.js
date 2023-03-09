function cong() {
    let a = +document.getElementById("a").value;
    let b = +document.getElementById("b").value;
    let cong = parseInt(a)+parseInt(b)
    document.getElementById("ketqua").innerHTML =cong
}
function tru() {
    let a = document.getElementById("a").value;
    let b = document.getElementById("b").value;
    let tru = parseInt(a)-parseInt(b)
    document.getElementById("ketqua").innerHTML = tru
}
function nhan() {
    let a = document.getElementById("a").value;
    let b = document.getElementById("b").value;
    let nhan = parseInt(a)*parseInt(b)
    document.getElementById("ketqua").innerHTML = nhan

}
function chia() {
    let a = document.getElementById("a").value;
    let b = document.getElementById("b").value;
  let chia = parseInt(a)/parseInt(b)
    document.getElementById("ketqua").innerHTML = chia
}


