angular.module('testApp', [
  'ngRoute',
  'angular-material-tree'
])
  .config(configApp);


configApp.$inject = ['$routeProvider'];
function configApp($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'pages/home/home.html',
      controller: 'HomeController',
      controllerAs: 'vm'
    })
    .otherwise('/');
}
