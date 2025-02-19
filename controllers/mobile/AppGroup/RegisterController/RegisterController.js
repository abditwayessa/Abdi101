define({ 
  Init: function(){
    var self = this;
      self.view.btnRegister.setEnabled(false);
  },
  
encryptData: function(text, shift) {
    var result = "";
    for (var i = 0; i < text.length; i++) {
        var char = text.charCodeAt(i);
        result += String.fromCharCode(char + shift);
    }
    return result;
},
//   First Name Validation
 FullNameValidator: function(){
   var self = this;
  self.view.txtError.text = " ";
   var name = self.view.txtFullname.text;
    var email = self.view.txtEmail.text;
    var username = self.view.txtUsername.text;
    var password = self.view.txtPassword.text;
    var confirmpassword = self.view.txtConfirmPassword.text;
   var namePattern =  /^[a-zA-Z ]+$/;
   
   if (name === "") {
     self.view.fullnameCheck.text = "Please enter first name!";
     self.view.btnRegister.setEnabled(false);
     } else if (!namePattern.test(name)) {
     self.view.fullnameCheck.text = "Invalid character!";
     self.view.btnRegister.setEnabled(false);
   }else if(name !== "" || namePattern.test(name)){
     self.view.fullnameCheck.text = " ";
     self.view.btnRegister.setEnabled(true);
   }      
    if(name === "" || email === "" || username === "" || password === "" || confirmpassword === ""){
     self.view.btnRegister.setEnabled(false);
    }else{
     self.view.btnRegister.setEnabled(true);
    }
 },
  //   Email Validation
EmailValidator: function(){
   var self = this;
  self.view.txtError.text = " ";
   var email = self.view.txtEmail.text;
  var name = self.view.txtFullname.text;
    var username = self.view.txtUsername.text;
    var password = self.view.txtPassword.text;
    var confirmpassword = self.view.txtConfirmPassword.text;
   var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;   
   if (email === "") {
     self.view.emailCheck.text = "Please enter email address!";
     self.view.btnRegister.setEnabled(false);
     } else if (!emailPattern.test(email)) {
     self.view.emailCheck.text = "Invalid email address!";
     self.view.btnRegister.setEnabled(false);
   }else if(email !== "" || emailPattern.test(email)){
     self.view.emailCheck.text = " ";
     self.view.btnRegister.setEnabled(true);
   }
   if(name === "" || email === "" || username === "" || password === "" || confirmpassword === ""){
     self.view.btnRegister.setEnabled(false);
    }else{
     self.view.btnRegister.setEnabled(true);
    }
 },
  //   Password Validation
PasswordValidator: function(){
  var self = this;
  self.view.txtError.text = " ";
  var password = self.view.txtPassword.text;
  var name = self.view.txtFullname.text;
    var email = self.view.txtEmail.text;
    var username = self.view.txtUsername.text;
    var confirmpassword = self.view.txtConfirmPassword.text;
  var upper = /[A-Z]/;
  var lower = /[a-z]/;
  var num = /[0-9]/;
  var specialSymbol = /[^A-Za-z0-9]/;
  var valid = true;
  
   if(!lower.test(password)){
    self.view.passwordCheck.text = "Atleast 1 lower case!";
    self.view.txtConfirmPassword.setEnabled(false);
    self.view.btnRegister.setEnabled(false);
    valid = false;
  }else if(!upper.test(password)){
    self.view.passwordCheck.text = "Atleast 1 upper case!";
    self.view.txtConfirmPassword.setEnabled(false);
    self.view.btnRegister.setEnabled(false);
    valid = false;
  }else if(!specialSymbol.test(password)){
     self.view.passwordCheck.text = "Atleast 1 special symbol!";
    self.view.txtConfirmPassword.setEnabled(false);
     self.view.btnRegister.setEnabled(false);
    valid = false;
  }else if(!num.test(password)){
    self.view.passwordCheck.text = "Atleast 1 number!";	
    self.view.txtConfirmPassword.setEnabled(false);
    self.view.btnRegister.setEnabled(false);
    valid = false;
  }else if(password.length < 6){
     self.view.passwordCheck.text = "Password lenght must above 5!";
    self.view.txtConfirmPassword.setEnabled(false);
     self.view.btnRegister.setEnabled(false);
    valid = false;
  }else{
    valid = true
  }
  if(valid){
     self.view.passwordCheck.text = " ";
    self.view.txtConfirmPassword.setEnabled(true);
     self.view.btnRegister.setEnabled(true);
   }  
   if(name === "" || email === "" || username === "" || password === "" || confirmpassword === ""){
     self.view.btnRegister.setEnabled(false);
    }else{
     self.view.btnRegister.setEnabled(true);
    }
 },
   //   Confirm Password Validation
  ConfirmValidator: function(){
    var self = this;
  self.view.txtError.text = " ";
    var password = self.view.txtPassword.text;
    var name = self.view.txtFullname.text;
    var email = self.view.txtEmail.text;
    var username = self.view.txtUsername.text;
    var confirmPassword = self.view.txtConfirmPassword.text;
    
    if(password !== confirmPassword){
      self.view.confirmPasswordCheck.text = "Password doesn't match!";
     self.view.btnRegister.setEnabled(false);
    }else{
       self.view.confirmPasswordCheck.text = " ";
      return true;
     self.view.btnRegister.setEnabled(true);
    }
    
     if(name === "" || email === "" || username === "" || password === "" || confirmPassword === ""){
     self.view.btnRegister.setEnabled(false);
    }else{
     self.view.btnRegister.setEnabled(true);
    }
  },
//   Onsubmit clear all value
  OnSubmit: function(){
    var self = this;
    var fullname = self.view.txtFullname;
    var email = self.view.txtEmail;
    var username = self.view.txtUsername;
    var password = self.view.txtPassword;
    var confirmpassword = self.view.txtConfirmPassword;
    
    fullname.text = "";
    email.text = "";
    username.text = "";
    password.text = "";
    confirmpassword.text = "";
},
//   register functionalities
  SendData: function(){
    var self = this;
    kony.application.showLoadingScreen(null, null, constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, true, {});
    var password = self.view.txtPassword.text;
    var name = self.view.txtFullname.text;
    var email = self.view.txtEmail.text;
    var username = self.view.txtUsername.text;
    var confirmPassword = self.view.txtConfirmPassword.text;
     if(name === "" || email === "" || username === "" || password === "" || confirmPassword === ""){
       kony.application.dismissLoadingScreen();
       self.view.txtError.text = "Please enter all field!";
    }else{

      var serviceName = "DataModels";
      
	  var operationName = "abdiapp_users_create";
      var operationName1 = "userAvailability";
      
      var client = kony.sdk.getCurrentInstance();
      var client1 = kony.sdk.getCurrentInstance();
      
      var integrationSvc = client.getIntegrationService(serviceName);
      var integrationSvc1 = client1.getIntegrationService(serviceName);
      
      var params = {
        "fullname": self.view.txtFullname.text,
        "email": self.view.txtEmail.text,
        "username": self.view.txtUsername.text,
        "password": self.encryptData(self.view.txtPassword.text, 5) 
      };
       var params1 = {
        "email": self.view.txtEmail.text,
        "username": self.view.txtUsername.text,
      };
      
       integrationSvc1.invokeOperation(operationName1, {}, params1, function(response) {
         
          const responseData = JSON.parse(JSON.stringify(response));
           if (responseData.records && responseData.records.length > 0) {
             kony.application.dismissLoadingScreen();
             if(responseData.records[0]["email"] === email && responseData.records[0]["username"] === username){
                self.view.txtError.text = "Already registered before!";
             }else if(responseData.records[0]["email"] === email){
               self.view.txtError.text = "User already exist with this email!";
             }else if(responseData.records[0]["username"] === username){
               self.view.txtError.text = "This username is already taken!";
             }
           }else{
             integrationSvc.invokeOperation(operationName, {}, params, function(response) {
               kony.application.dismissLoadingScreen();
               self.view.txtPassword.text = "";
               self.view.txtFullname.text = "";
               self.view.txtEmail.text = "";
               self.view.txtUsername.text = "";
               self.view.txtConfirmPassword.text = "";
               var ntf = new kony.mvc.Navigation("RegistrationSuccess");
               ntf.navigate();
             }, function(error) {
               kony.application.dismissLoadingScreen();
               self.view.txtError.text = "Something wents wrong while registering users!";
             });
           }
      }, function(error) {
         kony.application.dismissLoadingScreen();
         self.view.txtError.text = "Something wents wrong while checking users!";
      });
      

      
}
  },
  
  ToLogin: function(){
    var self = this;
    var ntf = new kony.mvc.Navigation("Signin");
    ntf.navigate();
},
  Ondestroy: function(){
  kony.application.destroyForm("Register");
}
 });