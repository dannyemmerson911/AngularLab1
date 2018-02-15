(function(){
	var taskForm = {
		
		
		templateUrl: "partials/form.template.html",

		controller: function() {
			var $ctrl = this;
			$ctrl.list=[];
			$ctrl.add = function(task){
				$ctrl.list.push({task: task});
				$ctrl.task = "";

			};
			
		}
	};
	
	angular.module("AppModule")
		.component("taskForm", taskForm); 
	
})();