// Return true if input is valid

function validateUsername(name) {
	// Length of username should be between 4 to 8
	// It should not contain any whitespace
  var r = new RegExp(' ');
	if(r.test(name) == false){
		if(name.length <= 8 && name.length >= 4) return true;
  		else return false;
  	}
  	else return false;
}

function validatePassword(passowrd) {
	// password should contain alteast 1 uppercase letter, 1 lowercase letter, 1 digit and 1 special characters
	// URL: https://account.cern.ch/account/Help/?kbid=020040
  var u = new RegExp("[A-Z]");
  var l = new RegExp("[a-z]");
  var d = new RegExp("[0-9]");
  var s = new RegExp("[$_@#]");
 if(u.test(passowrd) && l.test(passowrd) && d.test(passowrd) && s.test(passowrd)) true;
 else false;
}

function validateCountry(country) {
	// Check if any country is selected
	// Check if country belong to given list: [AF, AL, DZ, AS, AD]
  if (country == "AF" || country == "AL" || country == "DZ" || country == "AS" || country == "AD") return true;
	else if(country == "Australia" || country == "Canada" || country == "India" || country == "Russia" || country == "USA") return true;
	else return false;
}

function validateEmail(email) {
	// Check if the email is valid
  var evl = new RegExp(".\{1,\}@[a-zA-Z0-9]\{1,\}\.\{1,\}");
	return evl.test(email);
}

function validateGender(gender) {
	// Check if any one of radio button is selected
  if (gender == "Male" || gender == "Female") {
		return true;
	} else {
		return false;
	}
}

function validateLanguage(lang) {
	// lang -> list of langs selected
	// Check if atleast one of the checkbox is checked
  if (lang == "English" || lang == "Hindi" || lang == "Telugu") {
		return true;
	} else {
		return false;
	}
}
