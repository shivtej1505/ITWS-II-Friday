
function validateUsername(name) {
	//console.log(name.length);
	if (name.length > 3 && name.length <= 8)
	{
		for (var i = name.length - 1; i >= 0; i--) {
			if (name[i] == " " ) {
				return false;
			}
			
		}
		return true;
	}
	return false;
}

function validatePassword(password) {
	// password should contain alteast 1 uppercase letter, 1 lowercase letter, 1 digit and 1 special characters
	// URL: https://account.cern.ch/account/Help/?kbid=020040
var u=0, l=0, d=0, s=0;
	for(i=0;i<password.length;i++){
		if(password[i]==password[i].toUpperCase){
			u=u+1;
		}
		if(password[i]==password[i].toLowerCase){
			l=l+1;	
		}
		if(password[i]==[1-9]){
			d=d+1;
		}
		else if(password[i]!='\s'){
			s=s+1;
		}
	}
	if(u==0||l==0||d==0||s==0){
		//document.getElementById("submitbtn").setAttribute("disabled");
		return false;
	}
return true;
}

function validateCountry(country) {
	// Check if any country is selected
	// Check if country belong to given list: [AF, AL, DZ, AS, AD]
	switch(country){
		case AF:
		case AL:
		case DZ:
		case AS:
		case AD:
			return true;
	}
	return false;
}

function validateEmail(email) {
	// Check if the email is valid
	var i=0,before=0,after=0;
	if(email.length==0)
		return false;
	while(email[i]!='@' && i<email.length)
	{
		if(email[i]=='.')
			return false;
		before++;
		i++;
	}
	while(email[i]!='.'&&email.length)
	{
		after++;
		i++;
	}
	if(before==0 || after == 0)
		return false;
return true;
	
}

function validateGender(gender) {
	// Check if any one of radio button is selected
	if ( gender == "Male" || gender == "Female") {
		return true ;
	}
	return false;
}

function validateLanguage(langs) {
	// lang -> list of langs selected
	// Check if atleast one of the checkbox is checked
	if (langs == "en" || langs == "hin" || langs == "tel") {
		return true;
	}
	return false;
}


// Auxillary function which parse input from the form fields
function checkForm() {
	// parsing username from the form
	let name = document.getElementById("username").value;

	if (validateUsername(name) /* && validatePassword()  && validateCountry(country) && validateEmail(email)
			&& validateGender(gender) && validateLanguage(langs) */) {
		// If all validations are successful, then enable the submit button
		document.getElementById("submitbtn").disabled = false;
		msg.innerHTML = "Form contains no errors";
		console.log("Form contains no errors");
	} else {
		// If even one validation fails, disable submit button
		document.getElementById("submitbtn").disabled = true;
		msg.innerHTML = "Errors in the form";
		console.log("Errors in the form");
	}
}

// Run `checkForm` function on each and every keyup event
document.getElementsByTagName("body")[0].onkeyup = function() {
	checkForm();
}

checkForm();
