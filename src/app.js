window.app = angular.module('routeResolve', [
    'ngRoute'
]);

window.appMock = angular.module('mockService', ['ngMockE2E']);

window.app.config([
    '$routeProvider',
    '$controllerProvider',
    '$compileProvider',
    '$filterProvider',
    '$provide',
    function ($routeProvider, $controllerProvider, $compileProvider, $filterProvider, $provide) {

        var componentsToLoad = function () {
            console.log(arguments);

            return {

            }
        };
        $routeProvider
            .when('/login', {
                templateUrl: 'components/login/partials/login.html',
                resolve: {
                    load: ['$q', '$rootScope', function ($q, $rootScope) {

                        var deferred = $q.defer();

                        require ([
                            'components/login/controllers/loginController',
                            'components/login/services/loginService'
                        ], function () {

                           $rootScope.$apply(function () {
                                deferred.resolve();
                           });

                        });

                        return deferred.promise;
                    }]
                }
            })
            .when('/register', {
                templateUrl: 'components/register/partials/register.html',
                resolve: ['$q', '$rootScope', function ($q, $rootScope) {

                    var deferred = $q.defer();

                    require ([
                        'components/register/controllers/registerController',
                        'components/register/services/registerService'
                    ], function () {

                        $rootScope.$apply(function () {
                            deferred.resolve();
                        });

                    });

                    return deferred.promise;
                }]
            });

        window.app.components = {
            controller: $controllerProvider.register,
            service: $provide.service
        }

    }
]);
