var mEmail;

var recoveryFunct = {

    sendRequest: function(){

        var question = document.getElementById("recovery-question").value;
        var answer = document.getElementById("recovery-answer").value;

        var array = {"domanda": question , "risposta": answer};

        var jsonData= JSON.stringify(array);

        $.post("http://ptsv2.com/t/8m9ag-1528465493/post", jsonData,
                 function(response, status){

                    var prendiRispo = JSON.parse(response);

                    if(prendiRispo.result=="ok"){
                        console.log("minchia, funziona!");
                        $.mobile.navigate("#page-passwordRecovery-2");
                        verify.getEmail(prendiRispo.email);
                    }
        })
        
    }

}

