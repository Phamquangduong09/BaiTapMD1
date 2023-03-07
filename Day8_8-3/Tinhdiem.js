inputphysic = prompt("Enter the physic");
inputchemmitry = prompt("Enter the chemmitry");
inputbiology = prompt("Enter the biology");
let physic = parseInt(inputphysic);
let chemmitry = parseInt(inputchemmitry);
let biology = parseInt(inputbiology);
let area =( physic + chemmitry + biology) / 3;
document.write("The area is: " + area);