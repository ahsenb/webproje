$('#trigger-top-login-modal').click(function(){
    $('#top-login-overlay, #top-login-modal').show();
	});

	$('#top-login-overlay, #top-login-modal span').click(function(){
		$('#top-login-overlay, #top-login-modal').hide();
	});