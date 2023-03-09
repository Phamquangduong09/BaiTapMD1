function bmi() {
    let kilogam = document.getElementById("kilogam").value;
    let met = document.getElementById("met").value;
    let bmi = kilogam / (met * met);
    if (bmi < 18)
        alert("Underweight");
    else if (bmi < 25.0)
        alert("Normal");
    else if (bmi < 30.0)
       alert("Overweight");
    else
        alert("Obese");
}