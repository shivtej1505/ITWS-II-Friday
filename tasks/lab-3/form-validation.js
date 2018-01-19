// Return true if input is valid

//aux();
/*function aux(){
//var name=document.getElementById("username").innerHTML;
setInterval(validateUsername, 1);
var passowrd=document.getElementById("password").innerHTML;
setInterval()
}*/

function validateUsername(name){
	//name=document.getElementById("username").innerHTML;
	//console.log(name);
	//console.log(name.length);
	if(name.length>4&&name.length<8){
		for(i=0;i<name.length;i++){
			if(name[i]==" "){
				//console.log("pui");
				return false;
			}
		}
		return true;
	}
	else{
		return false;
	}
}

function validatePassword() {
	// password should contain alteast 1 uppercase letter, 1 lowercase letter, 1 digit and 1 special characters
	// URL: https://account.cern.ch/account/Help/?kbid=020040
	password=document.getElementById("password").value;
	var U=0, l=0, d=0, s=0;
	for(i=0;i<password.length;i++){
		if(password[i]==password[i].toUpperCase){
			U=U+1;
		}
		if(password[i]==password[i].toLowerCase){
			l=l+1;	
		}
		if(password[i]==[1-9]){
			d=d+1;
		}
		else if(password[i]!='\s'){
			s=s+1;
		}
	}
	if(U==0||l==0||d==0||s==0){
		//document.getElementById("submitbtn").setAttribute("disabled");
		return false;
	}
	return true;
}

function validateCountry(country) {
	// Check if any country is selected
	// Check if country belong to given list: [AF, AL, DZ, AS, AD]
	if(country=="AF"||country=="AL"||country=="DZ"||country=="AS"||country=="AD"){
		return true;
	}
	else{
		return false;
	}
}

function validateEmail(email) {
	// Check if the email is valid
	t=0, f=0;
	if(email[0]=="\s"){
		return false;
	}
	for(i=0;i<email.length;i++){
		if(email[i]=='@'){
			st=i;
			t=t+1;
		}
		if(email[i]=='.'){
			f=f+1;
		}
	}
	if(t!=1||f<1){
		return false;
	}
	else{
		if(st==0){
			return false;
		}
		if(email[st+1]=='.'){
			return false;
		}
	}
	return true;
}

function validateGender(gender) {
	// Check if any one of radio button is selected
	if(gender=="Male"||gender=="Female"){
		return true;
	} 
	return false;
}

function validateLanguage(lang) {
	// lang -> list of langs selected
	// Check if atleast one of the checkbox is checked
	ln=lang[0];
	if(ln=="hin"||ln=="en"||ln=="tel"){
		return true;
	}
	return false;
}
