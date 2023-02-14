function Input(){
    login_ok = false;
    var data1 = document.getElementsByName("inputdata1")[0].value;
    data1 = data1.toUpperCase();

    if (data1 >= 38 && data1 <=54) {
        login_ok=true;
        window.location = "photo.html";}             // КУДА? Перебросит нас скрипт
    if (login_ok == false) {
        alert("Попробуй посчитать ещё раз");}}     // КОНЕЦ ПАРОЛЬНОГО ВХОДА