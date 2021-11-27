$(function(){
	$("#fname_error_msg").hide();
	$("#email_error_msg").hide();
	$("#password_error_msg").hide();
	// $("#checkbox_error_msg").hide();

	var error_fname = false;
	var error_email = false;
	var error_password = false;
	// var error_checkbox = false;

	$("#username").focusout(function(){
		check_fname();
	});
	$("#email").focusout(function(){
		check_email();
	});
	$("#password").focusout(function(){
		check_password();
	});
	// $("#check_1").focusout(function(){
	// 	check_check_1();
	// });
	
	function check_fname(){
		var pattern = /^[a-zA-Z]*$/;
		var fname = $("#username").val();
		if(pattern.test(fname) && fname !== ''){
			$("#fname_error_msg").hide();
			$("#username").css("border-bottom","2px solid #34F458");
		}
		else{
			$("#fname_error_msg").html("Should contain only characters");
			$("#fname_error_msg").css("color","red");
			$("#fname_error_msg").show();
			$("#username").css("border-bottom","2px solid #F90A0A");
			error_fname = true;
		}
	}

	function check_password(){
		var pass_length = $("#password").val().length;
		if(pass_length < 8){
			$("#password_error_msg").html("Atleast 8 characters");
			$("#password_error_msg").css("color","red");
			$("#password_error_msg").show();
			$("#password").css("border-bottom","2px solid #F90A0A");
			error_password = true;
		}else{
			$("#password_error_msg").hide();
			$("#password").css("border-bottom","2px solid #34F458");
		}
	}

	function check_email(){
		var pattern = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
		var email = $("#email").val();
		if(pattern.test(email) && email !== ''){
				$("#email_error_msg").hide();
				$("#email").css("border-bottom","2px solid #34F458");
			}
		else{
			$("#email_error_msg").html("Invalid Email");
			$("#email_error_msg").css("color","red");
			$("#email_error_msg").show();
			$("#email").css("border-bottom","2px solid #F90A0A");
			error_email = true;
		}

	}

	// function check_check_1(){
	// 	var checkbox = $("#check_1").val();
	// 	if(checkbox === "on"){
	// 		$("#checkbox_error_msg").hide();		
	// 	}
	// 	else{
	// 		$("#checkbox_error_msg").html("You must check the box.");
	// 		$("#checkbox_error_msg").show();
	// 		error_checkbox = true;
	// 	}

	// }

	$("#form").submit(function(){
		var error_fname = false;
		var error_email = false;
		var error_password = false;
		// var error_checkbox = false;

		check_fname();
		check_email();
		check_password();
		// check_check_1();
		
		if(error_fname === false && error_email === false && error_password === false ){ //&& error_checkbox === false
			 alert("Registration Successfull");
			 return true;
		}else{
			 alert("Please fill the form correctly");
			 return false;
		}

	});

});
