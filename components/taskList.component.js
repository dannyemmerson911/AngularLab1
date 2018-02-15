(function(){
	var taskList = {
		bindings: {
		list: "<"

		},

		
		template:`<li ng-repeat="task in $ctrl.toDoList"| filter: 'searchBar' | orderBy: 'ol' track by $index>{{task.task}} 
				 {{task.task}}
				 <span><i class="material-icons" ng-click="$ctrl.remove($index)">close</i></span>
				</li>`,
		
		controller: function(){
			var vm = this;
			var toDoList =[];
			vm.add = function(task){
				vm.toDoList.push({ task:task })
			};
		}
	};
	
	angular.module("AppModule")
		.component("taskList", taskList);

	

	
})();