 document.getElementById("calc").onclick = function () {
     calcTip();
 })

 function calcTip() {
     var bill = document.getElementById("billAmt").value;
     var percent = document.getElementById("percentage").value;

     if (billAmt === "" || serviceQual == 0) {
         alert("Please enter values");
         return;

         var tip = bill * (percent / 100)

         if (percent == "30") {
             var tip = bill * 0.3;
         } else if (percent == "20") {
             var tip = bill * 0.2;
         } else if (percent == "15") {
             var tip = bill * 0.15;
         } else if (percent == "10") {
             var tip = bill * 0.1;
         } else if (percent == "5") {
             var tip = bill * 0.05;
         }

         var total = Math.round(tip);
         document.getElementById("total").style.disply = "block";
         document.getElementById("tip").innerHTML = total;
     }
