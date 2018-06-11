var userId, userName, userSurname;

var login = {
    authenticate: function () {
        
        // TODO: authenticate
        
    },

    register: function () {
        if (!regPart1ScriptLoaded) {
            $.loadScript('../js/reg-part-1.js', function () {
                regPart1ScriptLoaded = true;
                regPart1.init();
            });
        }
        navigator.notification.alert("Benvenuto alla procedura di registrazione!", null, "Informazione", "Ok");
        $.mobile.navigate("#page-reg-part-1");
    },

    passwordRecovery: function () {
		
         // TODO: recover password
    }
};