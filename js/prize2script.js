function Input(){
    login_ok = false;
    var data1 = document.getElementsByName("inputdata1")[0].value;
    data1 = data1.toUpperCase();
    var data2 = document.getElementsByName("inputdata2")[0].value;
    data2 = data2.toUpperCase();

    if (data1 == "YULIANA" && data2 == "BEEPTOBEEP0907") {
        login_ok=true;
        window.location = "Sercan.html";}             // КУДА? Перебросит нас скрипт
    if (login_ok == false) {
        alert("Повнимательнее)");}}     // КОНЕЦ ПАРОЛЬНОГО ВХОДА