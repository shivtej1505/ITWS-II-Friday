function testNow() {
	console.log("starting testing....");
	let testMsg = document.getElementById("test_result");
	if (testUsername() && testPassword() && testCountry() && testEmail() && testGender() && testLang()) {
		testMsg.innerHTML = "All test Passed!"
	} else
		testMsg.innerHTML = "Test failed."
	console.log("All tests ran");
}

function testUsername() {
	let testPassed = 0;
	// Test 1
	let username = "1234sdklfdlks";
	if (!validateUsername(username))
		testPassed++;

	// Test 2
	username = "";
	if (!validateUsername(username))
		testPassed++;

	// Test 3
	username = "theuser";
	if (validateUsername(username))
		testPassed++;

	// Test 4
	username = "the";
	if (!validateUsername(username))
		testPassed++;
	
	return isAllTestPassed(4, testPassed, "username tests failed");
}

function testPassword() {
	let testPassed = 0;
	// Test 1
	let password = "123456789";
	if (!validatePassword(password))
		testPassed++;

	// Test 2
	password = "";
	if (!validatePassword(password))
		testPassed++;

	// Test 3
	password = "theuser";
	if (!validatePassword(password))
		testPassed++;

	// Test 4
	password = "SabLite";
	if (!validatePassword(password))
		testPassed++;

	// Test 5
	password = "$dlsf3_O";
	if (validatePassword(password))
		testPassed++;

	return isAllTestPassed(5, testPassed, "password tests failed");
}

function testCountry() {
	//var country_list = ["AF", "AL", "DZ", "AS", "AD"];
	let testPassed = 0;
	// Test 1
	let country = "uganda";
	if (!validateCountry(country))
		testPassed++;

	// Test 2
	country = "AF";
	if (validateCountry(country))
		testPassed++;
	
	// Test 3
	country = "DZ";
	if (validateCountry(country))
		testPassed++;

	// Test 4
	country = "";
	if (!validateCountry(country))
		testPassed++;

	return isAllTestPassed(4, testPassed, "country tests failed");	
}

function testEmail() {
	let testPassed = 0;
	// Test 1
	let email = "asdklfj";
	if (!validateEmail(email))
		testPassed++;

	// Test 2
	email = "";
	if (!validateEmail(email))
		testPassed++;
	
	// Test 3
	email = "a@b.com";
	if (validateEmail(email))
		testPassed++;
	
	// Test 4
	email = "a@b";
	if (!validateEmail(email))
		testPassed++;

	// Test 5
	email = "a@.com";
	if (!validateEmail(email))
		testPassed++;

	// Test 6
	email = "@gmail.com";
	if (!validateEmail(email))
		testPassed++;

	return isAllTestPassed(6, testPassed, "email tests failed");	
}

function testGender() {
	let testPassed = 0;
	// Test 1
	let gender = "Male";
	if (validateGender(gender))
		testPassed++;

	// Test 2
	gender = "Female";
	if (validateGender(gender))
		testPassed++;

	// Test 3
	gender = "";
	if (!validateGender(gender))
		testPassed++;

	// Test 4
	gender = "Lite";
	if (!validateGender(gender))
		testPassed++;

	return isAllTestPassed(4, testPassed, "gender tests failed");	
}

function testLang() {
	let testPassed = 0;
	// Test 1
	let lang = [];
	if (!validateLanguage(lang))
		testPassed++;

	// Test 2
	lang = ["en", "hin", "tel"];
	if (validateLanguage(lang))
		testPassed++;

	// Test 3
	lang = ["en", "tel"];
	if (validateLanguage(lang))
		testPassed++;

	// Test 4
	lang = ["sk", "sps"];
	if (!validateLanguage(lang))
		testPassed++;	

	return isAllTestPassed(4, testPassed, "username tests failed");
}

function isAllTestPassed(totalTest, testPassed, msg) {
if (testPassed == totalTest)
		return true;
	else
		console.log(msg + ". Out of " + totalTest +", only " + testPassed + " passed.");
		return false;
}

function isSubmitDisabled() {
	return document.getElementById('submitbtn').disabled;
}
