var name, surname, gender, mobile;

var birthday;
var birthdayDayIndex, selectedDay;
var selectedMonth, selectedYear;

var regPart1 = {
	init: function () {
		this.initDaySelect();
		this.initMonthSelect();
		this.initYearSelect();
	},	
	
	initDaySelect: function () {
		/* Select widget filling */
		for (var index = 1; index <= 31; ++index) {
			var option;
			if (index < 10)
				option = "<option value='0" + index + "'>" + index + '</option>';
			else if (index == 29)
				option = '<option id="ventinove" value="' + index + '">' + index + '</option>';
			else if (index == 30)
				option = '<option id="trenta" value="' + index + '">' + index + '</option>';
			else if (index == 31)
				option = '<option id="trentuno" value="' + index + '">' + index + '</option>';
			else
				option = '<option value="' + index + '">' + index + '</option>';

			$("#birthday-day-select").append(option);
		}

		/* Change listener */
		$('#birthday-day-select').change(function () {
			birthdayDayIndex = $('#birthday-day-select').prop('selectedIndex') + 1;
			selectedDay = $("#birthday-day-select option:selected").val();
		});

		$('#birthday-day-select').val("01").attr('selected', true).siblings('option').removeAttr('selected');
		$('#birthday-day-select').selectmenu();
		$('#birthday-day-select').selectmenu("refresh");

		/* Default values */
		birthdayDayIndex = 1;
		selectedDay = "01";
	},
	
	initMonthSelect: function () {
		/* Select widget filling */
		const months = ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"];
		for (var index = 1; index <= 12; ++index) {
			var option;

			if (index < 10)
				option = "<option value='0" + index + "'>" + months[index - 1] + '</option>';
			else
				option = "<option value='" + index + "'>" + months[index - 1] + '</option>';

			$("#birthday-month-select").append(option)
		}

		/* Change listener */
		$('#birthday-month-select').change(function () {
			var newIndex = $('#birthday-month-select').prop('selectedIndex') + 1;

			if (newIndex == 4 || newIndex == 6 || newIndex == 9 || newIndex == 11) {
				if (selectedMonth == "02") {
					if (!regPart1.isLeapYear(selectedYear))
						$("#ventinove").removeAttr('disabled');

					$("#trenta").removeAttr('disabled');
				} else
					$("#trentuno").attr("disabled", "disabled");

				if (birthdayDayIndex > 30) {
					$('#birthday-day-select').val("30").attr('selected', true).siblings('option').removeAttr('selected');
					$('#birthday-day-select').selectmenu("refresh");

					birthdayDayIndex = 30;
					selectedDay = "30";
				}
			} else if (newIndex == 2) {
				if (!regPart1.isLeapYear(selectedYear))
					$("#ventinove").attr("disabled", "disabled");

				$("#trenta").attr("disabled", "disabled");
				$("#trentuno").attr("disabled", "disabled");

				if (!regPart1.isLeapYear(selectedYear) && birthdayDayIndex > 28) {
					$('#birthday-day-select').val("28").attr('selected', true).siblings('option').removeAttr('selected');
					$('#birthday-day-select').selectmenu("refresh");

					birthdayDayIndex = 28;
					selectedDay = "28";
				} else if (regPart1.isLeapYear(selectedYear) && birthdayDayIndex > 29) {
					$('#birthday-day-select').val("29").attr('selected', true).siblings('option').removeAttr('selected');
					$('#birthday-day-select').selectmenu("refresh");

					birthdayDayIndex = 29;
					selectedDay = "29";
				}
			} else {
				if (selectedMonth == "04" || selectedMonth == "06" || selectedMonth == "09" || selectedMonth == "11")
					$("#trentuno").removeAttr('disabled');
				else if (selectedMonth == "02") {
					if (!regPart1.isLeapYear(selectedYear))
						$("#ventinove").removeAttr('disabled');

					$("#trenta").removeAttr('disabled');
					$("#trentuno").removeAttr('disabled');
				}
			}

			selectedMonth = $("#birthday-month-select option:selected").val();
		});

		$('#birthday-month-select').val("01").attr('selected', true).siblings('option').removeAttr('selected');
		$('#birthday-month-select').selectmenu();
		$('#birthday-month-select').selectmenu("refresh");

		/* Default value */
		selectedMonth = "01";
	},

	initYearSelect: function () {
		/* Select widget filling */
		const currentYear = new Date().getFullYear();
		for (var index = 0; index <= 100; ++index) {
			var y = currentYear - index;
			var option = '<option value="' + y + '">' + y + '</option>';
			$("#birthday-year-select").append(option)
		}

		/* Change listener */
		$('#birthday-year-select').change(function () {
			const prevYearWasLeap = regPart1.isLeapYear(selectedYear);

			selectedYear = $("#birthday-year-select option:selected").val();

			if (regPart1.isLeapYear(selectedYear) && selectedMonth == "02" && !prevYearWasLeap)
				$("#ventinove").removeAttr('disabled');
			else if (birthdayDayIndex == 29 && selectedMonth == "02" && !regPart1.isLeapYear(selectedYear)) {
				$("#ventinove").attr("disabled", "disabled");
				$('#birthday-day-select').val("28").attr('selected', true).siblings('option').removeAttr('selected');
				$('#birthday-day-select').selectmenu("refresh");

				birthdayDayIndex = 28;
				selectedDay = "28";
			}
		});

		$('#birthday-year-select').val(currentYear.toString()).attr('selected', true).siblings('option').removeAttr('selected');
		$('#birthday-year-select').selectmenu();
		$('#birthday-year-select').selectmenu("refresh");

		/* Default value */
		selectedYear = currentYear.toString();
	},

	isLeapYear: function (year) {
		return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
	},

	birthdayCbClick: function () {
		if ($('#birthday-cb').is(':checked')) {
			$('#birthday-fields').hide();
			birthday = "nspec";
		} else {
			$('#birthday-fields').show();
			birthday = "";
		}
	},

	isAdult: function () {
		const today = new Date();
		const birthDate = new Date(birthday);

		var age = today.getFullYear() - birthDate.getFullYear();
		var m = today.getMonth() - birthDate.getMonth();

		if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate()))
			--age;

		if (age >= 18)
			return true;

		return false;
	},

	update: function () {
		name = $('#name').val();
		surname = $('#surname').val();
	},

	
	backButtonClick: function () {
		$.mobile.navigate("#page-login");
	},

	nextButtonClick: function () {

		this.update();

		if (name.length > 0 && surname.length > 0 ) {
			
			if (!regPart2ScriptLoaded) {
				$.loadScript('../js/reg-part-2.js', function () {
					regPart2ScriptLoaded = true;
					regPart2.init();
				});
			}
			
			$.mobile.navigate("#page-reg-part-2");
			
		} else
			navigator.notification.alert("Compila tutti i campi obbligatori", null, "Attenzione", "Ok");

	}

}