var isOpen = false;

function w3_open() {
	if (isOpen)
	{
		w3_close();
	}
	else
	{
		isOpen = true;
		document.getElementsByClassName("w3-sidenav")[0].style.display = "block";
		document.getElementById("GoTopBtn").style.zIndex = "0";
	}
}
function w3_close() {
	isOpen = false;
	document.getElementsByClassName("w3-sidenav")[0].style.display = "none";
	document.getElementById("GoTopBtn").style.zIndex = "1";
}



var myCenter = new google.maps.LatLng(44.357267, 11.717141);

var map;
  
function initialize() {
	var mapProp = {
		center:myCenter,
		zoom:10,
		scrollwheel:false,
		draggable:true,
		mapTypeId:google.maps.MapTypeId.ROADMAP
	};

	map = new google.maps.Map(document.getElementById("mapCanvas"), mapProp);
	
	var coords = [	
		{lat: 44.449345, lng: 11.818122},
		{lat: 44.319702, lng: 11.799388},
		{lat: 44.212769, lng: 11.504638},
		{lat: 44.391173, lng: 11.341503},
		{lat: 44.489908, lng: 11.357848},
		{lat: 44.538280, lng: 11.548625}
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
	    position: myCenter,
	    map: map,
	    title: 'FisioDomus'
  	});
}


google.maps.event.addDomListener(window, 'load', initialize);