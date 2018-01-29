
function validateUsername(name) {
	//console.log(name.length);
	var r = new RegExp(' ');
	return ((!r.test(name))&&(name.length > 3 && name.length <= 8));
}

function validatePassword(password) {
	// password should contain alteast 1 uppercase letter, 1 lowercase letter, 1 digit and 1 special characters
	// URL: https://account.cern.ch/account/Help/?kbid=020040
	var u = new RegExp("[A-Z]");
	var l = new RegExp("[a-z]");
	var d = new RegExp("[0-9]");
	var s = new RegExp("[$_@#]");
 	return (u.test(password) && l.test(password) && d.test(password) && s.test(password));
}

function validateCountry(country) {
	// Check if any country is selected
	// Check if country belong to given list: [AF, AL, DZ, AS, AD]
	return (country == 'AF' || country == 'AL' || country == 'DZ' || country == 'AS' || country == 'AD');
}

function validateEmail(email) {
	// Check if the email is valid
	var evl = new RegExp("[^@]\{1,\}@[^@]\{1,\}[.][^@]\{1,\}");
	return evl.test(email);
}

function validateGender(gender) {
	// Check if any one of radio button is selected
	return (gender == "Male" || gender == "Female");
}

function validateLanguage(langs) {
	// lang -> list of langs selected
	// Check if atleast one of the checkbox is checked
	for(var i = 0;i < langs.length ;i ++) 
	if(langs[i] == 'en' || langs[i] == 'hin' || langs[i] == 'tel') return true;

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
