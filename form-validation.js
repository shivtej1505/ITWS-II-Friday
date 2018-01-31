  function validateUsername(name) {
          if(name.length>3 && name.length<8)
                  return true;
          return false;
  }
  
  function validatePassword(password) {
          var a=/[0-9]/.test(password);
          var b=/[A-Z]/.test(password);
          var c=/[a-z]/.test(password);
          var d=/[^a-zA-Z0-9]/.test(password);
          if(a && b && c && d ==1)
              return true;
          return false;
  }
  
  function validateCountry(country) {
          if(country=="AF" || country=="AL" || country=="DZ" || country=="AS" || country=="AD")
                  return true;
      return false;
  }
  
  function validateEmail(email) {
          var regex=/[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+/;
          return regex.test(email);
  }
  
  function validateGender(gender) {
          if(gender=="Male" || gender=="Female")
                  return true;
          return false;
 }
  
  function validateLanguage(langs) {
          if(langs.length<1)
              return false;
          for(i=0;i<langs.length;i++){
                var a=langs[i];
                if(!(a=="en" || a=="hin" || a=="tel"))
                      return false;
                }
          return true;
  }

// Auxillary function which parse input from the form fields
function checkForm() {
  // parsing username from the form
  let name = document.getElementById("username").value;

  if (validateUsername(name) /* && validatePassword()  && validateCountry(country) && validateEmail(email)
      && validateGender(gender) && validateLanguage(langs) */) {
    // If all validations are successful, then enable the submit button
    document.getElementById("submitbtn").disabled = false;
    msg.innerHTML = "Form contains no errors";
    console.log("Form contains no errors");
  } else {
    // If even one validation fails, disable submit button
    document.getElementById("submitbtn").disabled = true;
    msg.innerHTML = "Errors in the form";
    console.log("Errors in the form");
  }
}

// Run `checkForm` function on each and every keyup event
document.getElementsByTagName("body")[0].onkeyup = function() {
  checkForm();
}

checkForm();