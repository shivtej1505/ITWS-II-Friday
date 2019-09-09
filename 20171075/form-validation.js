// Return true if input is valid

function validateUsername(name) {
	// Length of username should be between 4 to 8
	// It should not contain any whitespace
	var r = /[ ]/;
	if(!r.test(name) && name.length>=4 && name.length<=8)
		return true;
	else
		return false;
}

function validatePassword(password) {
	// password should contain alteast 1 uppercase letter, 1 lowercase letter, 1 digit and 1 special characters
	// URL: https://account.cern.ch/account/Help/?kbid=020040
	var a = /[A-Z]/;
	var b = /[a-z]/;
	var c = /[0-8]/;
	var d = /[^A-Za-z0-9]/;
	if(a.test(password) && b.test(password) && c.test(password) && d.test(password))
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
	var r = /^[^@]+[@][^@.]+[.][^.]+/;
	if(r.test(email))
		return true;
	else
		return false;
}

function validateGender(gender) {
	// Check if any one of radio button is selected
  if(gender == "Male" || gender == "Female")
    return true;
  else
    return false;
}

function validateLanguage(lang) {
	// lang -> list of langs selected
	// Check if atleast one of the checkbox is checked
  var arr = ["en","hin","tel"];
  if(lang != [] && lang.some(val => arr.indexOf(val) !== -1))
    return true;
  else
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
