function Input(){
    login_ok = false;
    var data1 = document.getElementsByName("inputdata1")[0].value;
    data1 = data1.toUpperCase();

    if (data1 == "АКУЛОСЬМИНОГ" || data == "АКУЛОСМИНОГ") {
        login_ok=true;
        window.location = "relax.html";}             // КУДА? Перебросит нас скрипт
    if (login_ok == false) {
        alert("Плохо ты знаешь своих любимых актёров");}}     // КОНЕЦ ПАРОЛЬНОГО ВХОДА