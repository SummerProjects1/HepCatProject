var mainApp = angular.module("mainApp", ['ngRoute']);

mainApp.config(function($routeProvider) {
    $routeProvider
		.when('/signIn', {
            templateUrl: 'AdminLogin.html',
            controller: 'AdminController'
        })
		
		.otherwise({
            redirectTo: '/signIn'
        });
});

mainApp.controller('AdminController',function($scope,$http,$location){
	
	console.log("Hello World from Controller");

	$scope.onSignIn = function(uname,pwd){
		$http.get('/adminReg/'+uname).then(function(response){
			console.log(response);
			var dataLength = response.data.length;
			var userName = response.data[0].uname;
			var pwd1 = response.data[0].pwd;
			var pwd = document.getElementById('pwd').value;
			if(dataLength>0 && (userName == uname && pwd1==pwd)){
				console.log("Valid User");
				$scope.message = "Valid User Id";
				$location.path('/home');
			}else{
					console.log("Invalid User");
					$scope.message = "Invalid User Id. Do you want to register?";	
			}			

		},function(response){
			$scope.message = "Error occurred";
		});
	};

	$scope.register = function(){
		console.log("Inside register() function");
		$location.path('/adminRegister');
	}

});