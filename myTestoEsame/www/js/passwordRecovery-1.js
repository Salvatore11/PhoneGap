

var passwordButton = {

    inviaRichiesta: function(){

        var domandainserita=document.getElementById("input-domanda").value;
        var rispostainserita=document.getElementById("input-risposta").value;

        //creo un array contentne la domanda e la risposta
        if(domandainserita == "xxx" && rispostainserita== "yyy"){
             var array= { "domanda" : domandainserita, "risposta" : rispostainserita};
        }
        //JSON.stringfy --> prende l'oggetto tra parentesi e lo fa diventare una stringa JSON
        //dati: sono la coppia che viene passata chiave/valore
        var dati = JSON.stringify(array);

        $.post("http://ptsv2.com/t/8m9ag-1528465493/post",dati,
                function(response, status){
                    alert("Data: " + response + "\nStatus: "+ status);
                    
                    //pre prendere la risposta proveniente da server
                    var prendiRispo=JSON.parse(response);
                    //superfluo
                    console.log(prendiRispo.email);

                    if(prendiRispo.result == "ok") {
                        console.log(prendiRispo["email"]);
                        $.mobile.navigate("#page-confermaMail");
                        verify.getEmail(prendiRispo["email"]);
                    }
        })
         
    },

    backButtonClick : function(){
        $.mobile.navigate("#page-login");
    }
};
