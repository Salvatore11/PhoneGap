var mEmail="";

var verify = {

    getEmail : function(email){
        mEmail = email;
        document.getElementById("input-email").value = (mEmail.toString());

    }
}