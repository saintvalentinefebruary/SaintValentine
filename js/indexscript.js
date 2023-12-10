function Input() {
    var password = document.getElementById("inputid").value;

    if (password === "1720") {
        window.location = "poem1.html";
        return false;
    } else {
        alert("Для продолжения необходимо ввести пароль от часов Юлианы.");
        return false;
    }
}