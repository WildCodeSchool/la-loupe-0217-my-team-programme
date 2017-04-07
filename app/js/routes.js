angular.module('app')
    .config(function($stateProvider, $urlRouterProvider, AccessLevels) {
        $stateProvider
            .state('anon', {
                abstract: true,
                data: {
                    access: AccessLevels.anon
                },
                views: {
                    'navbar@': {
                        templateUrl: 'anon/navbar.html',
                        controller: 'NavbarController'
                    },

                    'footer@': {
                        templateUrl: 'anon/footer.html',
                        controller: 'FooterController'
                    },
                }
            })
            .state('anon.home', {
                url: '/',
                views: {
                    'content@': {
                        templateUrl: 'anon/home.html',
                        controller: 'calendarController'
                    }
                }
            })
            .state('anon.login', {
                url: '/login',
                views: {
                    'content@': {
                        templateUrl: 'anon/login.html',
                        controller: 'LoginController'
                    }
                }
            })
            .state('anon.register', {
                url: '/register',
                views: {
                    'content@': {
                        templateUrl: 'anon/register.html',
                        controller: 'RegisterController'
                    }
                }
            });
        $stateProvider
            .state('user', {
                abstract: true,
                data: {
                    access: AccessLevels.user
                },
                views: {
                    'navbar@': {
                        templateUrl: 'user/navbar.html',
                        controller: 'NavbarController'
                    },
                    'onglet@': {
                        templateUrl: 'user/onglet.html'
                    },
                    'footer@': {
                        templateUrl: 'user/footer.html',
                        controller: 'FooterController'
                    },
                },
            })
            .state('user.calendar', {
                url: '/calendar',
                views: {
                    'content@': {
                        templateUrl: 'user/calendar.html',
                        controller: 'calendarController'
                    }
                }
            })
            .state('user.myTeam', {
                url: '/myTeam',
                views: {
                    'content@': {
                        templateUrl: 'user/myTeam.html',
                        controller: 'ApiController'
                    }
                }
            })
            .state('user.competition', {
                url: '/competition',
                views: {
                    'content@': {
                        templateUrl: 'user/competition.html',
                        controller: 'competitionController'
                    }
                }
            })
            .state('user.ligue2', {
                url: '/ligue2',
                views: {
                    'content@': {
                        templateUrl: 'user/ligue2.html',
                        controller: 'ligue2Controller'
                    }
                }
            })
            .state('user.ldc', {
                url: '/ldc',
                views: {
                    'content@': {
                        templateUrl: 'user/ldc.html',
                        controller: 'ldcController'
                    }
                }
            });
        $urlRouterProvider.otherwise('/');
    });
