let date =new Date();

// Lấy giờ hiện tại
let time = date.getHours();
if (time < 10) {
    greeting = "Good morning";
} else if (time < 20) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}
alert(greeting);