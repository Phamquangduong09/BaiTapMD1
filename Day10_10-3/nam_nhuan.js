let year = parseInt(prompt("Enter a year"));
if (year % 4 == 0) {
    if (year % 100 == 0) {
        if (year % 400 == 0) {
            alert(year + " Năm Nhuận");
        } else {
            alert(year + " Không Nhuận");
        }
    } else {
        alert(year + " Năm Nhuận");
    }
} else {
    alert(year + " Không Nhuận");
}