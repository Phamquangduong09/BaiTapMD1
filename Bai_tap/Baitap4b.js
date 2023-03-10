function S1 (){
    let A= document.getElementById("number1").value;
    let B = document.getElementById("number2").value;
    let C = A * A
    let D = Math.pow(A,B)
    document.getElementById("binhphuong").innerHTML = C ;
    document.getElementById("mub").innerHTML = D ;
}