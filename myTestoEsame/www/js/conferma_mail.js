var mEmail="";

var verify = {

    getEmail: function(email){
        mEmail= email;
        document.getElementById("input-email").value = (mEmail.toString());
    },

    ottieniPassword : function(){
        console.log(mEmail);

        var email = document.getElementById("input-email").value;

        if(mEmail == email){
            console.log("la tua password è: minchia...");
        }
    },


    backButtonClick : function(){
        $.mobile.navigate("#page-passwordRecovery-1");
    }


  
};
