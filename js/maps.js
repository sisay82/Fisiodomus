var myHome = new google.maps.LatLng(44.357267, 11.717141);
var myCenter = new google.maps.LatLng(44.357267, 11.717141);
var map;

// center map adaptive to resolution
if (fullWidth >= 500) var myCenter = new google.maps.LatLng(44.395415, 11.504676); //>500px
else
    var myCenter = new google.maps.LatLng(44.395415, 11.504676 + (5 - fullWidth / 100) / 100); //min value

google.maps.event.addDomListener(window, 'load', initialize);
google.maps.event.addDomListener(window, 'resize', initialize);

function initialize() {
    var mapProp = {
        center: myCenter,
        zoom: 10,
        scrollwheel: false,
        draggable: true,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    map = new google.maps.Map(document.getElementById("mapCanvas"), mapProp);

    var coords = [
		{ lat: 44.449345, lng: 11.818122 },
		{ lat: 44.319702, lng: 11.799388 },
		{ lat: 44.212769, lng: 11.504638 },
		{ lat: 44.402830, lng: 11.249503 },
		{ lat: 44.492093, lng: 11.211421 },
        { lat: 44.545555, lng: 11.194679 },
        { lat: 44.580958, lng: 11.366102 },
		{ lat: 44.588357, lng: 11.566579 }
    ];

    var fisioDomusWorkingArea = new google.maps.Polygon({
        paths: coords,
        strokeColor: '#FF0000',
        strokeOpacity: 0.8,
        strokeWeight: 3,
        fillColor: '#FF0000',
        fillOpacity: 0.35
    });

    fisioDomusWorkingArea.setMap(map);

    var marker = new google.maps.Marker({
        position: myHome,
        map: map,
        title: 'FisioDomus'
    });
}

