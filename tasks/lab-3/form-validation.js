// Return true if input is valid

function validateUsername(name){
//	console.log("name is" name "length" name.length);
if((name.length<4)||(name.length>8))
			return 0;	
else						
	return 1;
}

function validatePassword(passowrd) {
	var a=0;
    var b=0;
    var c=0;
    var d=0;
    for(var i=0;i<password.length;i++){
            var z=0;
            if((password[i]>='A')&&(password[i]<='Z')){
                    a++;z++;
            }
            if(password[i]>='a'&&password[i]<='z'){
                    b++;z++;
            }
            if(password[i]>='0'&&password[i]<='9'){
                    c++;
                    z++;
            }
            if(z==0)
                d++;
            console.log(a,b,c,d);
    }
        if(a*b*c*d>0)                       // password should contain alteast 1 uppercase letter, 1 lowercase letter, 1 digit and 1 special characters
                return 1;
        else
                return 0;

}

function validateCountry(country) {
	
	if((country=="AF")||(country=="AL")||(country=="DZ")||(country=="AS")||(country=="AD"))
			return 1;
	else	
			return 0;

	// Check if any country is selected
	// Check if country belong to given list: [AF, AL, DZ, AS, AD]
}

function validateEmail(email) {
if(email.includes(" "))
		return 0;
	if(email.search(/[a-zA-Z0-9].com/i)==-1)
		return 0;
	if(email.search(/[a-zA-Z0-9]@/i)==-1)
		 return 0;
	return 1;
	// Check if the email is valid
}

function validateGender(gender) {
	
	if(gender=="Male"||gender=="Female")
		return 1;
	else
		return 0;

	// Check if any one of radio button is selected
}

function validateLanguage(lang) {

	if(lang.length==0)
		return 0;
	for(var i=0;i<lang.length;i++){
	if(lang[i]=="en"||lang[i]=="hin"||lang[i]=="tel")
		continue;
	else
		return 0;
	}
		return 1;
	// lang -> list of langs selected
	// Check if atleast one of the checkbox is checked
}
