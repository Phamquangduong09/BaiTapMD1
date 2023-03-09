function ketqua() {
    let number1 = +document.getElementById("numbera").value;
    let number2 = +document.getElementById("numberb").value;
    let cong = number1 + number2 ;
    let tru=number1-number2 ;
    let nhan=number1*number2 ;
    let chia=number1/number2 ;
document.getElementById("ketqua").innerHTML = number1 + "+" + number2 + " = " +cong;

}