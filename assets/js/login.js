$(document).ready(function() {

	//******************
	// Login Functions
	//******************
	function login() {
		$(".loading-spinner").css("display", "block");
		var dataString = $("#login-screen form").serialize();
		console.log(dataString);
		$.ajax({
			url: "login.php",
			type: "POST",
			dataType: "json",
			data: dataString,
			success: function() {

			}
		});
	}

	// Login Button Handler
	$("#login-screen form button").on("click", function(button) {
		button.preventDefault();
		login();
	});

	// Intro Fade In Animation
	setTimeout(function() {
        $("#login-screen").css("display", "block");
    }, 500);

});