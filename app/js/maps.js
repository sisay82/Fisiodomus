var myHome = { lat: 44.357267, lng: 11.717141 };
var myCenter = { lat: 44.357267, lng: 11.717141 };

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

var map;

function resizeMap() {
    if (map) {
        myCenter = map.getCenter();

        // center map adaptive to resolution
        fullWidth = window.innerWidth
            || document.documentElement.clientWidth
            || document.body.clientWidth;

        if (fullWidth >= 500) {
            myCenter = new google.maps.LatLng(44.395415, 11.504676); //>500px
        }
        else {
            myCenter = new google.maps.LatLng(44.395415, 11.504676 + (5 - fullWidth / 100) / 100); //min value
        }

        map.setZoom(10);
        map.panTo(myCenter);
        google.maps.event.trigger(map, 'resize');
        map.setCenter(myCenter);
    }
}

function initMap() {
    var mapProp = {
        center: myCenter,
        zoom: 10,
        scrollwheel: false,
        draggable: true,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    map = new google.maps.Map(document.getElementById("mapCanvas"), mapProp);

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

    resizeMap();

    google.maps.event.addDomListener(window, 'resize', resizeMap);
}

