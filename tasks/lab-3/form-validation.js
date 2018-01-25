// Return true if input is valid

function validateUsername(name) {
	// Length of username should be between 4 to 8
	// It should not contain any whitespace
	var white = name.length - name.replace(/ /g, '').length; 
	if(name.length>=4 && name.length<=8 && white==0)
		return true;
	else 
		return false;
}

function validatePassword(password) {
	// password should contain alteast 1 uppercase letter, 1 lowercase letter, 1 digit and 1 special characters
	// URL: https://account.cern.ch/account/Help/?kbid=020040
	var a=password.value;
  	len=a.length;	
	var numUpper = a.length - a.replace(/[A-Z]/g, '').length;  
	var numLower = a.length - a.replace(/[a-z]/g, '').length;
	var numDigit = a.length - a.replace(/[0-9]/g, '').length;
	var special = a.length - a.replace(/[:^alnum:]/g, '').length;
	if(len>=1 && numUpper>0 && numLower>0 && numDigit>0 && special>0)
		return true;
	else 
		return false;
	

}

function validateCountry(country) {
	// Check if any country is selected
	// Check if country belong to given list: [AF, AL, DZ, AS, AD]
	if(country=='AF'||country=='AL'||country=='DZ'||country=='AS'||country=='AD')
		return true;
	else 
		return false;
}

function validateEmail(email) {
	// Check if the email is valid
	var f=0;
	len=email.length;
	for(i=0;i<len;i++)
	{
		if(i==0 && email[i]=='@')
		{
			f=0;
			break;
		}
		if(email[i]=='@')f++;
		if(email[i]=='.' && email[i-1]!='@')f++;
	}
	if(f==2)return true;
	else return false;
}

function validateGender(gender) {
	// Check if any one of radio button is selected
	if(gender=="Male"||gender=="Female")
		return true;
	else
		return false;
}

function validateLanguage(lang) {
	// lang -> list of langs selected
	// Check if atleast one of the checkbox is checked
	var len=lang.length;
	for(i=0;i<len;i++)
	{
		if(lang[i]=="en"||lang[i]=="hin"||lang[i]=="tel")
			return true;
	}
	return false;
}