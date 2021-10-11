function calculate(){
    if(document.getElementById("hour").value != '(hour)' && document.getElementById("minute").value != '(minute)') {
        document.getElementById("start").style.display = "none";
        let newTime = new Date();

        if(document.getElementById("hour").value == 12) {
            document.getElementById("hour").value = 0;
        }

        if(document.getElementById("ampm").value == "AM") {
            newTime.setHours(document.getElementById("hour").value);
        }
        else if(document.getElementById("ampm").value == "PM") {
            newTime.setHours(+document.getElementById("hour").value + 12);
        }

        newTime.setMinutes(document.getElementById("minute").value);

        let res1 = new Date(newTime.getTime() - 105*60000);
        let res2 = new Date(res1.getTime() - 90*60000);
        let res3 = new Date(res2.getTime() - 90*60000);
        let res4 = new Date(res3.getTime() - 90*60000);
        let res5 = new Date(res4.getTime() - 90*60000);
        let res6 = new Date(res5.getTime() - 90*60000);

        function retDate(dateObj) {
            let finalOP = '';
            let pm = false;
            if(dateObj.getHours() > 12) {
                finalOP = dateObj.getHours() - 12;
                pm = true;
            } else if(dateObj.getHours() < 12 && dateObj.getHours() != 0) {
                finalOP = dateObj.getHours();
            } else if(dateObj.getHours() == 0){
                finalOP = "12";
            } else if(dateObj.getHours() == 12){
                finalOP = "12";
                pm = true;
            }
            if(dateObj.getMinutes() < 10) {
                finalOP = finalOP + ":0" + dateObj.getMinutes();
            } else {
                finalOP = finalOP + ":" + dateObj.getMinutes();
            }
            if(pm == true) {
                finalOP = finalOP + " PM";
            } else {
                finalOP = finalOP + " AM";
            }
            return finalOP;
        }

        document.getElementById('result6').innerHTML = String(retDate(res1));
        document.getElementById('result5').innerHTML = String(retDate(res2));
        document.getElementById('result4').innerHTML = String(retDate(res3));
        document.getElementById('result3').innerHTML = String(retDate(res4));
        document.getElementById('result2').innerHTML = String(retDate(res5));
        document.getElementById('result1').innerHTML = String(retDate(res6));

        document.getElementById('results').style.display = '';
    } // end hour/minute check if
    else {
        alert("Select hour, minute and AM/PM before calculating. Seleccione hora, minuto y AM/PM antes de calcular.");
    } // end not-filled check
} // end calculate

function zzz() {
    document.getElementById("start").style.display = "none";
    let zDate = new Date();

    let res1 = new Date(zDate.getTime() + 105*60000);
    let res2 = new Date(res1.getTime() + 90*60000);
    let res3 = new Date(res2.getTime() + 90*60000);
    let res4 = new Date(res3.getTime() + 90*60000);
    let res5 = new Date(res4.getTime() + 90*60000);
    let res6 = new Date(res5.getTime() + 90*60000);

    function retDate(dateObj) {
        let finalOP = '';
        let pm = false;
        if(dateObj.getHours() > 12) {
            finalOP = dateObj.getHours() - 12;
            pm = true;
        } else if(dateObj.getHours() < 12 && dateObj.getHours() != 0) {
            finalOP = dateObj.getHours();
        } else if(dateObj.getHours() == 0) {
            finalOP = "12";
        } else if(dateObj.getHours() == 12) {
            finalOP = "12";
            pm = true;
        }
        if(dateObj.getMinutes() < 10) {
            finalOP = finalOP + ":0" + dateObj.getMinutes();
        } else {
            finalOP = finalOP + ":" + dateObj.getMinutes();
        }
        if(pm == true) {
            finalOP = finalOP + " PM";
        } else {
            finalOP = finalOP + " AM";
        }
        return finalOP;
    }

    document.getElementById('resultNow1').innerHTML = String(retDate(res1));
    document.getElementById('resultNow2').innerHTML = String(retDate(res2));
    document.getElementById('resultNow3').innerHTML = String(retDate(res3));
    document.getElementById('resultNow4').innerHTML = String(retDate(res4));
    document.getElementById('resultNow5').innerHTML = String(retDate(res5));
    document.getElementById('resultNow6').innerHTML = String(retDate(res6));

    document.getElementById('resultsNow').style.display = '';
}