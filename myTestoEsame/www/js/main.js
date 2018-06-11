// Used to load JS scripts inside other JS scripts
jQuery.loadScript = function (url, callback) {
    jQuery.ajax({
        url: url,
        dataType: 'script',
        success: callback,
        async: true
    });
}

/* Scripts flags */
var loginScriptLoaded = false;
var regPart1ScriptLoaded = false;
var regPart2ScriptLoaded = false;
var regPart3ScriptLoaded = false;
var sonsScriptLoaded = false;
/****************/

var userDetailsObject = null;

var headerHeight;

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

        $.loadScript('../js/login.js', function () {
            loginScriptLoaded = true;

            document.getElementById("login-toolbar").style.display = "block";
            document.getElementById("login-main").style.display = "block";

            headerHeight = $("#login-toolbar").height();
        });

        const storedEmail = localStorage.getItem("email");
        const storedPassword = localStorage.getItem("password");

        if (storedEmail != null && storedEmail != "null" && storedPassword != null && storedEmail != "null") {
            $("#login-email").val(storedEmail);
            $("#login-password").val(storedPassword);
        }
    },

}

function hash(password) {
    var hash = 0;

    const length = password.length;
    if (length === 0)
        return hash;

    for (var index = 0; index < length; ++index) {
        const chr = password.charCodeAt(index);
        hash = ((hash << 5) - hash) + chr;
        hash |= 0; // Convert to 32bit integer
    }

    return hash;
};