function bmi() {
    let kilogam = document.getElementById("kilogam").value;
    let met = document.getElementById("met").value;
    let bmi = "kilogam" / ("met" * "met");
    let ketqua;
    if (bmi < 18)
        document.write("Underweight");
    else if (bmi < 25.0)
        document.write("Normal");
    else if (bmi < 30.0)
        document.write("Overweight");
    else
        document.write("Obese");
}