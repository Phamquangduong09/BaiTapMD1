function tinhngay(){
    let month = +document.getElementById("month").value;
    switch (month) {
        case 1:
            alert("tháng có 31 ngày");
            break;
        case 2:
            alert("tháng có 28 hoặc 29 ngày");
            break;
        case 3:
            alert("tháng có 31 ngày");;
            break;
        case 4:
            alert("tháng có 30 ngày");;
            break;
        case 5:
            alert("tháng có 31 ngày");;
            break;
        case 6:
            alert("tháng có 30 ngày");;
            break;
        case 7:
            alert("tháng có 31 ngày");;
            break;
    }

}
