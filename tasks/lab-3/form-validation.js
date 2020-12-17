
function validateUsername(name) {
	//console.log(name.length);
	if (name.length > 3 && name.length < 8)
		return true;
	return false;
}

function validatePassword(password) {
	// password should contain alteast 1 uppercase letter, 1 lowercase letter, 1 digit and 1 special characters
	// URL: https://account.cern.ch/account/Help/?kbid=020040
	var Upper = 0;
	var Lower = 0;
	var Digit = 0;
	var Special = 0;
	for(i = 0; i < password.length;i++)
	{
		if(password.charCodeAt(i) > 64 && password.charCodeAt(i) < 91)
		Upper = 1;
		else if(password.charCodeAt(i) > 96 && password.charCodeAt(i) < 123)
		Lower = 1;
		else if(password.charCodeAt(i) > 47 && password.charCodeAt(i) < 58)
		Digit = 1;
		else
		Special = 1;
	}
	if(Digit == 1 && Upper == 1 && Lower == 1 && Special == 1)
	return true;
	else
	return false;
}

function validateCountry(country) {
	// Check if any country is selected
	// Check if country belong to given list: [AF, AL, DZ, AS, AD]
	if(country == "AF" || country == "AL" || country == "DZ" || country == "AS" || country == "AD")
	return true;
	else
	return false;
}

function validateEmail(email) {
	// Check if the email is valid
	var rge = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
	return rge.test(email);
}

function validateGender(gender) {
	// Check if any one of radio button is selected
	if(gender == "Male" || gender == "Female")
	return true;
	else
	return false;
}

function validateLanguage(langs) {
	// lang -> list of langs selected
	// Check if atleast one of the checkbox is checked
	if(langs.length < 1)
	return false;
	for(i = 0;i < langs.length;i++)
	{
		var x = langs[i];
		if(x == "en")
	continue;
	else if(x == "hin")
	continue;
	else if(x == "tel")
	continue;
	else
	return false;
	}
	return true;
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
