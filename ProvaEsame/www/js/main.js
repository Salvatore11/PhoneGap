var headerHeight;

var login ={
    authenticate: function(){

    },

    register: function(){

    },

    passwordRecovery: function (){
        $.mobile.navigate("#page-passwordRecovery-1");

    }
};




var main = {
    // Application Constructor
    init: function () {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function () {
        document.addEventListener('deviceready', this.onDeviceReady, false);
        document.addEventListener("backbutton", function (e) {
            e.preventDefault();
        }, false);
    },
    // deviceready Event Handler
    onDeviceReady: function () {
        main.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function (id) {
        document.getElementById("login-toolbar").style.display="block";
        document.getElementById("login-main").style.display="block";
    },
}
