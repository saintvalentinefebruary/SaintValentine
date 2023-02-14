function Input(){
    login_ok = false;
    var data1 = document.getElementsByName("inputdata1")[0].value;
    data1 = data1.toUpperCase();

    if (data1 == "200") {
        login_ok=true;
        window.location = "qcode.html";}             // КУДА? Перебросит нас скрипт
    if (login_ok == false) {
        alert("Посчитай ещё раз.");}}     // КОНЕЦ ПАРОЛЬНОГО ВХОДА