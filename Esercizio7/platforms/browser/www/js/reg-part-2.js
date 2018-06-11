var partner, partnerAge;
var sonsFlag;
var sonsJson = null;
var pets, petsType;

var regPart2 = {
	init: function () {
		$('#pets-select').selectmenu();
		$('#pets-select').selectmenu('disable');

		this.initPetsSelect();

	},	
	
	initPetsSelect: function () {
		/* Change listener */
		$('#pets-select').change(function () {
			petsType = $("#pets-select option:selected").val();
		});

		$('#pets-select').val("Cani").attr('selected', true).siblings('option').removeAttr('selected');
		$('#pets-select').selectmenu();
		$('#pets-select').selectmenu("refresh");
	},

	partnerCbClick: function () {
		if ($('#partner-cb').is(':checked')) {
			$('#tr-partner').hide();
			partner = "nspec";
		} else {
			$('#tr-partner').show();
			partner = "";
		}
	},

	sonsCbClick: function () {
		if ($('#sons-cb').is(':checked')) {
			$('#tr-sons').hide();
			sonsFlag = "nspec";
		} else {
			$('#tr-sons').show();
			sonsFlag = "";
		}
	},

	petsCbClick: function () {
		if ($('#pets-cb').is(':checked')) {
			$('#tr-pets').hide();
			pets = "nspec";
		} else {
			$('#tr-pets').show();
			pets = "";
		}
	},

	/* Partner radio buttons functions */
	partnerYesClick: function () {
		$("#partner-age").textinput('enable');
	},
	partnerNoClick: function () {
		$("#partner-age").textinput('disable');
	},

	/* Sons radio buttons functions */
	sonsYesClick: function () {
		$('#sons-button').removeClass('ui-state-disabled');
	},
	sonsNoClick: function () {
		$('#sons-button').addClass('ui-state-disabled');
	},

	/* Pets radio buttons functions */
	petsYesClick: function () {
		$('#pets-select').selectmenu('enable');
	},
	petsNoClick: function () {
		$('#pets-select').selectmenu('disable');
	},
	
	backButtonClick: function () {
		$.mobile.navigate("#page-reg-part-1");
	},

	update: function () {
		partnerAge = $('#partner-age').val();
		
		if (sonsFlag != "nspec") {
			sonsFlag = $("input[name='sons-radio-choice']:checked").val();
			if (sonsFlag == "n")
				sonsJson = null;
		} else {
			sonsJson = null;
		}

	},
	
	sonsButtonClicked: function () {
		if (!sonsScriptLoaded) {
			$.loadScript('../js/sons.js', function () {
				sonsScriptLoaded = true;
				sons.reloadList();
			});
		}

		$.mobile.navigate("#page-sons");
	},	

	nextButtonClick: function () {

		this.update();

		if ( (partner == "nspec" || partner == 'n' || (partner == 'y' && partnerAge.length > 0))) {
			if (!regPart3ScriptLoaded) {
				$.loadScript('../js/reg-part-3.js', function () {
					regPart3ScriptLoaded = true;
				});
			}
			$.mobile.navigate("#page-reg-part-3");
			
		} else
			navigator.notification.alert("Compila tutti i campi obbligatori", null, "Attenzione", "Ok");

	}

}