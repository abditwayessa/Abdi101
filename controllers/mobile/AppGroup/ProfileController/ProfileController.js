define({ 
   KillSession: function (){
   if(kony.store.getItem("userid")==null){
     var ntf = new kony.mvc.Navigation("Signin");
    ntf.navigate();
   }
 },
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
  UserDatas: function(){
    var self = this;
    
    function Userdata_Callback(status, abdiapp_UserData) {
       var jsonString = JSON.stringify(abdiapp_UserData);
       const responseData = JSON.parse(jsonString);

        if (responseData.records && responseData.records.length > 0) {
         
          self.view.lblEmail.text = responseData.records[0]["email"];
          self.view.lblFullname.text = responseData.records[0]["fullname"];
          self.view.lblUsername.text = responseData.records[0]["username"];          
        }

   }
    if (abdiapp_UserData_inputparam == undefined) {
        var abdiapp_UserData_inputparam = {};
    }
    
    abdiapp_UserData_inputparam["serviceID"] = "DataModels$abdiapp_UserData";
    abdiapp_UserData_inputparam["id"] = kony.store.getItem("userid");
    var abdiapp_UserData_httpheaders = {};
    abdiapp_UserData_inputparam["httpheaders"] = abdiapp_UserData_httpheaders;
    var abdiapp_UserData_httpconfigs = {};
    abdiapp_UserData_inputparam["httpconfig"] = abdiapp_UserData_httpconfigs;
    DataModel$abdiapp_UserData = mfintegrationsecureinvokerasync(abdiapp_UserData_inputparam, "DataModels", "abdiapp_UserData",  Userdata_Callback);
    self.BMIData();
  },
  
  BMIData:function(){
     var self = this;
    
    function Bmidata_Callback(status, abdiapp_BMIData) {
       var jsonString = JSON.stringify(abdiapp_BMIData);
       const responseData = JSON.parse(jsonString);

        if (responseData.records && responseData.records.length > 0) {
          var data = responseData.records[0];
<<<<<<< HEAD
//           self.view.SegmentBmi.widgetDataMap = {
//             lblHeight: responseData.records[0]["height"],
//             lblWeight: responseData.records[0]["weight"],
//             lblBmi: responseData.records[0]["bmi_result"]
//         };
=======
>>>>>>> 6bcd227 (Deleted commented value)
          
          self.view.seg.setData(abdiapp_BMIData["records"]);
                
        }
   }
      if (abdiapp_BMIData_inputparam == undefined) {
        var abdiapp_BMIData_inputparam = {};
    }
      abdiapp_BMIData_inputparam["serviceID"] = "DataModels$abdiapp_UserData";
    abdiapp_BMIData_inputparam["userid"] = kony.store.getItem("userid");
    var abdiapp_BMIData_httpheaders = {};
    abdiapp_BMIData_inputparam["httpheaders"] = abdiapp_BMIData_httpheaders;
    var abdiapp_BMIData_httpconfigs = {};
    abdiapp_BMIData_inputparam["httpconfig"] = abdiapp_BMIData_httpconfigs;
       DataModel$abdiapp_BMIData = mfintegrationsecureinvokerasync(abdiapp_BMIData_inputparam, "DataModels", "abdiapp_BMIData",  Bmidata_Callback);
  },
  
  fetchUsersData: function() {
    var serviceName = "DataModel";  
    var client = kony.sdk.getCurrentInstance();
    var integrationSvc = client.getIntegrationService(serviceName);
    var operationName = "abdiapp_BMIData"; 
    var params = {
      "usersid" : kony.store.getItem("userid")
    };
    var headers = {
      "userid" : kony.store.getItem("userid")
  };
    var options = {
    "httpRequestOptions": {
        "timeoutIntervalForRequest": 60,
        "timeoutIntervalForResource": 600
    }
};
    integrationSvc.invokeOperation(operationName, headers, params, function(response) {
    kony.print("Integration Service Response is: " + JSON.stringify(response));
}, function(error) {
    kony.print("Integration Service Failure:" + JSON.stringify(error));
}, options);
    
<<<<<<< HEAD
//     var integrationObj = KNYMobileFabric.getIntegrationService(serviceName);
    
//     integrationObj.invokeOperation(operationName,d {}, headers, function(response) {
//         var data = response.records; 
//       	self.view.SegmentBmi.setData(data);
//         frmMain.segUsers.setData(data); 
//     }, function(error) {
//         alert("Error fetching data: " + JSON.stringify(error));
//     };
=======
>>>>>>> 6bcd227 (Deleted commented value)
},
  Logout: function(){
    kony.store.clear();
     kony.application.destroyForm("Signin");
    var ntf = new kony.mvc.Navigation("Signin");
    ntf.navigate();
  }


 });