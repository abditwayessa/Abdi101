define({ 
 
  KillSession: function() {
    console.log("Session1: " + kony.store.getItem("userid"));
    kony.store.removeItem("userid");
    
  },
  EncryptData: function(text, shift) {
    var result = "";
    for (var i = 0; i < text.length; i++) {
        var char = text.charCodeAt(i);
        result += String.fromCharCode(char + shift);
    }
    return result;
},
  
  Validation: function(){
    var self = this;
    var username = self.view.txtUsername.text;
    var password = self.view.txtPassword.text;
	self.view.txtError.text = " ";
    
    if(username === ""){
      self.view.usernameCheck.text = "Please enter your username!";
    }else if(password === ""){
       self.view.passwordCheck.text = "Please enter your password!";
    }else{
      self.view.usernameCheck.text = "";
      self.view.passwordCheck.text = "";
    }
},

  
  Signin: function(){
    var self = this;
     kony.application.showLoadingScreen(null, null, constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, true, {});
    var passw = self.view.txtPassword.text;
    var passx = self.EncryptData(passw, 5);
    if(self.view.txtUsername.text === "" && self.view.txtPassword.text === ""){
      self.view.txtError.text = "Please enter username and password!";
       kony.application.dismissLoadingScreen();
    }else if(self.view.txtUsername.text === ""){
      self.view.txtError.text = "Please enter your username!";
       kony.application.dismissLoadingScreen();
    }else if(self.view.txtPassword.text === ""){
      self.view.txtError.text = "Please enter your password!";
       kony.application.dismissLoadingScreen();
    }else{
    function INVOKE_SERVICE_a777badde36f436182eec4843de33db9_Callback(
      status, abdiapp_SignIn) {
      var jsonString = JSON.stringify(abdiapp_SignIn);
      const responseData = JSON.parse(jsonString);
      if (responseData.records && responseData.records.length > 0) {
        kony.store.setItem("userid", responseData.records[0]["id"]);
     	self.view.txtPassword.text = "";
        self.view.txtUsername.text = "";
        kony.application.dismissLoadingScreen();
        var ntf = new kony.mvc.Navigation("BMI");
        ntf.navigate();
      } else {
        self.view.txtPassword.text = "";
        self.view.txtUsername.text = "";
         self.view.txtError.text = "Invalid credential!";
//         function SHOW_ALERT_c14d184a8ec248c5a0dda1b159ee647a_True() {}
//         function SHOW_ALERT_c14d184a8ec248c5a0dda1b159ee647a_Callback() {
//           SHOW_ALERT_c14d184a8ec248c5a0dda1b159ee647a_True();
//         }
//         kony.ui.Alert({
//           "alertType": constants.ALERT_TYPE_ERROR,
//           "alertTitle": "Invalid Credential",
//           "message": "Your username or password is invalid!",
//           "alertHandler": SHOW_ALERT_c14d184a8ec248c5a0dda1b159ee647a_Callback
//         }, {
//           "iconPosition": constants.ALERT_ICON_POSITION_LEFT
//         });
      }
       kony.application.dismissLoadingScreen();
    }
   
    
    if (abdiapp_SignIn_inputparam == undefined) {
        var abdiapp_SignIn_inputparam = {};
    }
    
    abdiapp_SignIn_inputparam["serviceID"] = "DataModels$abdiapp_SignIn";
    
    abdiapp_SignIn_inputparam["username"] = self.view.txtUsername.text;
    abdiapp_SignIn_inputparam["password"] = passx;
    console.log("abdi: " + passx  +" Useer: " + self.view.txtUsername.text);
    var abdiapp_SignIn_httpheaders = {};
    abdiapp_SignIn_inputparam["httpheaders"] = abdiapp_SignIn_httpheaders;
    var abdiapp_SignIn_httpconfigs = {};
    abdiapp_SignIn_inputparam["httpconfig"] = abdiapp_SignIn_httpconfigs;
    DataModel$abdiapp_SignIn = mfintegrationsecureinvokerasync(abdiapp_SignIn_inputparam, "DataModels", "abdiapp_SignIn", INVOKE_SERVICE_a777badde36f436182eec4843de33db9_Callback);
  }
  }
 });

