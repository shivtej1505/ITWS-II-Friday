function validateUsername(name) {
	//console.log(name.length);
	if (name.length > 3 && name.length < 8)
		return true;
	return false;
}

function validatePassword(password) {
	// password should contain alteast 1 uppercase letter, 1 lowercase letter, 1 digit and 1 special characters
	// URL: https://account.cern.ch/account/Help/?kbid=020040
	
	return /[A-Z]/.test(password)&&/[a-z]/.test(password)&&/[0-9]/.test(password)&&/[~!@#$%^&*]/.test(password);
}

function validateCountry(country) {
	// Check if any country is selected
	// Check if country belong to given list: [AF, AL, DZ, AS, AD]
	//var x=document.getElementById("country");
	if(country==="AF" || country==="AL" || country==="DZ" || country==="AS" || country==="AD")
	{
		return true;

	}
	else
	{//console.log(x.options[x.selectedIndex].value);
		return false;

	}


}

function validateEmail(email) {
	// Check if the email is valid
	return /[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+/.test(email);
}

function validateGender(gender) {
	// Check if any one of radio button is selected
	if(gender==="Male" || gender==="Female")
	{
		return true;
	}
	else
	{
		return false;
	}
}

function validateLanguage(langs) {
	// lang -> list of langs selected
	// Check if atleast one of the checkbox is checked
	var flag=0;
	for(i=0;i<langs.length;i++)
	{
		//console.log(i);
		if(langs[i]==="en" || langs[i]==="hin" || langs[i]==="tel")
		{
			flag=1;
		}
		else
		{
			return false;
		}
	}
	if(flag=="1")
	{
		return true;
	}
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