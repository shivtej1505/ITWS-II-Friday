// Return true if input is valid

function validateUsername(name) {

	console.log(name);
	if(name.length>8 || name.length<4) 
		return false
	for(i=0;i<name.length;i++) 
		if(name[i]==" ") return false;
	
	return true;

	// Length of username should be between 4 to 8
	// It should not contain any whitespace
}

function validatePassword(password) {
	
	var a = password;
	
//	var up=parseInt(0);
//	var lo=parseInt(0);

	console.log(a + " password");
	if(a.length>=1 && "/[A-Z]/".test(a) && "/[a-z]/".test(a) && "/[0-9]/".test(a) && "/[:^alnum:]"/test(a)) return true;
	return false;
	// password should contain alteast 1 uppercase letter, 1 lowercase letter, 1 digit and 1 special characters
	// URL: https://account.cern.ch/account/Help/?kbid=020040
}

function validateCountry(country) {
	// Check if any country is selected
	// Check if country belong to given list: [AF, AL, DZ, AS, AD]
}

function validateEmail(email) {
	// Check if the email is valid
}

function validateGender(gender) {
	// Check if any one of radio button is selected
}

function validateLanguage(lang) {
	// lang -> list of langs selected
	// Check if atleast one of the checkbox is checked
}

