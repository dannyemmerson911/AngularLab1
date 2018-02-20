(function(){
	var savedTaskArr = [];

	function listService(){

		return {
			addTask: addTask,
			getTasks: getTasks
		}
		
		function addTask(task){
			savedTaskArr.push(task);
			console.log(savedTaskArr)
		};
		function getTasks(){
			return savedTaskArr;
		}
	};

angular
	.module("AppModule")
	.factory("listService", listService); 
}());

