(function() {
	angular.module('myApp.services',['ngResource'])//resource es para quitar $http para hacer las petiicones
		.constant('BaseUrl', 'http://jsonplaceholder.typicode.com/') //esta va ser una url contante, siempre va ser la misma
		.factory('Post', Post); //el nombre q queremos llamar, el 2 es el callback

		function Post ($resource, BaseUrl){
			return $resource(BaseUrl + 'posts/:id', {id: '@id'}) //@ es una variable no un literal, no va ser id sino un numero
		};

})();

//.constante es donde vamos a apuntar siempre y e slo mismo que hacer BaseUrl=Http..
//.factpria es para hacer un servicio que s epuede usar en otros sitios, con la funcion post nos dej apillar los datos de json