$(document).ready(() => {
  $("#calc").click(() => {
    let bill = $("#billAmt").val();
    calcTip(bill);
    let percent = $("#percentage").val();
    calcTip(percent);
  });
 }

 function calcTip() {
     var bill = $("#billAmt").val();
     var percent = $("#percentage").val():

     if (billAmt === "" || serviceQual == 0) {
         alert("Please enter values");
         return;

     var tip = bill * (percent / 100)

     var total = tip.toFixed(3);
     $("#total").css("disply", "block");
     $("#tip").text(total)
 }

