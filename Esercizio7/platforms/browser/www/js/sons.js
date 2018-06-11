var sonsArray = [];
var sons = {
    onAddButtonClick: function () {
        var name = $("#name-input").val();
        var age = $("#eta-input").val();
        
        if (name != "") {
            var sonObject = new Object();
            sonObject.name = name;

            if (age != "")
                sonObject.age = age;

            sonsArray.push(sonObject);
            this.reloadList();

            $("#add-son-popup").popup("close");

            $("#name-input").val("");

            if (age != "")
                $("#eta-input").val("");

            $("#sons-button").html("Modifica");
        }
    },

    reloadList: function () {
        $('#sons').listview();
        $('#sons').empty();

        var nameHtml, ageHtml;
        for (var index = 0; index < sonsArray.length; ++index) {
            nameHtml = "<h2 style='display:inline'>" + sonsArray[index].name + "</h2>" + "<br>";

            if (sonsArray[index].age != null)
                ageHtml = "<p style='display:inline'>" + sonsArray[index].age + "</p>";
            else
                ageHtml = "";

            var li = $('<li>').appendTo('#sons');
            var a = $('<a id="son' + index + '">').html(nameHtml + ageHtml).appendTo(li);

            $("#son" + index).on("taphold", function () {
                var itemIndex = $(this).attr('id');
                itemIndex = itemIndex.substring(3, itemIndex.length);

                navigator.notification.confirm(
                    'Sei sicuro?',
                    function (dialogIndex) {
                        if (dialogIndex == 1) {
                            sonsArray.splice(itemIndex, 1);

                            if (sonsArray.length == 0)
                                $("#sons-button").html("Inserisci");

                            sons.reloadList();
                        }
                    },
                    "Rimuovi", ['Sì', 'No']
                );
            });
        }
        
        $('#sons').listview('refresh');
    },

    onBackButtonClick : function() {
		sonsJson = JSON.stringify(sonsArray);
        $.mobile.navigate("#page-reg-part-2");
	}
}