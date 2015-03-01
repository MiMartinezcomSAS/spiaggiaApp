var wrapper = document.getElementById("wrapper"),
    xhReq = new XMLHttpRequest();
var app = {

    initialize: function() {
        this.bindEvents();
        loadHome();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicity call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        document.addEventListener("backbutton", onBackKeyDown, false);
        document.addEventListener('orientationchange',  rotacion,  false);
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};
function loadHome(){
    xhReq.open("GET", "home.html", false);
    xhReq.send(null);
    document.getElementById("content-page").innerHTML = xhReq.responseText
    if ($('.sliderHome').length > 0) {
        $('.sliderHome').flexslider({
            animation: "fade",
            controlNav: false,
            directionNav: false
        });
    }
}
function menu(opcion){
    xhReq.open("GET",opcion+".html", false);
    xhReq.send(null);
    document.getElementById("content-page").innerHTML=xhReq.responseText;
    var fn = window[opcion];
    fn();
}
function slide(){
    var screenH =  screen.height-70;
    document.getElementById('wrap-text').style.height = screenH+"px";
    new iScroll('wrap-text', { hideScrollbar: true });
    if ($('.slider').length > 0) {
        $('.slider').flexslider({
            animation: "fade",
            controlNav: false,
            directionNav: false
        });
    }
}