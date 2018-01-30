// Return true if input is valid

function validateUsername(name) {

//	console.log(name);
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

//	console.log(a + " password");
	if(a.length>=1 && /[A-Z]/.test(a) && /[a-z]/.test(a) && /[0-9]/.test(a) && /[:^alnum:]/.test(a)) return true;
	return false;
	// password should contain alteast 1 uppercase letter, 1 lowercase letter, 1 digit and 1 special characters
	// URL: https://account.cern.ch/account/Help/?kbid=020040
}

function validateCountry(country) {
	// Check if any country is selected
	var list=['AF', 'AL', 'DZ', 'AS', 'AD'];
	if(country.length>0 && list.includes(country)) return true;
	else return false;
	// Check if country belong to given list: [AF, AL, DZ, AS, AD]
}

function validateEmail(email) {
	// Check if the email is valid
	var b=0, at=0, af=0, dot=0, com=0;
	for(var i=0;i<email.length;i++)
		if(at==0 && email[i]!='@' && email[i]!='.') b++;
		else if(email[i]=='@') at++;
		else if(at!=0 && dot==0 && email[i]!='.') af++;
		else if(email[i]=='.') dot++;
		else if(dot!=0 && at!=0) com++;
	if(b>0 && at>0 && af>0 && dot>0 && com>0) return true;
	else return false;
}

function validateGender(gender) {
	if(gender.length>0 && (gender=="Male" || gender=="Female")) return true;
	else return false; // Check if any one of radio button is selected
}

function validateLanguage(lang) {
	// lang -> list of langs selected
	var x=0;
	var ar=['en', 'hin', 'tel'];
	lang.forEach( function(val){
		if(ar.includes(val)) x++;
	});

	if(lang.length>0 && x>0) return true;
	else return false;
	// Check if atleast one of the checkbox is checked
}

