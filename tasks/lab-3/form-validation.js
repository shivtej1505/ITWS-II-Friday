// Return true if input is valid

function validateUsername(name) {
	if (name.length < 4 && name.length > 8)
	{
		return true;
	}
	else 
		return false;
	// Length of username should be between 4 to 8
	// It should not contain any whitespace
}

function validatePassword(passowrd) {
	var countupper = 0, countlower = 0, countnum = 0, countspec = 0;
	for (var i = 0; i < passowrd.length; ++i)
	{
		if (passowrd[i] >= 'A' && passowrd[i] <='Z')
		{
			countupper = 1;
		}
		if (passowrd[i] >= 'a' && passowrd[i] <= 'z')
		{
			countlower = 1;
		}
		if (passowrd[i] >= 0 && passowrd[i] <= 9)
		{
			countnum = 1;
		}
		if (passowrd[i] >= '161' && passowrd[i] <= '47')
		{
			countspec = 1;
		}
	}
	if (countupper == 1 && countlower == 1 && countnum == 1 && countspec == 1)
	{
		return true;
	}
	else
		return false;
	// password should contain alteast 1 uppercase letter, 1 lowercase letter, 1 digit and 1 special characters
	// URL: https://account.cern.ch/account/Help/?kbid=020040
}

function validateCountry(country) {
	if (country == 'AF' || country == 'AL' || country == 'DZ' || country == 'AS' || country == 'AD')
	{
		return true
	}
	else 
		return false;
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
