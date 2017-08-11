var jtapp= angular.module("jtmorris-me",['ngMessages', 'ngResource']);

//first version of dependancy injection could break upon minification. specify dependancies by wrapping them in an array and adding the modules before the function
jtapp.userdata={
    appdeveloper:{
        fName:"Jordan",
        mName:"Taylor",
        lName:"Morris",
        birthDateMonth:05,
        birthDateYear:1994,
        currentYear:2017,
        age: function(){
            //get current date and return the current age
            return this.currentYear - this.birthDateYear;
        },
        hobbies: [
            "Playing Basketball",
            "Playing Video Games",
            "Writing Awesome Web Apps like this one",
            "Reading Books",

        ]
    }
};
jtapp.pageData={
    browserTitle,
    websiteName:"jtmorris.me learns angular js",
    websiteShortName: "jtmorris.me-angular-js",
    
};
jtapp.pageData.browserTitle;
jtapp.userdata.appdeveloper={};
appdev = jtapp.userdata.appdeveloper;
appdev.fName="Jordan";
appdev.lName="Morris";
appdev.age=23;


jtapp.controller("mainController",["$scope", "$log","$timeout", "$filter", function($scope, $log, $timeout,$filter){

    $scope.appdev=jtapp.userdata.appdeveloper;
    $scope.pageData = jtapp.pageData;
    $scope.browserTitle = $scope.pageData.browserTitle = $scope.pageData.browserTitle ||"Welcome To My angularJS website";
    $scope.handleMaxChars = 10;
    $scope.lowercasehandle = function(handle){
        return $filter("lowercase")(handle);
    }
    $log.log("scope.handleHandleMaxChars: " + $scope.handleMaxChars);
}]);

jtapp.controller("HTMLHeaderController",["$scope","$log",function($scope,$log){
   
}]);
jtapp.controller("navigationController",["$log", "$scope", function($log,$scope){

}])