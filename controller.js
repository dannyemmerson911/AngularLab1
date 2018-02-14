(function(){
	function FormController(){
		var vm = this;
		vm.toDoList = [];
		vm.add = function(task) {
			vm.toDoList.push({task: task});
			vm.task = "";
		};
		vm.remove = function(index) {
			vm.toDoList.splice(index, 1)
		};

		}
	

	angular
		.module("AppModule")
		.controller("FormController", FormController);
})();