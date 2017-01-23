function indexController(Post){ //le pasamos la factoria por parametro
	this.posts; //promesas, this hace referencia indexController
	var self = this; 
	//almaceno la referencia en una variable, es decir, self=indexcontroller			
	Post.query().$promise.then(function(response){
		self.posts = response;
	}); 
	//con el servicio resource podemos hacer una llamada solo con 
	//query() = $http.get(url) hacemos la query de la factoria	
};

function postController($routeParams,Post) { //routeParams para recuperar un parametro
	this.post;
	var self = this;
	Post.get({id: $routeParams.id}).$promise.then(function(response){
		self.post = response;
	})
};

(function(){
	var app = angular.module('myApp.controller', ['myApp.services']) //myApp.controller es una dependencia q para relacionarlo con el app.js se lo ponemos [] en app.js. en las dependencia relacionas los distintos doc
		app.controller('indexController', indexController); //el . es como si lo pusieramos seguido
		app.controller('postController', postController);
})();