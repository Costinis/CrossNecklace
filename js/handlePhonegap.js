document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
	 document.addEventListener("backbutton", handlerBackKey, true);
}
function handlerBackKey() {

    var isHomeScreenNotActive = $("#startupContainer").hasClass('x-hidden-display');
    if (isHomeScreenNotActive) {
    	history.back();
       
    } else {
    	 exitApp();
    }
}
function exitApp() {
    navigator.notification.confirm("Do you want to exit?", function (a) {
        if (a == 1) {
        	
        	navigator.app.exitApp(); //Close the App
        }
    }, "Confirm",  // title
	"Yes,No" // buttonLabels)
    );
}

var social = {
	    share: function (c, SubjectText, textMessage) {
	        try {
	        	var share1 = new Share();
	        	share1.show({
	        	    subject: SubjectText,
	        	    text: textMessage},
	        	    function() {}, // Success function
	        	    function() {alert("Failed to send email via Android Intent");} // Failure function
	        	);
	           
	        } catch (f) {
	        	alert("Failed to send email via Android Intent Error");
	        }
	    }
	};