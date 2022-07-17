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
function addToForm(){
	let arr = ["Sierra Blue", "Graphite", "Gold", "Silver", "Alpine Green", "RED", "Starlight", "Midnight", "Blue", "Pink", "Green", "Pacific Blue", "Black", "White", "Purple", "Midnight Green", "Space Grey", "Rose Gold", "Light Purple", "Light Yellow", "Light Green", "Coral"];
	let sortedArr = arr.sort();
	for (var i = 0; i < arr.length; i++) {
		$('#field').append($("<input type ='radio' onclick='changeColor(this.value);' value = '" + sortedArr[i] + "' >" + sortedArr[i] + "</input><br>").attr("name", "radioColors"));
	}
};
function changeColor(color){
	let arr = ["Sierra Blue", "Graphite", "Gold", "Silver", "Alpine Green", "RED", "Starlight", "Midnight", "Blue", "Pink", "Green", "Pacific Blue", "Black", "White", "Purple", "Midnight Green", "Space Grey", "Rose Gold", "Light Purple", "Light Yellow", "Light Green", "Coral"];
	let hexArr = ["#9BB5CE", "#5C5B57", "#F9E5C9", "#F5F5F0", "#505F4E", "#A50011", "#F9F3EE", "#171E27", "#215E7C", "#FAE0D8", "#364935", "#2E4755", "#201D24", "#FBF7F4", "#B8AFE6", "#4E5851", "#535150", "#FAD7BD", "#D1CDDA", "#FFE681", "#AEE1CD", "#EE7762"];
	let hash = {};
	for (let i in arr){
		hash[arr[i]] = hexArr[i]}
	let ele = hash[color];
	document.body.style.backgroundColor = ele;
	let darkColor = ["Alpine Green", "Black", "Blue", "Graphite", "Green", "Midnight", "Midnight Green", "Pacific Blue", "RED", "Space Grey"]
	if (darkColor.includes(color)){
		document.body.style.color = "white";
		document.getElementById("colorForm").style.borderColor = "white";
		document.getElementById("otherForm").style.borderColor = "white";
	}
	else{
		document.body.style.color = "black";
		document.getElementById("colorForm").style.borderColor = "black";
		document.getElementById("otherForm").style.borderColor = "white";
	}
};
function validateForm() {
	let fname = document.forms["myForm"]["firstname"].value;
	if (fname == "") {
		alert("Name must be filled out");
		return false;
	}
	let lname = document.forms["myForm"]["lastname"].value;
	if (lname == "") {
		alert("Name must be filled out");
		return false;
	}
	let zip = document.forms["myForm"]["zip"].value;
	if (zip == "") {
		alert("Zip code must be filled out");
		return false;
	}
	let nums = "0123456789";
	let zipSplit = zip.split('-');
	for (let charz of zipSplit){
		for (let charzchar of charz) {
			if (!nums.includes(charzchar)){
				alert("Zip codes must follow the following format: 55555 or 99999-9999");
				return false;
			}
		}
	}
	if (zip.length == 10){
		if ((zipSplit[0].length != 5) && (zipSplit[1].length != 4) && (zip[5] != "-")) {
			alert("Zip codes must follow the following format: 55555 or 99999-9999");
			return false;
		}
	}
	let phone = document.forms["myForm"]["phone"].value;
	if (phone == "") {
		alert("Phone number must be filled out");
		return false;
	}
	if (!(phone.length == 10 || phone.length == 14)){
		alert("Phone numbers must follow the following format: 0000000000 or (333) 333-4444 1");
		return false;
	}
	let legalPhone = "0123456789-() ";
	for (let phoneIdx of phone){
		if (!legalPhone.includes(phoneIdx)){
			alert("Phone numbers must follow the following format: 0000000000 or (333) 333-4444 2");
			return false;
		}
	}
	if (phone.length == 14){
		let splitPhone = phone.split(" ");
		let areaCode = splitPhone[0];
		if (!(areaCode[0] == "(" && areaCode[4] == ")")){
			alert("Phone numbers must follow the following format: 0000000000 or (333) 333-4444 3");
			return false;
		}
		if (areaCode.length != 5){
			alert("Phone numbers must follow the following format: 0000000000 or (333) 333-4444");
			return false;
		}
		if (!(legalPhone.includes(areaCode[1]) || legalPhone.includes(areaCode[2]) || legalPhone.includes(areaCode[3]))){
			alert("Phone numbers must follow the following format: 0000000000 or (333) 333-4444");
			return false;
		}
		let splitPhone2 = splitPhone[1].split("-");
		if (splitPhone2[0].length != 3){
			alert("Phone numbers must follow the following format: 0000000000 or (333) 333-4444");
			return false;
		}
		for (let sp20 of splitPhone2[0]){
			if (!legalPhone.includes(sp20)){
				alert("Phone numbers must follow the following format: 0000000000 or (333) 333-4444");
				return false;
			}
		}
		for (let sp21 of splitPhone2[1]){
			if (!legalPhone.includes(sp20)){
				alert("Phone numbers must follow the following format: 0000000000 or (333) 333-4444");
				return false;
			}
		}
		if (splitPhone2[1].length != 4){
			alert("Phone numbers must follow the following format: 0000000000 or (333) 333-4444");
			return false;
		}
	}
	let email = document.forms["myForm"]["email"].value;
	if (email == "") {
		alert("E-mail must be filled out");
		return false;
	}
	let em = email.split("@");
	if (em.length != 2){
		alert("E-mail must be filled out");
		return false;
	}
	let em2 = em.split(".");
	if (em2.length != 2){
		alert("E-mails must follow the following format: example@website.com");
		return false;
	}
};