function Input(){
    login_ok = false;
    var data1 = document.getElementsByName("inputdata1")[0].value;
    data1 = data1.toUpperCase();

    if (data1 == "LOVE") {
        login_ok=true;
        window.location = "mainprize.html";}             // КУДА? Перебросит нас скрипт
    if (login_ok == false) {
        alert("Повнимательнее");}}     // КОНЕЦ ПАРОЛЬНОГО ВХОДА