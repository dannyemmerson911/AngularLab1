(function(){
	var taskList = {
		bindings: {
			list: "<"
		},
		
		templateUrl: "partials/list.template.html",
		
		controller: function(){
			var $ctrl = this;
			$ctrl.remove = function(index){
				$ctrl.list.splice(index, 1);
			};
		}
	};
	
	angular.module("AppModule")
		.component("taskList", taskList);

	

	
})();