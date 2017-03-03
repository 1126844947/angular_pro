/**
*  Mappodule
*
* Description
*/
var app=angular.module('app', ['im.pagination'])

.controller('mainCtrl',function($scope,$rootScope,$interval,$http,$timeout){
	
	$scope.pageInfo={
		totalCount: 0,//总的记录条数
		pageCount: 0,// 总的页数
		pageOptions:[2,20,50,100],//每页条数的选项,选填
		showPages:5//显示几个页码,选填
	}

	$scope.params={
		rows:5,//每页显示条数
		page:1// 当前页
	}

	$scope.getData=function(){

		$timeout(function(){
			$scope.pageInfo.totalCount=6;
			$scope.pageInfo.pageCount=2;
			$scope.params.page=2;

			$scope.list=[
				{
					name:"list1"
				},
				{
					name:"list2"
				},
				{
					name:"list3"
				},
				{
					name:"list4"
				},
				{
					name:"list5"
				},
				{
					name:"list6"
				}
			];
		},100);

		/*$http.get('http://127.0.0.1:8080/guanxing_medical/base/drugInform/find',{params:$scope.params}).success(function(data){

			//----------------------------------------------------
			$scope.pageInfo.totalCount=data.message.totalCount;
			$scope.pageInfo.pageCount=data.message.pageCount;
			$scope.params.page=data.message.pageNumber;

			$scope.list=data.message.list;
		});*/
	};
})