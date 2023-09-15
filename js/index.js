var myApp = angular.module('myApp', [
  'ngRoute',
  'myControllers'
]);

myApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/home', {
        templateUrl: 'pages/home.html',
        controller: 'HomeCtrl'
      }).
	  when('/news', {
        templateUrl: 'pages/news.html',
        controller: 'NewsCtrl'
      }).
      when('/publication', {
        templateUrl: 'pages/publication.html',
        controller: 'PublicationCtrl'
      }).
      when('/research', {
        templateUrl: 'pages/research.html',
        controller: 'ResearchCtrl'
      }).
      when('/teach', {
        templateUrl: 'pages/teach.html',
        controller: 'TeachCtrl'
      }).
       when('/service', {
        templateUrl: 'pages/service.html',
        controller: 'ServiceCtrl'
      }).
      when('/student', {
        templateUrl: 'pages/student.html',
        controller: 'StudentCtrl'
      }).
      when('/material', {
        templateUrl: 'pages/paperbyyear.html',
        controller: 'MaterialCtrl'
      }).
       when('/data', {
        templateUrl: 'pages/data.html',
        controller: 'DataCtrl'
      }).
      otherwise({
        redirectTo: '/home'
      });
  } 
]);

