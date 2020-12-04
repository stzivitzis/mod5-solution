(function () {



angular.module('public')
.controller('RegistrationController', RegistrationController);

RegistrationController.$inject = ['MenuService'];
function RegistrationController(MenuService) {
  var reg = this;



  reg.submit = function () {
    reg.failMesage = "";
    reg.completed = false;

    var test = MenuService.getMenuItem(reg.user.shortname).then(function (data) {
      // console.log(data.name);
      // reg.user.favouriteDish = data;
      // console.log(reg);
      // console.log(reg.user.favouriteDish);

      if (data != "ERROR") {

       reg.user.favouriteDish = data;

       MenuService.savedUser = reg.user;

       reg.completed = true;

       //console.log(MenuService.savedUser);
      }
      else{
        reg.failMesage = "No such menu number exists";
      }


      return data;
    });


  };
}

})();
