// Return true if input is valid

function validateUsername(name) {
	// Length of username should be between 4 to 8
		if( name.length >= 4 && name.length <= 8 )
			{
				for(i=0;i<name.length;i++)
					{
						if(password[i] == '\s')
						{
							//disable();
							return false;
						}	
					}
			return true;
			}
				else{
					//disable();
					return false;
					}
}  
	// It should not contain any whitespace


function validatePassword(passowrd) {
		arr=[0,0,0,0];
	// password should contain alteast 1 uppercase letter, 1 lowercase letter, 1 digit and 1 special characters
		for(i=0;i<password.length;i++)
		{
			if(password[i] == '[A-Z]')
				arr[0]++;
			 if(password[i] == '[a-z]')
                                arr[1]++;
			 if(password[i] == '[0-9]')
                                arr[2]++;
 			if(password[i] == '[^A-Z0-9a-z]')
                                arr[3]++;
			}
		if(arr[0]>=1 && arr[1]>=1 && arr[2]>=1 && arr[3]>=1 )
			return true;
		else{
			//disable();
			return false;
		}
	// URL: https://account.cern.ch/account/Help/?kbid=020040
}

function validateCountry(country) {
	// Check if any country is selected
	
	// Check if country belong to given list: [AF, AL, DZ, AS, AD]
	switch(country)
	{
		case 'AF': return true;
		case 'AL': return true;
		case 'DZ': return true;
		case 'AS': return true;
		case 'AD': return true;
		return false;
	}
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
