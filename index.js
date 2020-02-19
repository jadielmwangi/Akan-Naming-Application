var maleNames = ["Kwasi", "Kwandwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
var weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
function giveName() {
    var year = parseInt(document.getElementById("year").value);
    var month = parseInt(document.getElementById("month").value);
    var day = parseInt(document.getElementById("day").value);
    var gender = getGender();
    var date = new Date(year + "/" + month + "/" + day);
    var bornDay = date.getDay();
    var validate = (year > 0 && (month > 0 && month <= 12) && (day > 0 && day <= 31));
    var validateGender = (gender !== "male" && gender !== "female");
    if (year <= 0) {
        alert("The year is invalid");
    }
    else if (month <= 0 || month > 12) {
        alert("The month is invalid");
    }
    else if (day <= 0 || day > 31) {
        alert("The date is invalid");
    }
    else if (validate == false) {
        alert("Invalid Input");
    }
    var akanName;
    if (gender === "male" && year > 0 && month > 0 && month < 13 && day > 0 && day < 32) {
        akanName = maleNames[bornDay];
        alert("Hello! you were born on " + weekDays[bornDay] + " and your Akan name is " + akanName);
    }
    else if (gender === "female" && year > 0 && month > 0 && month < 13 && day > 0 && day < 32) {
        akanName = femaleNames[bornDay];
        alert("Hello! you were born on " + weekDays[bornDay] + " and your Akan name is " + akanName);
    }
}
function getGender() {
    var gender = document.getElementsByName("gender");
    for (j = 0; j < gender.length; j++) {
        if (gender[j].checked) {
            return (gender[j].value)
        }
    }
}