define({ 
  
  NavigateToBMI: function(){
     kony.application.destroyForm("BMI");
    var ntf = new kony.mvc.Navigation("BMI");
    ntf.navigate();
	},
  NavigateToProfile: function(){
     kony.application.destroyForm("Profile");
    var ntf = new kony.mvc.Navigation("Profile");
    ntf.navigate();
  },
  NavigateToIdeal: function(){
     kony.application.destroyForm("Ideal");
    var ntf = new kony.mvc.Navigation("Ideal");
    ntf.navigate();
  },
	OnCalculate: function(){
      var self = this;
      var height = self.view.txtHeight.text;
      var bmi = self.view.txtBmi.text;
      var result = self.view.lblResult.text;
      var resvar;  
      
      resvar = (height * height) * bmi;	
      self.view.lblResult.text = resvar.toFixed(2) ;
      self.SaveResult(height, bmi, resvar.toFixed(2));
	},
  
   SaveResult: function(height, bmi, weight){
     console.log("h: " + height + " w: " + weight + " Status: " + bmi);
    
    var self = this;
     function BMI_Response_Callback(
      status, abdiapp_bmi_table_create) {}
    
     if (bmi_inputparama == undefined) {
        var bmi_inputparama = {};
    }
    
    bmi_inputparama["serviceID"] = "DataModels$abdiapp_ideal_table_create";
    bmi_inputparama["userid"] = kony.store.getItem("userid");
    bmi_inputparama["ideal_height"] =  height;
    bmi_inputparama["userWeight"] =  weight;
    bmi_inputparama["desire_bmi"] = bmi;
    var bmi_httpheaders = {};
    bmi_inputparama["httpheaders"] = bmi_httpheaders;
    var bmi_httpconfigs = {};
    bmi_inputparama["httpconfig"] = bmi_httpconfigs;
    DataModel$abdiapp_SignIn = mfintegrationsecureinvokerasync(bmi_inputparama, "DataModels", "abdiapp_ideal_table_create", BMI_Response_Callback);
    
  },
    Logout: function(){
    kony.store.clear();
     kony.application.destroyForm("Signin");
    var ntf = new kony.mvc.Navigation("Signin");
    ntf.navigate();
  }

 });