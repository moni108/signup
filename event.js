$(function(){
	$("#fname_error_msg").hide();
	$("#email_error_msg").hide();
	$("#password_error_msg").hide();

	var error_fname = false;
	var error_email = false;
	var error_password = false;

	$("#username").focusout(function(){
		check_fname();
	});
	$("#email").focusout(function(){
		check_email();
	});
	$("#password").focusout(function(){
		check_password();
	});
	
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


	$("#form").submit(function(){
		var error_fname = false;
		var error_email = false;
		var error_password = false;

		check_fname();
		check_email();
		check_password();
		
		if(error_fname === false && error_email === false && error_password === false ){ 
			 alert("Registration Successfull");
			 return true;
		}else{
			 alert("Please fill the form correctly");
			 return false;
		}

	});

});
