// The controller is a regular JavaScript function. It is called
// once when AngularJS runs into the ng-controller declaration.

function ConfigController($scope){

  // $scope is a special object that makes
  // its properties available to the view as
  // variables. Here we set some default values:

  $scope.showtooltip = false;
  $scope.value = 'Configuration';

  // if ($scope.active='android') {
  //         // $scope.platformName = 'android';
  //         $scope.appPath = '/Users/yi/Downloads/libon-android-client-3.0.1-qap-20140430.095235-20.apk';
  //         $scope.newCommandTimeout = '999999';
  //      }
  // else if($scope.active == 'ios'){
  //         // $scope.platformName = 'iOS';
  //         $scope.appPath = '/Users/yi/Downloads/libon.app';
  //         $scope.newCommandTimeout = '999999';
  //      }

  // Some helper functions that will be
  // available in the angular declarations

  $scope.hideTooltip = function(){

    // When a model is changed, the view will be automatically
    // updated by by AngularJS. In this case it will hide the tooltip.

    $scope.showtooltip = false;
  }

  $scope.toggleTooltip = function(e){
    e.stopPropagation();
    $scope.showtooltip = !$scope.showtooltip;
  }

  $scope.setPlatform = function(active){

    if (active=='android') {
          $scope.platformName = 'android';
          $scope.appPath = '/Users/yi/Downloads/libon-android-client-3.0.1-qap-20140430.095235-20.apk';
          $scope.newCommandTimeout = '999999';
       }
   else if(active == 'ios'){
          $scope.platformName = 'iOS';
          $scope.appPath = '/Users/yi/Downloads/libon.app';
          $scope.newCommandTimeout = '999999';
       }

  }
}