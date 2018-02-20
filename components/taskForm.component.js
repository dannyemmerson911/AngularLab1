(function(){
	var taskForm = {
		
		templateUrl: "partials/form.template.html",

		controller: function(listService){
			var $ctrl = this;
			$ctrl.list = listService.getTasks();
			$ctrl.remove = function(index){
				$ctrl.list.splice(index, 1);
			};
			$ctrl.set = function(task){
				$ctrl.task = "";
				listService.addTask(task);
			};
			
		}
	};

	
	angular
		.module("AppModule")
		.component("taskForm", taskForm) 
}());