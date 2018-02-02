// Return true if input is valid

function validateUsername(name) {
	if (name.length <= 0) return false;
	if (name.length >= 4 && name.length <= 8) {
		for (i=0; i<name.length; i++) {
			if (name[i] == " ") {
				// disable submit button				
				return false;
			}		
		}
		return true;		
	}
	// disable submit button
	return false;
}

function validatePassword(passowrd) {
	// password should contain alteast 1 uppercase letter, 1 lowercase letter, 1 digit and 1 special characters
	// URL: https://account.cern.ch/account/Help/?kbid=020040
	var u = 0;
	var l = 0;
	var d = 0;
	var sc = 0;
	for (i=0; i<passowrd.length; i++) {
		if (/[a-z]/.test(passowrd[i]) == true) l = l + 1;
		if (/[A-Z]/.test(passowrd[i]) == true) u = u + 1;
		if (/[0-9]/.test(passowrd[i]) == true) d = d + 1;
		if (/[$_]/.test(passowrd[i]) == true) sc = sc + 1;
	}
	if (u > 0 && l > 0 && d > 0 && sc > 0 && passowrd.length > 0) return true;
	else
	{
		// disable submit button
		return false;		
	}
}

function validateCountry(country) {
	// Check if any country is selected
	// Check if country belong to given list: [AF, AL, DZ, AS, AD]
  	return (country == "AF" || country == "AL" || country == "DZ" || country == "AS" || country == "AD")
}

function validateEmail(email) {
	// Check if the email is valid
	if (email.length == 0) return false;
	if (/[a-z]/.test(email[0]) == false) return false;
	var dot = [0];
	var atrate = [0];
	for (i=0; i<email.length; i++)
	{
		if (email[i] == "@") 
		{
			atrate[0] = atrate[0] + 1;
			if (atrate[0] > 1) return false;
			atrate.push(i);
		}
		if (email[i] == ".")
		{
			dot[0] = dot[0] + 1;
			if (dot[0] > 1) return false;
			dot.push(i);
		
}	}	
	return (dot[0] == 1 && atrate[0] == 1 && (dot[1] - atrate[1]) > 1)
}

function validateGender(gender) {
	// Check if any one of radio button is selected
	return (gender == "Male" || gender == "Female")
}

function validateLanguage(lang) {
	// lang -> list of langs selected
	// Check if atleast one of the checkbox is checked
	if (lang.length == 0) return false;
	for (i=0; i<lang.length; i++) if (lang[i] != "en" && lang[i] != "hin" && lang[i] != "tel") {return false;}
	return true;		
}
