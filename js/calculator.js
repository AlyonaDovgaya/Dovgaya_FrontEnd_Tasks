var hist = [];
var isFloatNum = true;
function insert(num) {
  if(document.getElementById('Integer').checked) {
        isFloatNum = false;
    }
    else
    {
        isFloatNum = true;
    }
    if (num == '.' && isFloatNum == true){
      document.form.result.value =
      document.form.result.value + num;

    }
    else if(num == '.' && isFloatNum == false){
      document.form.result.value =
      document.form.result.value;
    }
    else {
      document.form.result.value = document.form.result.value + num;
    }
}
/*clearing the input field*/
function clean() {
    document.form.result.value = "";
}
/*erase the last element*/
function back() {
    var val = document.form.result.value;
    document.form.result.value = val.substring(0, val.length - 1);
}
/*array formation*/
function equal(history) {
    var val = document.form.result.value;
    if(val) {
      document.form.result.value = eval(val);
    }
    hist.push(val);
    document.getElementById('history').innerHTML = hist;
}
/*show div-history*/
function showHistory(){
  document.getElementById("history").style.visibility = "visible";
}
