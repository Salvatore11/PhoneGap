//var userId, userName, userSurname;
var mEmail = "salvo";
var mPassword = "turuzzu";

var login = {
    Authenticate: function () {
      
        var email = document.getElementById("login-Email").value;
        var password= document.getElementById("login-password").value;

        $.post("http://ptsv2.com/t/8m9ag-1528465493/post", function(response, status){
            alert("Data: " + response + "\nStatus: "+ status);

            var prendiRispo=JSON.parse(response);
            console.log(prendiRispo.username);
            console.log(prendiRispo.password);

            if(prendiRispo.username== email && prendiRispo.password== password){
                $.mobile.navigate("#page-accesso");
            }else{
                alert("credenziali errate!");
            }
        })



        /*  
        var email = document.getElementById("login-Email").value;
        var password= document.getElementById("login-password").value;

         if((email == "")|| (email== "undefined")){
          alert("campo email obbligatorio");
          return false;
        }

        if((password == "") || (password == "undefined")){
             alert("campo password obbligaorio");
             return false;
        }

     if((email == mEmail) && (password == mPassword)){
         $.mobile.navigate("#page-accesso");
     }
     */
   
    },

    register: function () {
        $.mobile.navigate("#page-registrazione");
    },

    passwordRecovery: function () {
		$.mobile.navigate("#page-passwordRecovery-1");
    }
};