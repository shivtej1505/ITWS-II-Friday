// Return true if input is valid

function validateUsername(name) {
	// Length of username should be between 4 to 8
	// It should not contain any whitespace
	//var flag =1;
	/*if(name.length >=4 && name.length <=8)
	{
		for(var i=0;i<name.length;i++)
			if(name[i] == '\s')
				return false;
		return true;
	}
	
	return false;*/
	if(name.length<4)
		return false;
	else if(name.length>8)
		return false;
	else{
		for(var i=0;i<name.length;i++){
			if(name[i]==" ")
				return false;
		}
	}
	return true;
}

function validatePassword(password) {
	// password should contain alteast 1 uppercase letter, 1 lowercase letter, 1 digit and 1 special characters
	// URL: https://account.cern.ch/account/Help/?kbid=020040
	
	var upper=0,lower=0,number=0,special=0;
	for(i=0;i<password.length;i++){
		if(password[i]==password[i].toUpperCase){
			upper=upper+1;
		}
		if(password[i]==password[i].toLowerCase){
			lower=lower+1;	
		}
		if(password[i]==[1-9]){
			number=numeber+1;
		}
		else if(password[i]!='\s'){
			special=special+1;
		}
	}
	if(upper*lower*number*special==0){
		return false;
	}
	return true;
}

function validateCountry(country) {
	// Check if any country is selected
	// Check if country belong to given list: [AF, AL, DZ, AS, AD]
	//return true;
	switch(country)
	{
		case 'AF': return true;
		case 'AL': return true;
		case 'DZ': return true;
		case 'AS': return true;
		case 'AD': return true;
	}
	return false;
}

function validateEmail(email) {
	// Check if the email is valid
	//return true;
	var i=0,before=0,after=0;
	if(email.length==0)
		return false;
	while(email[i]!='@'&&i<email.length)
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
	if(before*after == 0)
		return false;
	return true;

}

function validateGender(gender) {
	// Check if any one of radio button is selected
	//return true;
	if(gender == "Male"||gender =="Female")
		return true;
	return false;
	
}

function validateLanguage(lang) {
	// lang -> list of langs selected
	// Check if atleast one of the checkbox is checked
	//return true;
	l =lang[0];
	if(l=='hin'||l=='en'||l=='tel')
		return true;
	return false;
}