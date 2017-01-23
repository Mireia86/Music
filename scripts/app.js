function setConfig($locationProvider, $routeProvider) {
		$locationProvider.html5Mode(true);
		$routeProvider
		.when('/',{
			controller: 'indexController', 
			templateUrl: './views/index.html',
			controllerAs: 'index'
		})
		.when('/posts/:id',{
			controller: 'postController',
			templateUrl: './views/show.html',
			controllerAs: 'patata'
		})
	};	

(function () {  //clousure, autoejutar la funcion, es como un document.ready
	var app = angular.module('myApp', ['ngRoute','myApp.controller','myApp.directives']); //dependencia ngRoute
	//app.controller('indexController', ["$scope", indexController]); //necesito la directiva $scope en el callback(funcion indexController)
	/*app.directive('greetingsDirective', greetingDirective)
	app.directive('headerDirective', headerDirective)*/
	app.config(['$locationProvider','$routeProvider', setConfig]);
})();

//.module('myApp', [ aqui le tenemos que pasar las dependencias, 
//para relacionarlo con otros archivos que tiene otro .module o  dependencia servicios])
//$locationProvider es una directiva que elimina # en la url