function Input(){
    login_ok = false;
    var data1 = document.getElementsByName("inputdata1")[0].value;
    data1 = data1.toUpperCase();

    if (data1 == "15.12.2022" || data1 == "15122022") {
        login_ok=true;
        window.location = "milka.html";}             // КУДА? Перебросит нас скрипт
    if (login_ok == false) {
        alert("Нуу, ты же помнишь. Либо проверь, правильно ли ты ввела ответ.");}}     // КОНЕЦ ПАРОЛЬНОГО ВХОДА