// Return true if input is valid

function validateUsername(name) {
	
	var x = name.length;
	if(x>=4 && x<=8)
		{
			//console.log(name + "pass");
			return true;
		}
	else
	{	
		document.getElementById("submitbtn").disabled = true;
		return false;
	}
	// Length of username should be between 4 to 8
	// It should not contain any whitespace
}

function validatePassword(password) {
	var x = password;
	var countlow=0;
	var digit=0;
	var countup=0;
	//console.log(x.value);
	//console.log(x.value.length);
	
	for (var i = (x.value).length - 1; i >= 0; i--) 
	{
		if(x.value[i]>='a' && x.value[i]<='z')	
			countlow++;
		else if(x.value[i]>='A' && x.value[i]<='Z')
			countup++;
		else if(x.value[i]>='1' && x.value[i]<='9')
			digit++;
	}
	var extra = (x.value).length-(countlow+countup+digit);
	//console.log(" low = " + countlow + "high =" + countup)
	if(extra>=1 && countup>=1 && countlow>=1 && digit>=1)
		return true;
	else
		{
			document.getElementById("submitbtn").disabled = true;
			return false;
		}
	// password should contain alteast 1 uppercase letter, 1 lowercase letter, 1 digit and 1 special characters
	// URL: https://account.cern.ch/account/Help/?kbid=020040
}

function validateCountry(country) {
	var c = country;
	var arr=["AF","AL","DZ","AS","AD"];
	var flag = 0;
	for (var i in arr)
	{
		//console.log(arr[i]);
		if(arr[i]==c)
		{
			flag=1;
			break;
		}
	}
	if(flag===1)
		return true;
	else
		{
		document.getElementById("submitbtn").disabled = true;
		return false;
		}
	// Check if any country is selected
	// Check if country belong to given list: [AF, AL, DZ, AS, AD]
}

function validateEmail(email) {
	var reg = new RegExp(".*@.*.com");
	if(reg.test(email))
		return true;	
}

function validateGender(gender) {
	// Check if any one of radio button is selected
	if(gender=="Male" || gender=="Female")
		return true;
	else
		{
		document.getElementById("submitbtn").disabled = true;	
		return false;
		}
}
1
function validateLanguage(lang) {
	var flag = 0;
	for (i in lang)
	{
		if(lang[i]=="en" || lang[i]=="tel" || lang[i]=="hin")
				flag=1;
	}
	if(flag===0)
		{
			document.getElementById("submitbtn").disabled = true;
			return false;
		}	
	return true;
	// lang -> list of langs selected
	// Check if atleast one of the checkbox is checked
}
