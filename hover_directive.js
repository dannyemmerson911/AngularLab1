(function(){
	return {
		link: function($scope, $element, $attrs){
				$element.on("mouseenter", function(){
					$element.css("background-color", "#bbb");
				};
				$element.on("mouseout", function(){
					$element.css("background-color" "#eee");
				}
			};
		};	
angular
	.module("AppModule")
	.directive("hoverState", hoverState);

})();