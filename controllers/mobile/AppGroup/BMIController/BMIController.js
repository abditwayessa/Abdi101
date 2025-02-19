define({ 
  
 KillSession: function (){
   if(kony.store.getItem("userid")==null){
     kony.application.destroyForm("Signin");
     var ntf = new kony.mvc.Navigation("Signin");
    ntf.navigate();
   }
 },
 NavigateToBMI: function(){
   kony.application.destroyForm("BMI");
    var ntf = new kony.mvc.Navigation("BMI");
    ntf.navigate();
	},
  
  NavigateToProfile: function() {
    kony.application.destroyForm("Profile");
    var ntf = new kony.mvc.Navigation("Profile");
    ntf.navigate();
  },
  
  NavigateToIdeal: function(){
    kony.application.destroyForm("Ideal");
    var ntf = new kony.mvc.Navigation("Ideal");
    ntf.navigate();
  },
	onCalculate: function(){
      var self = this;
      var h = self.view.txtbxHeight.text;
      var w = self.view.txtbxWeight.text;
      var res = self.view.result.text;
      var resvar;
      var status;
      if(h !== ""){
        
      
      resvar = w / (h * h);
      
      self.view.lblHeight.text = h + "m";
      self.view.lblHeight.fontColor = "ffffff";
      self.view.lblWeight.text = w + "kg";
      self.view.result.text = resvar.toFixed(2) + "kg/m2";
     
      if(resvar < 16){
        self.view.lblstatus.text = "Severe Thinness";
        status =  "Severe Thinness";
      } else if(resvar >= 16 && resvar < 17){
        self.view.lblstatus.text = "Moderate Thinness";
        status = "Moderate Thinness";
      }  else if(resvar >= 17 && resvar < 18.5){
        self.view.lblstatus.text = "Mild Thinness";
        status  = "Mild Thinness";
      }  else if(resvar >= 18.5 && resvar < 25){
        self.view.lblstatus.text = "Normal";
        status  = "Normal";
      }  else if(resvar >= 25 && resvar < 30){
        self.view.lblstatus.text = "Overweight";
        status = "Overweight";
      }  else if(resvar >= 30 && resvar < 35){
        self.view.lblstatus.text = "Obese Class I";
        status = "Obese Class I";
      }  else if(resvar >= 35 && resvar < 40){
        self.view.lblstatus.text = "Obese Class II";
        status  = "Obese Class II";
      }  else if(resvar >= 40){
        self.view.lblstatus.text = "Obese Class III";
        status = "Obese Class III";
      } 
      this.SaveResult(h, w, resvar.toFixed(2), status);
       self.view.txtbxHeight.text = "";
      self.view.txtbxWeight.text = "";
      }
//         console.log("h: " + h + " w: " + w + " res: " + resvar.toFixed(2) + " Status: " + status);
	},
  onChange: function(){
    var self = this;
      var h = self.view.txtbxHeight;
      var w = self.view.txtbxWeight.text;
      var res = self.view.result.text;
      var resvar;
      
      resvar = w / (h * h);
      
      self.view.result.text = resvar.toFixed(2)+"kg/m2";
     if(resvar < 16){
        self.view.lblstatus.text = "Severe Thinness";
      } else if(resvar >= 16 && resvar < 17){
        self.view.lblstatus.text = "Moderate Thinness";
      }  else if(resvar >= 17 && resvar < 18.5){
        self.view.lblstatus.text = "Mild Thinness";
      }  else if(resvar >= 18.5 && resvar < 25){
        self.view.lblstatus.text = "Normal";
      }  else if(resvar >= 25 && resvar < 30){
        self.view.lblstatus.text = "Overweight";
      }  else if(resvar >= 30 && resvar < 35){
        self.view.lblstatus.text = "Obese Class I";
      }  else if(resvar >= 35 && resvar < 40){
        self.view.lblstatus.text = "Obese Class II";
      }  else if(resvar >= 40){
        self.view.lblstatus.text = "Obese Class III";
      } 

	},
  SaveResult: function(h, w, bmi, bmi_status){
     console.log("h: " + h + " w: " + w + " res: " + bmi + " Status: " + bmi_status);
    
    var self = this;
     function BMI_Response_Callback(
      status, abdiapp_bmi_table_create) {}
    
     if (bmi_inputparama == undefined) {
        var bmi_inputparama = {};
    }
    
    bmi_inputparama["serviceID"] = "DataModels$abdiapp_bmi_table_create";
    bmi_inputparama["userid"] = kony.store.getItem("userid");
    bmi_inputparama["userHeight"] =  h;
    bmi_inputparama["userWeight"] =  w;
    bmi_inputparama["bmiResult"] = bmi;
    bmi_inputparama["bmiStatus"] = bmi_status;
    var bmi_httpheaders = {};
    bmi_inputparama["httpheaders"] = bmi_httpheaders;
    var bmi_httpconfigs = {};
    bmi_inputparama["httpconfig"] = bmi_httpconfigs;
    DataModel$abdiapp_SignIn = mfintegrationsecureinvokerasync(bmi_inputparama, "DataModels", "abdiapp_bmi_table_create", BMI_Response_Callback);
    
  },
  Logout: function(){
    kony.store.clear();
    kony.application.destroyForm("Signin");
    var ntf = new kony.mvc.Navigation("Signin");
    ntf.navigate();
  },
   SessionValidation: function(){
    var userid = kony.store.getItem("userid");
     if (user===""){
       var ntf = new kony.mvc.Navigation("Signin");
       ntf.navigate();
     }
  
}
  
 });