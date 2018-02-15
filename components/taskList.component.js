(function(){
	var taskList = {
		bindings: {
			list: "<"
		},
		
		template:
				`
				<input id = "searchBar" type="text" ng-model="searchBar" placeholder="Filter your to-dos">
				<ol>
				<li ng-repeat="task in $ctrl.list"| filter: 'searchBar' | orderBy: 'ol' track by $index> 
				{{task.task}}
				<span><i class="material-icons" ng-click="$ctrl.remove($index)">close</i></span>
				</li>
				</ol>
				`,

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