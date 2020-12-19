// Нули в дате
function zero_first_format(value) {
    if (value < 10) {value='0'+value;}
    return value;
}
// Вывод даты
function date_time() {
    var current_datetime = new Date();
    return zero_first_format(current_datetime.getDate()) + "." + zero_first_format(current_datetime.getMonth()+1) + "." + (current_datetime.getFullYear());
}
//Смена стиля
function styleNew(styleNew) {
    document.getElementById('table-style').setAttribute('href', styleNew);
}

document.getElementById("date").innerHTML = date_time(); //дата
document.getElementById("version").innerHTML = "v0.07"; //версия сайта
document.getElementById("name").innerHTML = "Copyright &copy Alyona Dovgaya"; //Автор
