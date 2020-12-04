(function () {



angular.module('public')
.controller('InfoController', InfoController);

InfoController.$inject = ['MenuService', 'ApiPath'];
function InfoController(MenuService, ApiPath) {
  var info = this;

  info.basePath = ApiPath;
  console.log(MenuService);
  if(MenuService.savedUser){
    info.signedUp = true;
    info.userName = MenuService.savedUser.username;
    info.email = MenuService.savedUser.email;
    info.phone = MenuService.savedUser.phone;
    info.short_name = MenuService.savedUser.favouriteDish.short_name;
    info.description = MenuService.savedUser.favouriteDish.description;
    info.name = MenuService.savedUser.favouriteDish.name;
    console.log(info);
  }
  else{
    info.notSignedUp = true;
  }



}

})();
