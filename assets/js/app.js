var tiiHub = angular.module('tiiHub', ['ui.state'])

tiiHub.value('$anchorScroll', angular.noop)
.config(function($stateProvider, $urlRouterProvider){

	$urlRouterProvider.otherwise('/')

	$stateProvider

		.state('/', {
			url: '/',
			templateUrl: 'templates/index.html',
			controller: 'IndexController'
		})

		.state('login', {
			url: '/login',
			templateUrl: 'templates/login.html',
			controller: 'LoginController'
		})

		// profile

		.state('profile', {
			url: '/profile',
			templateUrl: 'templates/profile.html',
			controller: 'ProfileController'
		})
		.state('profile.overview', {
			url: '/',
			templateUrl: 'templates/profile.overview.html',
			controller: 'ProfileController'
		})
		.state('profile.experience', {
			url: '/experience',
			templateUrl: 'templates/profile.experience.html',
			controller: 'ProfileController'
		})
		.state('profile.education', {
			url: '/education',
			templateUrl: 'templates/profile.education.html',
			controller: 'ProfileController'
		})

		.state('profile.background', {
			url: '/background',
			templateUrl: 'templates/profile.background.html',
			controller: 'ProfileController'
		})
		.state('profile.background.skills', {
			url: '/',
			templateUrl: 'templates/profile.background.skills.html',
			controller: 'ProfileController'
		})
		.state('profile.background.portfolio', {
			url: '/portfolio',
			templateUrl: 'templates/profile.background.portfolio.html',
			controller: 'ProfileController'
		})
		.state('profile.background.awards', {
			url: '/awards',
			templateUrl: 'templates/profile.background.awards.html',
			controller: 'ProfileController'
		})
		.state('profile.background.publications', {
			url: '/publications',
			templateUrl: 'templates/profile.background.publications.html',
			controller: 'ProfileController'
		})
		.state('profile.background.interests', {
			url: '/interests',
			templateUrl: 'templates/profile.background.interests.html',
			controller: 'ProfileController'
		})

		.state('profile.references', {
			url: '/references',
			templateUrl: 'templates/profile.references.html',
			controller: 'ProfileController'
		})
		.state('profile.connections', {
			url: '/connections',
			templateUrl: 'templates/profile.connections.html',
			controller: 'ProfileController'
		})

		// connections/contacts

		.state('profile.connections.home', {
			url: '/contacts',
			templateUrl: 'templates/profile.connections.home.html',
			controller: 'ProfileController'
		})
		.state('profile.connections.home.connected', {
			url: '/',
			templateUrl: 'templates/profile.connections.home.connected.html',
			controller: 'ProfileController'
		})
		.state('profile.connections.home.following', {
			url: '/following',
			templateUrl: 'templates/profile.connections.home.following.html',
			controller: 'ProfileController'
		})
		.state('profile.connections.home.followers', {
			url: '/followers',
			templateUrl: 'templates/profile.connections.home.followers.html',
			controller: 'ProfileController'
		})

		// connections/professionals

		.state('profile.connections.professionals', {
			url: '/professionals',
			templateUrl: 'templates/profile.connections.professionals.html',
			controller: 'ProfileController'
		})
		.state('profile.connections.professionals.connected', {
			url: '/',
			templateUrl: 'templates/profile.connections.professionals.connected.html',
			controller: 'ProfileController'
		})
		.state('profile.connections.professionals.following', {
			url: '/following',
			templateUrl: 'templates/profile.connections.professionals.following.html',
			controller: 'ProfileController'
		})
		.state('profile.connections.professionals.followers', {
			url: '/followers',
			templateUrl: 'templates/profile.connections.professionals.followers.html',
			controller: 'ProfileController'
		})

		// connections/businesses

		.state('profile.connections.businesses', {
			url: '/businesses',
			templateUrl: 'templates/profile.connections.businesses.html',
			controller: 'ProfileController'
		})
		.state('profile.connections.businesses.connected', {
			url: '/',
			templateUrl: 'templates/profile.connections.businesses.connected.html',
			controller: 'ProfileController'
		})
		.state('profile.connections.businesses.following', {
			url: '/following',
			templateUrl: 'templates/profile.connections.businesses.following.html',
			controller: 'ProfileController'
		})
		.state('profile.connections.businesses.followers', {
			url: '/followers',
			templateUrl: 'templates/profile.connections.businesses.followers.html',
			controller: 'ProfileController'
		})

		// connections/organizations

		.state('profile.connections.organizations', {
			url: '/organizations',
			templateUrl: 'templates/profile.connections.organizations.html',
			controller: 'ProfileController'
		})
		.state('profile.connections.organizations.connected', {
			url: '/',
			templateUrl: 'templates/profile.connections.organizations.connected.html',
			controller: 'ProfileController'
		})
		.state('profile.connections.organizations.following', {
			url: '/following',
			templateUrl: 'templates/profile.connections.organizations.following.html',
			controller: 'ProfileController'
		})
		.state('profile.connections.organizations.followers', {
			url: '/followers',
			templateUrl: 'templates/profile.connections.organizations.followers.html',
			controller: 'ProfileController'
		})

		// connections/groups

		.state('profile.connections.groups', {
			url: '/groups',
			templateUrl: 'templates/profile.connections.groups.html',
			controller: 'ProfileController'
		})
		.state('profile.connections.groups.connected', {
			url: '/',
			templateUrl: 'templates/profile.connections.groups.connected.html',
			controller: 'ProfileController'
		})
		.state('profile.connections.groups.following', {
			url: '/following',
			templateUrl: 'templates/profile.connections.groups.following.html',
			controller: 'ProfileController'
		})
		.state('profile.connections.groups.followers', {
			url: '/followers',
			templateUrl: 'templates/profile.connections.groups.followers.html',
			controller: 'ProfileController'
		})

		// college

		.state('college', {
			url: '/college',
			templateUrl: 'templates/college.html',
			controller: 'ProfileController'
		})
		.state('college.overview', {
			url: '/',
			templateUrl: 'templates/college.overview.html',
			controller: 'ProfileController'
		})
		.state('college.faculty', {
			url: '/faculty',
			templateUrl: 'templates/college.faculty.html',
			controller: 'ProfileController'
		})
		.state('college.notable', {
			url: '/notable',
			templateUrl: 'templates/college.notable.html',
			controller: 'ProfileController'
		})
		.state('college.alumni', {
			url: '/alumni',
			templateUrl: 'templates/college.alumni.html',
			controller: 'ProfileController'
		})

	})