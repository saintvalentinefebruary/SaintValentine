function Input(){
    login_ok = false;
    var data1 = document.getElementsByName("inputdata1")[0].value;
    data1 = data1.toUpperCase();

    if (data1 == "ПИДОРАСКА") {
        login_ok=true;
        window.location = "graph1.html";}             // КУДА? Перебросит нас скрипт
    if (login_ok == false) {
        alert("Не только так");}}     // КОНЕЦ ПАРОЛЬНОГО ВХОДА