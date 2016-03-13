// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic','ngCordova'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(false);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });

})

//TODO: Crear un controlador aparte para la geolocalización
//La geolocalización está incluida en el controlador ShowCtrl

.controller('ShowCtrl',function($scope,$cordovaGeolocation){
    $scope.estado=false;

    $scope.mensajes = [{
    }];

    $scope.escribe = function(){
        if(!(angular.equals($scope.mensaje,undefined))){
         $scope.mensajes.push({escritor:'Ignacio', texto: ': '+$scope.mensaje});
        }else{
         $scope.mensajes.push({escritor:'Ignacio', texto: ': no has escrito nada'});
        }
    };

    $scope.aparece = function(){
        $scope.estado=true;
    };

    $scope.esconde = function(){
        $scope.estado=false;
        $scope.escribe();
    };

    var posOptions = {timeout: 1000, enableHighAccuracy: false};


    // Función que permite obtener la localización. Para cualquier duda mirar: http://ngcordova.com/docs/plugins/geolocation/
    $scope.dondeEstoy = function(){

    $cordovaGeolocation.getCurrentPosition(posOptions).then(function(position) {
          var latitud = position.coords.latitude;
          var longitud = position.coords.longitude;
          alert('Estoy en la posición:'+latitud+' grados latitud'+' y '+longitud+' grados longitud');
    })

    };
})
