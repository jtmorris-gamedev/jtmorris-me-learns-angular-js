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

        ],
        experiencedIn : {
            languages:[
                {
                    name:"Javascript",
                    numMonthsOfExperience : 1,
                    experienceLevel: this.experienceLevels.newbie,
                    likes:[],
                    dislikes:[]
                }
            ],
            frameworks:[

            ],
            programmingConcepts:[
                "OOP",
                "MV*",
                "functional Programming(sorta new)"
            ],
            experienceLevels:{ //maybe implement a star rating system : 0 = totally new == 5= Mastered it
                newbie:"less than one month",
                beginner: "1  to 6 months",
                intermediate: "6 to 12 months",
                advanced: "12 to 18 months",
                master:"24 months to 36 months",
                godlike:"36 months or more"
            }

        }
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