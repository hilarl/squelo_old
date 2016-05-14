tiiHub.controller('IndexController', function($scope, $timeout, $stateParams) {
	$('#home-carousel').carousel({
		interval: 5000
	});
	$('#sign-in').show();
	$('#main-search').show();

	$('#profile-top-nav').hide();
});

tiiHub.controller('LoginController', function($scope, $timeout, $stateParams) {
	
	$('#sign-in').hide();
	$('#main-search').hide();

	$('#profile-top-nav').hide();

});

tiiHub.controller('ProfileController', function($scope, $timeout, $stateParams) {
	$('#sign-in').hide();
	$('#main-search').show();
	$(".edit").hide();
	$(".privacy").hide();

	$('#activate-edit').click(function(e) {
		e.preventDefault();
		$(".edit").show();
	});

	$('#activate-privacy').click(function(e) {
		e.preventDefault();
		$(".privacy").show();
	});
});
