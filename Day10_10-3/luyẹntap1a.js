function number(){
    let  number1= document.getElementById("numbera").value;
    let number2= document.getElementById("numberb").value;
    if  (number1 % number2 === 0) {
        alert("a chia het cho b");
    }else{
        alert("khong chia het");
    }
}