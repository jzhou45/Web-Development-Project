function date(){
    setInterval(update, 1);
    function update(){
        let today = new Date();
        let ele = today.getDate();
        if (today.getDate() < 10){
            ele = "0" + today.getDate()}
        let date = (today.getMonth()+1)+'/'+ ele +"/"+today.getFullYear();
        let todate = document.getElementById("date");
        todate.innerHTML = "Today's Date: " + date;
    }
};


function time(){
    setInterval(update, 1);
    function update(){
        let today = new Date();
        let AMPM = "AM";
        if (today.getHours() >= 12){
            AMPM = " PM"}
        let ele = today.getMinutes();
        if (today.getMinutes() < 10){
            ele = "0" + today.getMinutes()}
        let ele2 = today.getSeconds();
        if (today.getSeconds() < 10){
            ele2 = "0" + today.getSeconds()}
        let hour = today.getHours()
        if (hour > 12){
            hour = today.getHours() % 12;
        }
        let time = hour + ":" + ele + ":" + ele2;
        let todate = document.getElementById("time");
        todate.innerHTML = "Current Time: "+ time + AMPM;
    }
};

function diffDate(){
    setInterval(update, 1);
    function update(){
        let today = new Date();
        let dueMonth = 4;
        let month = today.getMonth() + 1 - dueMonth;
        let dueDate = 24;
        let date = today.getDate() - dueDate;
        let dueYear = 2022;
        let year = today.getFullYear() - dueYear;
        let dueHour = 11 + 12;
        let hour = today.getHours() - dueHour;
        let dueMinute = 0;
        let minute = today.getMinutes() - dueMinute;
        let dueSecond = 0;
        let second = today.getSeconds() - dueSecond + 1;
        let time = Math.abs(year) + " year(s) " + Math.abs(month) + " month(s) " + Math.abs(date) + " day(s) " + Math.abs(hour) + " hour(s) " + Math.abs(minute) + " minute(s) " + Math.abs(second) + " second(s) ";
        let todate = document.getElementById("diffDate");
        
        if (year != dueYear && month != dueMonth && date != dueDate) {
            todate.innerHTML = "Assignment Was Due " + time + " Ago"
        }
        else{
            todate.innerHTML = "Time Until Assignment Is Due:" + time
        }
    }
};

function makeTable(){
    let table = document.createElement("table");
    let thead = document.createElement("thead");
    let tbody = document.createElement("tbody");
    
    table.appendChild(thead);
    table.appendChild(tbody);
    
    document.getElementById("table").appendChild(table);
    
    let row_1 = document.createElement('tr');
    let heading_1 = document.createElement('th');
    heading_1.innerHTML = "Month Number";
    heading_1.style.backgroundColor = "#005bbb";
    heading_1.style.color = "white";
    let heading_2 = document.createElement('th');
    heading_2.innerHTML = "Month Name";
    heading_2.style.backgroundColor = "#005bbb";
    heading_2.style.color = "white";
    let heading_3 = document.createElement('th');
    heading_3.innerHTML = "Days in Month";
    heading_3.style.backgroundColor = "#005bbb";
    heading_3.style.color = "white";
    row_1.appendChild(heading_1);
    row_1.appendChild(heading_2);
    row_1.appendChild(heading_3);
    thead.appendChild(row_1);
    
    let monthNumber = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"]
    let monthName = ["January","February","March","April","May","June","July","August","September","October","November","December"]
    let monthDays = ["31", "28/29", "31", "30", "31", "30", "31", "31", "30", "31", "30", "31"]
    
    for (let i in monthNumber){
        
        let row_2 = document.createElement('tr');
        let row_2_data_1 = document.createElement('td');
        row_2_data_1.innerHTML = monthNumber[i];
        let row_2_data_2 = document.createElement('td');
        row_2_data_2.innerHTML = monthName[i];
        let row_2_data_3 = document.createElement('td');
        row_2_data_3.innerHTML = monthDays[i];
        if (i % 2 == 0){
            row_2.appendChild(row_2_data_1).style.backgroundColor = "white";
            row_2.style.color = "black";
            row_2.appendChild(row_2_data_2).style.backgroundColor = "white";
            row_2.appendChild(row_2_data_3).style.backgroundColor = "white";
            tbody.appendChild(row_2).style.backgroundColor;
        }
        else{
            row_2.style.color = "black";
            row_2.appendChild(row_2_data_1).style.backgroundColor = "gray";
            row_2.appendChild(row_2_data_2).style.backgroundColor = "gray";
            row_2.appendChild(row_2_data_3).style.backgroundColor = "gray";
            tbody.appendChild(row_2);
        }
    }
};