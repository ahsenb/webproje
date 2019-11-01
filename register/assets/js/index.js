new Vue({
    el: '#tabs',
    data: { activetab: 1 },
});

$('#trigger-top-login-modal').click(function(){
    $('#top-login-overlay, #top-login-modal').show();
	});

	$('#top-login-overlay, #top-login-modal span').click(function(){
		$('#top-login-overlay, #top-login-modal').hide();
	});
