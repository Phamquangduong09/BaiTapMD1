function cal() {
    let a = +document.getElementById("number1").value;
    let b = +document.getElementById("number2").value;
    let tong = ((b-a+1) * (a+b)) / 2;
    if (b < a)
        document.getElementById('result').innerHTML = "nhập sai";
    else if (a===b)
        document.getElementById('result').innerHTML = "tổng các số từ a đến b là :" +a;
    else

        document.getElementById("result").innerHTML = "tổng các số từ a đến b là : " + tong;


}