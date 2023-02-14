function Input(){
    login_ok = false;
    var data1 = document.getElementsByName("inputdata1")[0].value;
    data1 = data1.toUpperCase();

    if (data1 >= 37 && data1 <=51) {
        login_ok=true;
        window.location = "photo.html";}             // КУДА? Перебросит нас скрипт
    if (login_ok == false) {
        alert("Попробуй посчитать ещё раз");}}     // КОНЕЦ ПАРОЛЬНОГО ВХОДА