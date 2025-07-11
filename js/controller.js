var myControllers = angular.module('myControllers', ['ngSanitize']);

myControllers.controller('NavCtrl', ['$scope', '$location',
  function($scope, $location) {
    $scope.isActive = function (viewLocation) { 
      return viewLocation === $location.path();
    };
  }
]);

// myControllers.controller('HomeCtrl', ['$scope', '$http',
//   function($scope, $http) {
//     $http.get('data/interest.json').success(function(data) {
//       $scope.interests = data;
//     });
//     $http.get('data/honor.json').success(function(data) {
//       $scope.honors = data;
//     });
//   }
// ]);


myControllers.controller('HomeCtrl', ['$scope', '$http',
  function($scope, $http) {
    $http.get('data/publication.json').success(function(data) {
      $scope.publications = data;
    });
    $http.get('data/teaching.json').success(function(data) {
      $scope.teachings = data;
    });
    $http.get('data/honor.json').success(function(data) {
      $scope.honors = data;
    });
      $http.get('data/journal.json').success(function(data) {
      $scope.journals = data;
    });
    $http.get('data/magazine.json').success(function(data) {
      $scope.magzines = data;
    });
    $http.get('data/conference.json').success(function(data) {
      $scope.conferences = data;
    });
  }
]);

// myControllers.controller('HomeCtrl', ['$scope', '$http',
//   function($scope, $http) {
//     $http.get('data/honor.json').success(function(data) {
//       $scope.honors = data;
//     });
//   }
// ]);

// myControllers.controller('NewsCtrl', ['$scope', '$http',
//   function($scope, $http) {
//     $http.get('data/event.json').success(function(data) {
//       $scope.events = data;
//     });
//   }
// ]);

myControllers.controller('NewsCtrl', ['$scope', '$http', '$sce',
  function($scope, $http, $sce) {
    $http.get('data/event.json').success(function(data) {
      // 遍历每条 news item，信任其 HTML 内容
      $scope.events = data.map(function(item) {
        item.content = $sce.trustAsHtml(item.content);
        return item;
      });
    });
  }
]);


myControllers.controller('PublicationCtrl', ['$scope', '$http',
  function($scope, $http) {
    $http.get('data/journal.json').success(function(data) {
      $scope.journals = data;
    });
    $http.get('data/magazine.json').success(function(data) {
      $scope.magzines = data;
    });
    $http.get('data/conference.json').success(function(data) {
      $scope.conferences = data;
    });
  }
]);

myControllers.controller('ResearchCtrl', ['$scope', '$http',
  function($scope, $http) {
    $http.get('data/project.json').success(function(data) {
      $scope.projects = data;
    });
  }
]);

myControllers.controller('ServiceCtrl', ['$scope', '$http',
  function($scope, $http) {
    $http.get('data/service.json').success(function(data) {
      $scope.services = data;
    });
  }
]);

myControllers.controller('TeachCtrl', ['$scope', '$http',
  function($scope, $http) {
    $http.get('data/course.json').success(function(data) {
      $scope.courses = data;
    });
  }
]);

myControllers.controller('StudentCtrl', ['$scope', '$http',
  function($scope, $http) {
    $http.get('data/member.json').success(function(data) {
      $scope.members = data;
    });
  }
]);

myControllers.controller('MaterialCtrl', ['$scope', '$http',
  function($scope, $http) {
    $http.get('data/material.json').success(function(data) {
      $scope.materials = data;
    });
  }
  ]);

    myControllers.controller('DataCtrl', ['$scope', '$http',
  function($scope, $http) {
    $http.get('data/data.json').success(function(data) {
      $scope.data1 = data;
    });
  }
]);
