function postDirective(){
		return {
			restrict: "E",
			templateUrl:"./views/post-directive.html" 
		};
	};

function headerDirective() {
		return {
			restrict: "AE",
			templateUrl:"./views/header.html" 
		};
	};
function footerDirective() {
		return {

		}
}

(function() {
	angular.module('myApp.directives', [])
	.directive('postDirective', postDirective)
	.directive('headerDirective', headerDirective)
})();			

/*var Directives = (function(){

    _greetingsDirective = function(){
        return {
            restrict:'E',
            templateUrl: "template/section.html"
        }
    };

    _headerDirective = function(){
        return{
            restrict: 'A',
            templateUrl: "view/header.html"
        }
    };

    return{
        greetingsDirective: _greetingsDirective,
        headerDirective: _headerDirective
    }
})();

(function(){
    console.log('todo bien');
    var app = angular.module('myApp.directives', []);
    app.directive('greetingsDirective', Directives.greetingsDirective);
    app.directive('headerDirective', Directives.headerDirective);
})();*/