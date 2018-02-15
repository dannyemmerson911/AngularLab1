(function(){
	var taskForm = {
		bindings: {
			
		},
		
		templateUrl: "partials/form.template.html",

		controller: function() {
			var vm = this;
			vm.remove = function(index){
				$ctrl.toDoList.splice(index, 1);
			};
			
		}
	};
	
	angular.module("AppModule")
		.component("taskForm", taskForm); 
	
})();