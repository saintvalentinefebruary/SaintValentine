function Input(){
    login_ok = false;
    var data1 = document.getElementsByName("inputdata1")[0].value;
    data1 = data1.toUpperCase();

    if (data1 == "МИЛАШКЕР") {
        login_ok=true;
        window.location = "prize3.html";}             // КУДА? Перебросит нас скрипт
    if (login_ok == false) {
        alert("Ну ты че бля");}}     // КОНЕЦ ПАРОЛЬНОГО ВХОДА