let inputphysic = prompt("Enter the physic");
let inputchemmitry = prompt("Enter the chemmitry");
let inputbiology = prompt("Enter the biology");
let physic = parseInt(inputphysic);
let chemmitry = parseInt(inputchemmitry);
let biology = parseInt(inputbiology);
let area =( physic + chemmitry + biology) / 3;
document.write("The area is: " + area);