(function(){
	var taskForm = {
		
		
		templateUrl: "partials/form.template.html",

		controller: function(listService){
			var $ctrl = this;
			$ctrl.list = []; 
			$ctrl.get = function() {
				$ctrl.list = listService.getTask()
			}
			$ctrl.remove = function(index){
				$ctrl.list.splice(index, 1);
			};
			$ctrl.add = function(task){
				$ctrl.task = ""
				listService.setTask(task)
				$ctrl.get();
			};
		}
	};

	
	angular
		.module("AppModule")
		.component("taskForm", taskForm) 
}());