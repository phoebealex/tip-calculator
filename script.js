$(document).ready(function() {
 function calcTip() {
     var bill = $("#billAmt").val();
     var percent = $("#percentage").val();

     var tip = bill * (percent / 100);

     var total = tip.toFixed(2);
     $("#tip").text(total);
 }
     $("#calc").click(calcTip);
 })
