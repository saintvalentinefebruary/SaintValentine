function Input() {
    var password = document.getElementById("inputid").value;

    if (password === "1720") {
        window.location = "textmessage2.html";
        return false;
    } else {
        alert("Для продолжения необходимо ввести пароль от часов Юлианы.");
        return false;
    }
}