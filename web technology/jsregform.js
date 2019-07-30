function check()
{
	var finame = document.regform.FName;
	var lname = document.forms["regform"]["LName"];
	var p = document.forms["regform"]["pass"];
	var mail = document.forms["regform"]["mail"];
	var phone = document.forms["regform"]["mobile"];
	var dob = document.forms["regform"]["dob"];
	var male = document.forms["regform"]["male"];
	var female = document.forms["regform"]["female"];
	var hobb = document.forms["regform"]["list"];
	
	if(finame.value == "")
	{
		window.alert("please enter First name.");
		finame.focus();
		return false;
	}
	if(lname.value == "")
	{
		window.alert("please enter Last name.");
		lname.focus();
		return false;
	}
	if(p.value == "")
	{
		window.alert("please enter Password.");
		p.focus();
		return false;
	}
	if(mail.value == "")
	{
		window.alert("please enter Email");
		mail.focus();
		return false;
	}
	var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	if(!filter.test(mail.value))
	{
		alert("provide valid email address.");
		mail.focus();
		return false;
	}	
	if(phone.value == "" || isNaN(phone.value) || phone.value.length!=10)
	{
		window.alert("please enter valid Mobile number.");
		phone.focus();
		return false;
	}
	if(dob.value < 18 || dob.value > 35)
	{
		window.alert("Age must be between 18 to 35.");
		dob.focus();
		return false;
	}
	if(male.checked==false && female.checked==false)
	{
		window.alert("Select gender.");
		return false;
	}
	if(hobb.value == "")
	{
		window.alert("please select hobbies.");
		hobb.focus();
		return false;
	}
}
