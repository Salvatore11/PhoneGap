var registr={
    backButton: function() {
        $.mobile.navigate("#page-login");
    },

    dataNascita: function(){
        if($("#checkbox-dataNascita").is(":checked")){
            $("#lista-data").hide();
        }else{
            $("#lista-data").show();
        }
    },

    registrati :function(){
        $.mobile.navigate("#page-registrazione2");
    }

}