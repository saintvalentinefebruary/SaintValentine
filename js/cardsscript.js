function Input(){
    login_ok = false;
    var data1 = document.getElementsByName("inputdata1")[0].value;
    data1 = data1.toUpperCase();

    if (data1 == "КОРПОРАТИВ КАМЕРГЕРА" || data1 == "КОРПОРАТ КАМЕРГЕРА" || data1 == "КАМЕРГЕР КОРПОРАТИВ") {
        login_ok=true;
        window.location = "emoji.html";}             // КУДА? Перебросит нас скрипт
    if (login_ok == false) {
        alert("Подумай ещё, либо проверь ответ на ошибки.");}}     // КОНЕЦ ПАРОЛЬНОГО ВХОДА