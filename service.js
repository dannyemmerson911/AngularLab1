(function(){
	var savedTaskArr = []

	function listService(){

		return {
			setTask: setTask,
			getTask: getTask
		}
		
		function setTask(task){
			
			savedTaskArr.push(task);
			console.log(savedTaskArr)
		};
		function getTask(){
			return savedTaskArr;
		}
	};

angular
	.module("AppModule")
	.factory("listService", listService); 
}());

