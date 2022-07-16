function returnToPage(){
    document.getElementById("myButton").onclick = function () {
        location.href = "../html/MultimediaPages.html";
    }
};

function blinking(){
    let ele = document.getElementById("blinks");
    let num = 2;
    setInterval(backandforth, 500);
    document.getElementById("stop").onclick = function() {
        num = 1;
        ele.style.visibility = "visible";
        ele.style.color = "000000";
        }
    function backandforth(){
        if (num%2 == 0){
            ele.style.visibility="hidden";
            num += 1;
        }
        if (num == 3){
            ele.style.visibility="visible";
            ele.style.color= "#FF0000";
            num += 1;
        }
        if (num ==5) {
            ele.style.visibility="visible";
            ele.style.color="#FFA500";
            num += 1;
        }
        if (num ==7) {
            ele.style.visibility="visible";
            ele.style.color="FFFF00";
            num += 1;
        }
        if (num ==9) {
            ele.style.visibility="visible";
            ele.style.color="#00FF00";
            num += 1;
        }
        if (num ==11) {
            ele.style.visibility="visible";
            ele.style.color="#0000FF";
            num += 1;
        }
        if (num ==13) {
            ele.style.visibility="visible";
            ele.style.color="#4B0082";
            num += 1;
        }
        if (num ==15) {
            ele.style.visibility="visible";
            ele.style.color="6a0dad";
            num = 2;
        }
    }	
};

function fastblinking(){
    alert("WARNING: PHOTOSENSITIVITY/EPILEPSY SEIZURES");
    alert("The text will contain flashing lights, it will not be safe for those with epilepsy and other conditions with sensitivity to light.");
    alert("Please close the page right now if you have any of the prior mentioned conditons.");
    let ele = document.getElementById("blinks");
    let num = 2;
    setInterval(backandforth, 1);
    document.getElementById("stop").onclick = function() {
        num = 1;
        ele.style.visibility = "visible";
        ele.style.color = "000000";
        }
    function backandforth(){
        if (num%2 == 0){
            ele.style.visibility="hidden";
            num += 1;
        }
        if (num == 3){
            ele.style.visibility="visible";
            ele.style.color= "#FF0000";
            num += 1;
        }
        if (num ==5) {
            ele.style.visibility="visible";
            ele.style.color="#FFA500";
            num += 1;
        }
        if (num ==7) {
            ele.style.visibility="visible";
            ele.style.color="FFFF00";
            num += 1;
        }
        if (num ==9) {
            ele.style.visibility="visible";
            ele.style.color="#00FF00";
            num += 1;
        }
        if (num ==11) {
            ele.style.visibility="visible";
            ele.style.color="#0000FF";
            num += 1;
        }
        if (num ==13) {
            ele.style.visibility="visible";
            ele.style.color="#4B0082";
            num += 1;
        }
        if (num ==15) {
            ele.style.visibility="visible";
            ele.style.color="6a0dad";
            num = 2;
        }
    }	
};