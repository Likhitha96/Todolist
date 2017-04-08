var todo=[{name:"Do homework",
			time:"1hr",
			status:false,
			count:1
		},{
			name:"Bake",
			time:"2hrs",
			status:false,
			count:2	
			}]
var app=angular.module("MyApp",[])
app.controller("ListController",function($scope)
	{	
		$scope.tasks=todo;
		$scope.getTotalTodos = function () {
    	return $scope.tasks.length;
    	 };
    	$scope.checkStatus=function(task){
    	return task.status===true;
    };
    	$scope.deleteTask=function(task){
    		var val=$scope.tasks.indexOf(task);
    		if(task.status===true)
    		{
    		$scope.tasks.splice($scope.tasks.indexOf(task), 1);
    		angular.forEach($scope.tasks,function(value,index){
    			if(index>=val)
                value.count=(value.count)-1;
            })
    	}
    	else{
    		alert("Task not completed!");
    	}

    	    	};
    	$scope.addTask=function(){
    		$scope.tasks.push({name:$scope.newTaskName,time:$scope.newTaskTime,status:false,count:($scope.tasks.length)+1});

    	};
    
    	

   
	});
