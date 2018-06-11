
var vegetarians, vegans, other;

var regPart3 = {
	
	backButtonClick: function () {
		$.mobile.navigate("#page-reg-part-2");
	},

	saveButtonClick: function () {
		navigator.notification.alert('salvataggio dei dati');
		//todo : call .ajax o .post al server
	}

}