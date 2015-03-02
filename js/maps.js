//Initial Variables
var markersArray = [];	
var gmapslat = [34.055806];	
var gmapslon = [-118.237063];
var gmapsx = [5];	
var gmapsy = [-20];
var stationSelected = [-1];
var initialZoom=3;
numClicked = 0;
var imageWidth;
var imageHeight;
var allowedBounds;


//Load Google Maps API
//Initial Map Load
var map; //the GMap3 itself

<<<<<<< HEAD
function updateEdge() {
	imageWidth = 3000;
    imageHeight =3000;
	if (imageWidth > imageHeight) {
		widthPercent = 200;
=======

function updateEdge() {
    imageWidth = 3000;
    imageHeight =3000;
    if (imageWidth > imageHeight) {
        widthPercent = 200;
>>>>>>> fc4adb7de0c2858c9dac0a55ba98b63e09586f5f
        heightPercent = imageHeight / imageWidth * 100;
    }
    else {
        heightPercent = 200;
		widthPercent = 150;
        //widthPercent = imageWidth / imageHeight * 100;
    }
<<<<<<< HEAD
	
	latbound = heightPercent / 2.0;
    lngbound = widthPercent / 2.0;
	
	var bounds = map.getBounds();
=======

    latbound = heightPercent / 2.0;
    lngbound = widthPercent / 2.0;

    var bounds = map.getBounds();
>>>>>>> fc4adb7de0c2858c9dac0a55ba98b63e09586f5f
    var sw = bounds.getSouthWest();
    var ne = bounds.getNorthEast();
    var width = ne.lng() - sw.lng();
    var height = ne.lat() - sw.lat();

    var bottom = Math.min(-latbound + (height / 2), -0.0000001);
    var left = Math.min(-lngbound + (width / 2), -0.0000001);
    var top = Math.max(latbound - (height / 2), 0.0000001);
    var right = Math.max(lngbound - (width / 2), 0.0000001);

<<<<<<< HEAD
    allowedBounds = new google.maps.LatLngBounds(new google.maps.LatLng(bottom, left), new google.maps.LatLng(top, right));
=======
    allowedBounds = new google.maps.LatLngBounds(
    new google.maps.LatLng(bottom, left), new google.maps.LatLng(top, right));
>>>>>>> fc4adb7de0c2858c9dac0a55ba98b63e09586f5f
}

function percentProjection() {
    this.worldOrigin_ = new google.maps.Point(128, 128);
};

percentProjection.prototype.fromLatLngToPoint = function(latlng) {
    var zoom = 0;
    var max = Math.pow(2, 0) * 256;
    var x = -max * ((latlng.lng() - 50) / 100);
    var y = max * ((latlng.lat() + 50) / 100);
    return new google.maps.Point(x, y);
};

percentProjection.prototype.fromPointToLatLng = function(pixel) {
    var zoom = 0;
    var max = Math.pow(2, 0) * 256;
    var lng = -(pixel.x / max) * 100 + 50;
    var lat = (pixel.y / max) * 100 - 50;
    return new google.maps.LatLng(lat, lng);
};

var moonTypeOptions = {
    getTileUrl: function(coord, zoom) {
<<<<<<< HEAD
		var normalizedCoord = getNormalizedCoord(coord, zoom);
=======
        var normalizedCoord = getNormalizedCoord(coord, zoom);
>>>>>>> fc4adb7de0c2858c9dac0a55ba98b63e09586f5f
        if (!normalizedCoord) {
            return null;
        }
        var bound = Math.pow(2, zoom);
		var c = Math.pow(2, zoom);
        var c = Math.pow(2, zoom);
        var tilex=coord.x,tiley=coord.y;
		var img;
        var d = tilex;
        var e = tiley;
        var f = "t";
        for (var g = 0; g < zoom; g++) {
            c /= 2;
            if (e < c) {
                if (d < c) { f += "q" }
                else { f += "r"; d -= c }
            }
            else {
                if (d < c) { f += "t"; e -= c }
                else { f += "s"; d -= c; e -= c }
            }
        }

        return "rail_map-tiles_07242014/"+f+".jpg";
    },
    tileSize: new google.maps.Size(256, 256),
    maxZoom: 9,
    minZoom: 2,
    radius: 1738000,
    name: "Moon"
};

var moonMapType = new google.maps.ImageMapType(moonTypeOptions);
moonMapType.projection = new percentProjection();

// Normalizes the coords that tiles repeat across the x axis (horizontally)
// like the standard Google map tiles.
function getNormalizedCoord(coord, zoom) {
    var y = coord.y;
    var x = coord.x;
<<<<<<< HEAD
    // tile range in one direction range is dependent on zoom level
    // 0 = 1 tile, 1 = 2 tiles, 2 = 4 tiles, 3 = 8 tiles, etc
    var tileRange = 1 << zoom;
=======

    // tile range in one direction range is dependent on zoom level
    // 0 = 1 tile, 1 = 2 tiles, 2 = 4 tiles, 3 = 8 tiles, etc
    var tileRange = 1 << zoom;

>>>>>>> fc4adb7de0c2858c9dac0a55ba98b63e09586f5f
    // don't repeat across y-axis (vertically)
    if (y < 0 || y >= tileRange) {
        return null;
    }
<<<<<<< HEAD
=======

>>>>>>> fc4adb7de0c2858c9dac0a55ba98b63e09586f5f
    // repeat across x-axis
    if (x < 0 || x >= tileRange) {
        return null;
    }
    return {
        x: x,
        y: y
    };
}

    return {
        x: x,
        y: y
    };
}

//Global Map Functions
//Clear Markers
function clearOverlays() {
	if (markersArray) {
		for (var i = 0; i < markersArray.length; i++ ) {
			markersArray[i].setMap(null);
			if (i == (markersArray.length-1)) {
				markersArray = [];
			}
		}
	}
}

<<<<<<< HEAD
function boxIn() {
	if (allowedBounds.contains(map.getCenter())) {
		return;
	}
	else {
		var mapCenter = map.getCenter();
		var X = mapCenter.lng();
		var Y = mapCenter.lat();
		var AmaxX = allowedBounds.getNorthEast().lng();
		var AmaxY = allowedBounds.getNorthEast().lat();
		var AminX = allowedBounds.getSouthWest().lng();
		var AminY = allowedBounds.getSouthWest().lat();
		
		if (X < AminX) {
			X = AminX;
		}
		if (X > AmaxX) {
			X = AmaxX;
		}
		if (Y < AminY) {
			Y = AminY;
		}
		if (Y > AmaxY) {
			Y = AmaxY;
		}
		map.setCenter(new google.maps.LatLng(Y, X));
	}
=======

 function boxIn() {
        if (allowedBounds.contains(map.getCenter())) {
            return;
        }
        else {
            var mapCenter = map.getCenter();
            var X = mapCenter.lng();
            var Y = mapCenter.lat();

            var AmaxX = allowedBounds.getNorthEast().lng();
            var AmaxY = allowedBounds.getNorthEast().lat();
            var AminX = allowedBounds.getSouthWest().lng();
            var AminY = allowedBounds.getSouthWest().lat();

            if (X < AminX) {
                X = AminX;
            }
            if (X > AmaxX) {
                X = AmaxX;
            }
            if (Y < AminY) {
                Y = AminY;
            }
            if (Y > AmaxY) {
                Y = AmaxY;
            }

            map.setCenter(new google.maps.LatLng(Y, X));
        }
    }
	

//LoadIt
function load() {
		google.maps.visualRefresh = true;
        resizeMapDiv();
        var latlng = new google.maps.LatLng(gmapsy, gmapsx);
        var myOptions = {
            zoom: initialZoom,
            minZoom: 2,
            maxZoom: 4,
            center: latlng,
            panControl: true,
            zoomControl: true,
			  zoomControlOptions: {
    style: google.maps.MapTypeControlStyle.DEFAULT
  },
            mapTypeControl: false,
            scaleControl: false,
            streetViewControl: false,
            overviewMapControl: false,
	    mapTypeControlOptions: {
            mapTypeIds: ["moon"]
        }
        }
	map = new google.maps.Map(document.getElementById("map"), myOptions);
    map.mapTypes.set('moon', moonMapType);
    map.setMapTypeId('moon');

//add button
var homeControlDiv = document.createElement('DIV');
homeControlDiv = document.getElementById('transit');
homeControlDiv.index = 1;
map.controls[google.maps.ControlPosition.TOP_RIGHT].push(homeControlDiv);
var homeControlDiv4 = document.createElement('DIV4');
homeControlDiv4 = document.getElementById('legend');
homeControlDiv4.index = 1;
map.controls[google.maps.ControlPosition.TOP_RIGHT].push(homeControlDiv4);
var homeControl = new HomeControl(homeControlDiv, homeControlDiv4, map);

//Set Data Group
setMarkers(map, beaches);

//Detect Bounds
google.maps.event.addListener(map, 'tilesloaded', function() {
        updateEdge();
    });
google.maps.event.addListener(map, 'zoom_changed', function() {
	updateEdge();
	boxIn();
	var currentZoom = map.getZoom();
	
	if (currentZoom == 2){
		var newicon = {
        path: google.maps.SymbolPath.CIRCLE,
        fillOpacity: 0,
        strokeOpacity: 0,
        strokeWeight: 0,
        scale: 10
		};
	}
	else{
		var newicon = {
			path: google.maps.SymbolPath.CIRCLE,
			scale: 30,
			strokeWeight: 5,
			strokeOpacity: 0
			}
		}

for (var i = 0; i < markersArray.length; i++ ) {
	markersArray[i].setIcon(newicon)
	}
});

google.maps.event.addListener(map, 'center_changed', function() {
        boxIn();
    });

///URL Variable Actions
if (second == 2){		
	map.setZoom(2); }	
if (first >= 0){
	var stationIDNum = first;
	google.maps.event.trigger(markersArray[stationIDNum], 'click');
	centerLocation = beaches[stationIDNum];
	stationSelect = new google.maps.LatLng(centerLocation[3], centerLocation[2])
	map.setCenter(stationSelect);	
>>>>>>> fc4adb7de0c2858c9dac0a55ba98b63e09586f5f
}
	

<<<<<<< HEAD
//LoadIt
function load() {
	var searchStation = document.getElementById("autocomplete");
	searchStation.value = "Search Station Name";
	google.maps.visualRefresh = true;
	resizeMapDiv();
	var latlng = new google.maps.LatLng(gmapsy, gmapsx);
	var myOptions = {
		zoom: initialZoom,
		minZoom: 2,
		maxZoom: 4,
		center: latlng,
		panControl: true,
		zoomControl: true,
		zoomControlOptions: {
			style: google.maps.MapTypeControlStyle.DEFAULT
		},
		mapTypeControl: false,
		scaleControl: false,
		streetViewControl: false,
		overviewMapControl: false,
	    mapTypeControlOptions: {
			mapTypeIds: ["moon"]
		}
	}
	
	map = new google.maps.Map(document.getElementById("map"), myOptions);
    map.mapTypes.set('moon', moonMapType);
    map.setMapTypeId('moon');
	
	//add button
	var homeControlDiv = document.createElement('DIV');
	homeControlDiv = document.getElementById('transit');
	map.controls[google.maps.ControlPosition.TOP_RIGHT].push(homeControlDiv);
	
	var homeControlDiv4 = document.createElement('DIV4');
	homeControlDiv4 = document.getElementById('legend');
	map.controls[google.maps.ControlPosition.TOP_RIGHT].push(homeControlDiv4);
	
	//Add Legend
	var mapmap = document.getElementById('map-legend');
	map.controls[google.maps.ControlPosition.RIGHT_CENTER].push(mapmap);
	
	var homeControl = new HomeControl(homeControlDiv, homeControlDiv4, mapmap, map);
	
	//Set Data Group
	setMarkers(map, beaches);
	
	//Detect Bounds
	google.maps.event.addListener(map, 'tilesloaded', function() {
		updateEdge();
	});
	
	google.maps.event.addListener(map, 'zoom_changed', function() {
		updateEdge();
		boxIn();
		var currentZoom = map.getZoom();
		if (currentZoom == 2){
			var newicon = {
				path: google.maps.SymbolPath.CIRCLE,
				fillOpacity: 0,
				strokeOpacity: 0,
				strokeWeight: 0,
				scale: 10
			};
		}
		else{
			var newicon = {
				path: google.maps.SymbolPath.CIRCLE,
				scale: 30,
				strokeWeight: 5,
				strokeOpacity: 0
			}
		}
		for (var i = 0; i < markersArray.length; i++ ) {
			markersArray[i].setIcon(newicon)
		}
	});
	
	google.maps.event.addListener(map, 'center_changed', function() {
        boxIn();
    });
	
	///URL Variable Actions
	if (second == 2) {
		map.setZoom(2);
	}
	if (first >= 0) {
		var stationIDNum = first;
		google.maps.event.trigger(markersArray[stationIDNum], 'click');
		centerLocation = beaches[stationIDNum];
		stationSelect = new google.maps.LatLng(centerLocation[3], centerLocation[2])
		map.setCenter(stationSelect);
	}
}

function alerz(stnID){
	google.maps.event.trigger(markersArray[stnID], 'click');
=======

}


	function alerz(stnID){
google.maps.event.trigger(markersArray[stnID], 'click');
>>>>>>> fc4adb7de0c2858c9dac0a55ba98b63e09586f5f
}

function setMarkers(map, locations, category) {
<<<<<<< HEAD
	for (var i = 0; i < locations.length; i++) {
		var beach = locations[i];
		//Place All Non-Street Stop Stations
		if (beach[2] != 'n'){
			var myLatLng = new google.maps.LatLng(beach[2], beach[3]);
			var marker = new google.maps.Marker({
				position: myLatLng,
				map: map,
				anchorPoint: new google.maps.Point(0, 2),
				icon: {
					path: google.maps.SymbolPath.CIRCLE,
					scale: 30,
					strokeWeight: 5,
					strokeColor: '#FF0000',
					strokeOpacity: 0
				},
				stationID: beach[0],
				title: beach[1],
				xcoord: beach[3],
				ycoord: beach[2],
				line: beach[4],
				free: beach[5],
				paid: beach[6],
				parking: beach[7],
				lockers: beach[8],
				racks: beach[9],
				connections: beach[10],
				timetable: beach[11],
				yelp: beach[12],
				gmaps: beach[13],
				ada: beach[14],
				ev: beach[15],
				lon: beach[16],
				lat: beach[17]
			});
		}
		
		var stationinfoWindow = new google.maps.InfoWindow();
		
		google.maps.event.addListener(stationinfoWindow, 'closeclick', function(){
			marker2.setVisible(false);
			stationSelected = -1;
		});
		
		google.maps.event.addListener(marker, 'click', function() {
			var dataID = this.stationID;
			var datainfo = this.title;
			var dataxcoord = this.xcoord;
			var dataycoord = this.ycoord;
			var datalat = this.lat;
			var datalon = this.lon;
			var dataline = this.line;
			var datafree = this.free;
			var datapaid = this.paid;
			var dataparking = this.parking
			var datalockers = this.lockers;
			var dataracks = this.racks;
			var dataconnections = this.connections;
			var datatimetable = this.timetable;
			var datayelp = this.yelp;
			var datagmaps = this.gmaps;
			var dataada = this.ada;
			var dataev = this.ev;
			
			stationinfoWindow.setContent('<table width="400" border="0" cellspacing="5"><tr>\
			<td width="32" align="left" valign="middle"><img src="images/'+dataline+'.jpg" border="0"\
			></td><td width="364" align="left" valign="middle"><font size="5"><b>'+datainfo+'</b></font>\
			<br>'+dataline+' Line</td></tr></table><table width="400" border="0" cellspacing="5"><tr>\
			<td width="30" align="left"><img src="images/parking.png" border="0"></td><td width="351" valign="middle">\
			<strong>Parking - Free: </strong>'+datafree+'<strong> | Paid:</strong> '+datapaid+'</td></tr>\
			<tr><td align="left"><img src="images/parking_spaces.png" border="0"></td>\
			<td valign="middle"><strong>Parking Spaces:</strong> '+dataparking+'</td></tr>\
			<tr><td align="left"><img src="images/bike_locker.png" border="0"></td>\
			<td valign="middle"><strong>Bike Lockers: </strong>'+datalockers+'</td></tr>\
			<tr><td align="left"><img src="images/bike_rack.png" border="0"></td><td valign="middle">\
			<strong>Bike Racks: </strong>'+dataracks+'</td></tr><tr><td align="left"><img src="images/transfer.png" border="0"></td>\
			<td valign="middle"><strong>Connections: </strong>'+dataconnections+'</td></tr><tr><td align="left">\
			<img src="images/ada.jpg" border="0"></td><td valign="middle"><strong>Accessible Entrances: </strong>'+dataada+'</td>\
			</tr><tr><td align="left"><img src="images/ev.jpg" border="0"></td><td valign="middle">\
			<strong>EV Charge Stations: </strong>'+dataev+'</td></tr></table><table border="0" width="400"><tbody><tr>\
			<td align="center"><a target="blank" href="http://www.metro.net/'+datatimetable+'"><img src="images/timetable.png" border="0"></a><a target="blank" href="http://maps.google.com/maps/'+datagmaps+'"><img src="images/google_maps.png" border="0"></a><a target="blank" href="http://www.yelp.com/search?find_desc=&amp;find_loc='+datayelp+'&amp;ns=1"><img src="images/yelp.png" border="0"></a></td></tr></tbody></table>');
			stationinfoWindow.open(map,this);
			
			google.maps.event.addListener(map, "click", function () {
				stationinfoWindow.close(map,this);
				marker2.setVisible(false);
				stationSelected = -1;
			});
			
			//Update Initial Variables
			gmapslat = datalat;
			gmapslon = datalon;
			gmapsx = dataxcoord;
			gmapsy = dataycoord;
			stationSelected = dataID;
			stationSelect = new google.maps.LatLng(dataycoord, dataxcoord)
			
			if ( numClicked > 0 ) {
				marker2.setVisible(true);
				marker2.setPosition(stationSelect);
			}
			else {
				numClicked = 1;
				marker2 = new google.maps.Marker({
					map: map,
					clickable: false,
					position: stationSelect,
					icon: {
						path: google.maps.SymbolPath.CIRCLE,
						scale: 20,
						strokeWeight: 5,
						strokeColor: '#000',
						strokeOpacity: 0.8,
						fillColor: '#000',
						fillOpacity: 0
					}
				});
			}
		});
		markersArray.push(marker);
	}
=======
   //  var image = new google.maps.MarkerImage('',
   //  new google.maps.Size(40, 40),
   //  new google.maps.Point(0,0),
   //  new google.maps.Point(20, 20));
/* var shadow = new google.maps.MarkerImage('marker-panel.png',
new google.maps.Size(37, 32),
new google.maps.Point(0,0),
new google.maps.Point(0, 32));*/
for (var i = 0; i < locations.length; i++) {
     var beach = locations[i];

//Place All Non-Street Stop Stations
if (beach[2] != 'n'){
	 var myLatLng = new google.maps.LatLng(beach[2], beach[3]);
     var marker = new google.maps.Marker({
          position: myLatLng,
          map: map,
		  anchorPoint: new google.maps.Point(0, 2),
		  //shadow: shadow,
		  icon: {
			  path: google.maps.SymbolPath.CIRCLE,
			  scale: 30,
			  strokeWeight: 5,
			  strokeColor: '#FF0000',
			  strokeOpacity: 0
			  },
          stationID: beach[0],
		  title: beach[1],
		  xcoord: beach[3],
		  ycoord: beach[2],
          line: beach[4],
          free: beach[5],
          paid: beach[6],
          parking: beach[7],
          lockers: beach[8],
          racks: beach[9],
          connections: beach[10],
          timetable: beach[11],
          yelp: beach[12],
          gmaps: beach[13],
		  ada: beach[14],
		  ev: beach[15],
		  lon: beach[16],
		  lat: beach[17]
          });}

var stationinfoWindow = new google.maps.InfoWindow();

google.maps.event.addListener(stationinfoWindow,'closeclick',function(){
	 marker2.setVisible(false);
stationSelected = -1;
});


google.maps.event.addListener(marker, 'click', function() { 
	var dataID = this.stationID;
	 var datainfo = this.title;
	 var dataxcoord = this.xcoord;
	 var dataycoord = this.ycoord;
	 var datalat = this.lat;
	 var datalon = this.lon;
	 var dataline = this.line;
	 var datafree = this.free;
	 var datapaid = this.paid;
	 var dataparking = this.parking
	 var datalockers = this.lockers;
	 var dataracks = this.racks;
	 var dataconnections = this.connections;
	 var datatimetable = this.timetable;
	 var datayelp = this.yelp;
	 var datagmaps = this.gmaps;
	 var dataada = this.ada;
	 var dataev = this.ev;
	 stationinfoWindow.setContent('<table width="400" border="0" cellspacing="5"><tr><td width="32" align="left" valign="middle"><img src="images/'+dataline+'.jpg" border="0"></td><td width="364" align="left" valign="middle"><font size="5"><b>'+datainfo+'</b></font><br>'+dataline+' Line</td></tr></table><table width="400" border="0" cellspacing="5"><tr><td width="30" align="left"><img src="images/parking.png" border="0"></td><td width="351" valign="middle"><strong>Parking - Free: </strong>'+datafree+'<strong> | Paid:</strong> '+datapaid+'</td></tr><tr><td align="left"><img src="images/parking_spaces.png" border="0"></td><td valign="middle"><strong>Parking Spaces:</strong> '+dataparking+'</td></tr><tr><td align="left"><img src="images/bike_locker.png" border="0"></td><td valign="middle"><strong>Bike Lockers: </strong>'+datalockers+'</td></tr><tr><td align="left"><img src="images/bike_rack.png" border="0"></td><td valign="middle"><strong>Bike Racks: </strong>'+dataracks+'</td></tr><tr><td align="left"><img src="images/transfer.png" border="0"></td><td valign="middle"><strong>Connections: </strong>'+dataconnections+'</td></tr><tr><td align="left"><img src="images/ada.jpg" border="0"></td><td valign="middle"><strong>Accessible Entrances: </strong>'+dataada+'</td></tr><tr><td align="left"><img src="images/ev.jpg" border="0"></td><td valign="middle"><strong>EV Charge Stations: </strong>'+dataev+'</td></tr></table><table border="0" width="400"><tbody><tr><td align="center"><a target="blank" href="http://www.metro.net/'+datatimetable+'"><img src="images/timetable.png" border="0"></a><a target="blank" href="http://maps.google.com/maps/'+datagmaps+'"><img src="images/google_maps.png" border="0"></a><a target="blank" href="http://www.yelp.com/search?find_desc=&amp;find_loc='+datayelp+'&amp;ns=1"><img src="images/yelp.png" border="0"></a></td></tr></tbody></table>');
stationinfoWindow.open(map,this);
google.maps.event.addListener(map, "click", function () {
	
	stationinfoWindow.close(map,this);
		 marker2.setVisible(false);
stationSelected = -1;
	 });
//Update Initial Variables
gmapslat = datalat;
gmapslon = datalon;
gmapsx = dataxcoord;
gmapsy = dataycoord;
stationSelected = dataID;
stationSelect = new google.maps.LatLng(dataycoord, dataxcoord) 


  if ( numClicked > 0 ) {
	   marker2.setVisible(true);
    marker2.setPosition(stationSelect);
  } else {
	  numClicked = 1;
marker2 = new google.maps.Marker({
  map: map,
  clickable: false,
  position: stationSelect,
  icon: {
      path: google.maps.SymbolPath.CIRCLE,
      scale: 20,
	  strokeWeight: 5,
	  strokeColor: '#000',
	  strokeOpacity: 0.8,
	   fillColor: '#000',
      fillOpacity: 0
    }
});
  }

  });
		  markersArray.push(marker);

}
>>>>>>> fc4adb7de0c2858c9dac0a55ba98b63e09586f5f
}  

//Function 1 Go to Google Maps
function HomeControl(homeControlDiv, homeControlDiv4, mapmap, map) {
	//style
	var pinkParksStyles = [{"featureType": "transit.station.rail", "stylers": [ { "visibility": "off" } ] },{ "featureType": "road", "elementType": "geometry", "stylers": [ { "saturation": -100 }, { "lightness": 100 } ] },{ "featureType": "poi", "stylers": [ { "visibility": "off" } ] },{ "featureType": "administrative", "stylers": [ { "visibility": "off" } ] },{ "featureType": "landscape", "stylers": [ { "hue": "#fff700" }, { "lightness": -5 } ] },{ } ];
	// Create a new StyledMapType object, passing it the array of styles,
	// as well as the name to be displayed on the map type control.
	var pinkMapType = new google.maps.StyledMapType(pinkParksStyles, {
		name: "Pink Parks"
	});
	
	// Setup the click event listeners
	google.maps.event.addDomListener(homeControlDiv, 'click', function() {
		document.getElementById("overlayToggle").innerHTML = "Default View";
		numClicked = 0;
		clearOverlays();
		
		//change
		var latlng = new google.maps.LatLng(gmapslat, gmapslon);
        var myOptions = {
			zoom: 15,
			center: latlng,
			mapTypeControlOptions: {
				mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'pink_parks']
			},
			mapTypeId: google.maps.MapTypeId.ROADMAP,streetViewControl: false,mapTypeControl: false,
			zoomControlOptions: {
				style: google.maps.ZoomControlStyle.LARGE
			}
		}
		
		var map = new google.maps.Map(document.getElementById("map"), myOptions);
		
		var polyline1 = new google.maps.Polyline({
			path: blueLine, 
			clickable: false,
			geodesic: true,
			strokeColor: "#0273bc", 
			strokeWeight: 6,
			strokeOpacity: 0.8,
			zIndex: 101 
		}); 
		
		var polyline2 = new google.maps.Polyline({
			path: expoLine, 
			clickable: false,
			geodesic: true,
			strokeColor: "#02b1dc", 
			strokeWeight: 6, 
			strokeOpacity: 0.8,
			zIndex: 0 
		}); 
		
		var polyline3 = new google.maps.Polyline({
			path: silverLine, 
			clickable: false,
			geodesic: true,
			strokeColor: "#b2b6b9", 
			strokeWeight: 6,
			strokeOpacity: 1,
			zIndex: 0 
		}); 
		
		var polyline4 = new google.maps.Polyline({
			path: greenLine, 
			clickable: false,
			geodesic: true,
			strokeColor: "#008000", 
			strokeWeight: 5,
			strokeOpacity: 1,
			zIndex: 999 
		}); 
		
		var polyline5 = new google.maps.Polyline({
			path: goldLine, 
			clickable: false,
			geodesic: true,
			strokeColor: "#fdb815", 
			strokeWeight: 6,
			strokeOpacity: 0.8,
			zIndex: 0 
		}); 
		
		var polyline6 = new google.maps.Polyline({
			path: purpleLine, 
			clickable: false,
			geodesic: true,
			strokeColor: "#a05ea5", 
			strokeWeight: 6,
			strokeOpacity: 0.8,
			zIndex: 0
		}); 
		
		var polyline7 = new google.maps.Polyline({
			path: redLine, 
			clickable: false,
			geodesic: true,
			strokeColor: "#FF0000", 
			strokeWeight: 6,
			strokeOpacity: 0.8,
			zIndex: 0 
		});
		
		var polyline8 = new google.maps.Polyline({
			path: orangeLine,
			clickable: false,
			geodesic: true,
			strokeColor: "#f15424",
			strokeWeight: 6,
			strokeOpacity: 0.8,
			zIndex: 0
		}); 
		
		var polyline9 = new google.maps.Polyline({
			path: orangeLineext, 
			clickable: false,
			geodesic: true,
			strokeColor: "#f15424",
			strokeWeight: 6,
			strokeOpacity: 0.8,
			zIndex: 0
		});
		
		polyline1.setMap(map);
		polyline2.setMap(map);
		polyline3.setMap(map);
		polyline4.setMap(map);
		polyline5.setMap(map);
		polyline6.setMap(map);
		polyline7.setMap(map);
		polyline8.setMap(map);
		polyline9.setMap(map);
		
		setMarkers(map, beaches);
		
		if (stationSelected >= 0){
			google.maps.event.trigger(markersArray[stationSelected], 'click');
		}
		
		function setMarkers(map, locations, category) {
			var image = new google.maps.MarkerImage('M-Logo.png',
			new google.maps.Size(32, 32),
			new google.maps.Point(0,0),
			new google.maps.Point(16, 16));
			
			for (var i = 0; i < locations.length; i++) {
				var beach = locations[i];
				
				if (beach[4] == 'Orange' || beach[4] == 'Silver'){
					var image = {
						path: google.maps.SymbolPath.CIRCLE,
						scale: 7,
						strokeWeight: 2,
						strokeColor: '#000',
						strokeOpacity: 1,
						fillColor: '#FFF',
						fillOpacity: 1,
						zIndex: 0
					}
				}
				else {
					var image = new google.maps.MarkerImage('M-Logo.png',
					new google.maps.Size(32, 32),
					new google.maps.Point(0,0),
					new google.maps.Point(16, 16));
				}
				
				var myLatLng = new google.maps.LatLng(beach[17], beach[16]);
				var marker = new google.maps.Marker({
					position: myLatLng,
					map: map,
					icon: image,
					stationID: beach[0],
					title: beach[1],
					xcoord: beach[3],
					ycoord: beach[2],
					line: beach[4],
					free: beach[5],
					paid: beach[6],
					parking: beach[7],
					lockers: beach[8],
					racks: beach[9],
					connections: beach[10],
					timetable: beach[11],
					yelp: beach[12],
					gmaps: beach[13],
					ada: beach[14],
					ev: beach[15],
					lon: beach[16],
					lat: beach[17]
				});
				
<<<<<<< HEAD
				var stationinfoWindow = new google.maps.InfoWindow();
				
				google.maps.event.addListener(stationinfoWindow,'closeclick',function(){
					marker2.setVisible(false);
					stationSelected = -1;
				});
				
				google.maps.event.addListener(marker, 'click', function() {
					var dataID = this.stationID;
					var datainfo = this.title;
					var dataxcoord = this.xcoord;
					var dataycoord = this.ycoord;
					var datalat = this.lat;
					var datalon = this.lon;
					var dataline = this.line;
					var datafree = this.free;
					var datapaid = this.paid;
					var dataparking = this.parking;
					var datalockers = this.lockers;
					var dataracks = this.racks;
					var dataconnections = this.connections;
					var datatimetable = this.timetable;
					var datayelp = this.yelp;
					var datagmaps = this.gmaps;
					var dataada = this.ada;
					var dataev = this.ev;
					
					stationinfoWindow.setContent('<table width="400" border="0" cellspacing="5">\
					<tr><td width="32" align="left" valign="middle"><img src="images/'+dataline+'.jpg" border="0">\
					</td><td width="364" align="left" valign="middle"><font size="5"><b>'+datainfo+'</b>\
					</font><br>'+dataline+' Line</td></tr></table><table width="400" border="0" cellspacing="5">\
					<tr><td width="30" align="left"><img src="images/parking.png" border="0"></td>\
					<td width="351" valign="middle"><strong>Parking - Free: </strong>'+datafree+'<strong> | Paid:</strong> '+datapaid+'</td>\
					</tr><tr><td align="left"><img src="images/parking_spaces.png" border="0"></td>\
					<td valign="middle"><strong>Parking Spaces:</strong> '+dataparking+'</td></tr>\
					<tr><td align="left"><img src="images/bike_locker.png" border="0"></td>\
					<td valign="middle"><strong>Bike Lockers: </strong>'+datalockers+'</td></tr>\
					<tr><td align="left"><img src="images/bike_rack.png" border="0"></td>\
					<td valign="middle"><strong>Bike Racks: </strong>'+dataracks+'</td></tr>\
					<tr><td align="left"><img src="images/transfer.png" border="0"></td>\
					<td valign="middle"><strong>Connections: </strong>'+dataconnections+'</td>\
					</tr><tr><td align="left"><img src="images/ada.jpg" border="0"></td>\
					<td valign="middle"><strong>Accessible Entrances: </strong>'+dataada+'</td>\
					</tr><tr><td align="left"><img src="images/ev.jpg" border="0"></td>\
					<td valign="middle"><strong>EV Charge Stations: </strong>'+dataev+'</td>\
					</tr></table><table border="0" width="400"><tbody><tr><td align="center"><a target="blank" href="http://www.metro.net/'+datatimetable+'"><img src="images/timetable.png" border="0"></a><a target="blank" href="http://maps.google.com/maps/'+datagmaps+'"><img src="images/google_maps.png" border="0"></a><a target="blank" href="http://www.yelp.com/search?find_desc=&amp;find_loc='+datayelp+'&amp;ns=1"><img src="images/yelp.png" border="0"></a></td></tr></tbody></table>');
					
					stationinfoWindow.open(map,this);
					gmapslat = datalat;
					gmapslon = datalon;
					gmapsx = dataxcoord;
					gmapsy = dataycoord;
					stationSelected = dataID;
					stationSelect = new google.maps.LatLng(datalat, datalon)
					
					if ( numClicked > 0 ) {
						marker2.setVisible(true);
						marker2.setPosition(stationSelect);
					}
					else {
						numClicked = 1;
						marker2 = new google.maps.Marker({
							map: map,
							clickable: true,
							position: stationSelect,
							icon: {
								path: google.maps.SymbolPath.CIRCLE,
								scale: 20,
								strokeWeight: 5,
								strokeColor: '#FF0000',
								strokeOpacity: 0.5,
								fillColor: '#000',
								fillOpacity: 0,
								zIndex: 999 
							}
						});
					}
				});
				markersArray.push(marker);
			}
		}
		
		//Associate the styled map with the MapTypeId and set it to display.
		map.mapTypes.set('pink_parks', pinkMapType);
		map.setMapTypeId('pink_parks');
		
		//Add button
		var homeControl = new HomeControl2(homeControlDiv, homeControlDiv4, mapmap, map);
		homeControlDiv.index = 1;
		map.controls[google.maps.ControlPosition.TOP_RIGHT].push(homeControlDiv);
	});
}

//Function 2 Revert back to Default View
function HomeControl2(homeControlDiv, homeControlDiv4, mapmap, map) {
	// Setup the click event listeners
	google.maps.event.addDomListener(homeControlDiv, 'click', function() {
		document.getElementById("overlayToggle").innerHTML = "Google Maps View";
		
		function boxIn() {
			if (allowedBounds.contains(map.getCenter())) {
				return;
			}
			else {
				var mapCenter = map.getCenter();
				var X = mapCenter.lng();
				var Y = mapCenter.lat();
				var AmaxX = allowedBounds.getNorthEast().lng();
				var AmaxY = allowedBounds.getNorthEast().lat();
				var AminX = allowedBounds.getSouthWest().lng();
				var AminY = allowedBounds.getSouthWest().lat();
				
				if (X < AminX) {
					X = AminX;
				}
				if (X > AmaxX) {
					X = AmaxX;
				}
				if (Y < AminY) {
					Y = AminY;
				}
				if (Y > AmaxY) {
					Y = AmaxY;
				}
				map.setCenter(new google.maps.LatLng(Y, X));
			}
		}
		
		clearOverlays();
		numClicked = 0;  
		//change
		resizeMapDiv();
		
		if (gmapsx != 'n'){
			var latlng = new google.maps.LatLng(gmapsy, gmapsx);
		}
		else {
			var latlng = new google.maps.LatLng(-20, 5);
=======
												 	  	var polyline9 = new google.maps.Polyline({ 
				        path: orangeLineext, 
						clickable: false,
						    geodesic: true,
				        strokeColor: "#f15424", 
				        strokeWeight: 6,
						    strokeOpacity: 0.8,
				        zIndex: 0 
				}); 	

polyline1.setMap(map);
polyline2.setMap(map);
polyline3.setMap(map);
polyline4.setMap(map);
polyline5.setMap(map);
polyline6.setMap(map);
polyline7.setMap(map);
polyline8.setMap(map);
polyline9.setMap(map);
				 
	setMarkers(map, beaches);
	
	if (stationSelected >= 0){
		google.maps.event.trigger(markersArray[stationSelected], 'click');	 }
				 
	function setMarkers(map, locations, category) {

     var image = new google.maps.MarkerImage('M-Logo.png',
     new google.maps.Size(32, 32),
     new google.maps.Point(0,0),
    new google.maps.Point(16, 16));
/* var shadow = new google.maps.MarkerImage('marker-panel.png',
new google.maps.Size(37, 32),
new google.maps.Point(0,0),
new google.maps.Point(0, 32));*/
for (var i = 0; i < locations.length; i++) {
   
     var beach = locations[i];
	 
	  if (beach[4] == 'Orange' || beach[4] == 'Silver'){
		  var image = {
      path: google.maps.SymbolPath.CIRCLE,
      scale: 7,
	  strokeWeight: 2,
	  strokeColor: '#000',
	  strokeOpacity: 1,
	      fillColor: '#FFF',
    fillOpacity: 1,
	zIndex: 0 

    } }
	  else{
		  var image = new google.maps.MarkerImage('M-Logo.png',
     new google.maps.Size(32, 32),
     new google.maps.Point(0,0),
    new google.maps.Point(16, 16));
	  }

	 var myLatLng = new google.maps.LatLng(beach[17], beach[16]);
     var marker = new google.maps.Marker({
          position: myLatLng,
          map: map,

         //shadow: shadow,
  icon: image,
          stationID: beach[0],
		  title: beach[1],
		  xcoord: beach[3],
		  ycoord: beach[2],
          line: beach[4],
          free: beach[5],
          paid: beach[6],
          parking: beach[7],
          lockers: beach[8],
          racks: beach[9],
          connections: beach[10],
          timetable: beach[11],
          yelp: beach[12],
          gmaps: beach[13],
		  ada: beach[14],
		  ev: beach[15],
		  lon: beach[16],
		  lat: beach[17]
          });
var stationinfoWindow = new google.maps.InfoWindow();



google.maps.event.addListener(stationinfoWindow,'closeclick',function(){
marker2.setVisible(false);
stationSelected = -1;
});

 google.maps.event.addListener(marker, 'click', function() {
	 
	var dataID = this.stationID;
	 var datainfo = this.title;
	 var dataxcoord = this.xcoord;
	 var dataycoord = this.ycoord;
	 var datalat = this.lat;
	 var datalon = this.lon;
	 var dataline = this.line;
	 var datafree = this.free;
	 var datapaid = this.paid;
	 var dataparking = this.parking
	 var datalockers = this.lockers;
	 var dataracks = this.racks;
	 var dataconnections = this.connections;
	 var datatimetable = this.timetable;
	 var datayelp = this.yelp;
	 var datagmaps = this.gmaps;
	 var dataada = this.ada;
	 var dataev = this.ev;
	 

	 stationinfoWindow.setContent('<table width="400" border="0" cellspacing="5"><tr><td width="32" align="left" valign="middle"><img src="images/'+dataline+'.jpg" border="0"></td><td width="364" align="left" valign="middle"><font size="5"><b>'+datainfo+'</b></font><br>'+dataline+' Line</td></tr></table><table width="400" border="0" cellspacing="5"><tr><td width="30" align="left"><img src="images/parking.png" border="0"></td><td width="351" valign="middle"><strong>Parking - Free: </strong>'+datafree+'<strong> | Paid:</strong> '+datapaid+'</td></tr><tr><td align="left"><img src="images/parking_spaces.png" border="0"></td><td valign="middle"><strong>Parking Spaces:</strong> '+dataparking+'</td></tr><tr><td align="left"><img src="images/bike_locker.png" border="0"></td><td valign="middle"><strong>Bike Lockers: </strong>'+datalockers+'</td></tr><tr><td align="left"><img src="images/bike_rack.png" border="0"></td><td valign="middle"><strong>Bike Racks: </strong>'+dataracks+'</td></tr><tr><td align="left"><img src="images/transfer.png" border="0"></td><td valign="middle"><strong>Connections: </strong>'+dataconnections+'</td></tr><tr><td align="left"><img src="images/ada.jpg" border="0"></td><td valign="middle"><strong>Accessible Entrances: </strong>'+dataada+'</td></tr><tr><td align="left"><img src="images/ev.jpg" border="0"></td><td valign="middle"><strong>EV Charge Stations: </strong>'+dataev+'</td></tr></table><table border="0" width="400"><tbody><tr><td align="center"><a target="blank" href="http://www.metro.net/'+datatimetable+'"><img src="images/timetable.png" border="0"></a><a target="blank" href="http://maps.google.com/maps/'+datagmaps+'"><img src="images/google_maps.png" border="0"></a><a target="blank" href="http://www.yelp.com/search?find_desc=&amp;find_loc='+datayelp+'&amp;ns=1"><img src="images/yelp.png" border="0"></a></td></tr></tbody></table>');
stationinfoWindow.open(map,this);



gmapslat = datalat;
gmapslon = datalon;
gmapsx = dataxcoord;
gmapsy = dataycoord;
stationSelected = dataID;

stationSelect = new google.maps.LatLng(datalat, datalon) 


  if ( numClicked > 0 ) {
	  marker2.setVisible(true);
    marker2.setPosition(stationSelect);
  } else {
	  numClicked = 1;
	  
marker2 = new google.maps.Marker({
  map: map,
  clickable: true,
  position: stationSelect,
  icon: {
      path: google.maps.SymbolPath.CIRCLE,
      scale: 20,
	  strokeWeight: 5,
	  strokeColor: '#FF0000',
	  strokeOpacity: 0.5,
	   fillColor: '#000',
      fillOpacity: 0,
	  zIndex: 999 
    }
});
  }
  
  });
		  markersArray.push(marker);
		  
}
}  			 			 
//Associate the styled map with the MapTypeId and set it to display.
map.mapTypes.set('pink_parks', pinkMapType);
map.setMapTypeId('pink_parks');
//Hide Legend		
document.getElementById('map-legend').style.visibility = 'hidden';
//add button
var homeControl = new HomeControl2(homeControlDiv, homeControlDiv4, map);
homeControlDiv.index = 1;
map.controls[google.maps.ControlPosition.TOP_RIGHT].push(homeControlDiv);
  });
}



//Function 2 Revert back to Graphic Maps
function HomeControl2(homeControlDiv, homeControlDiv4, map) {
// Setup the click event listeners
google.maps.event.addDomListener(homeControlDiv, 'click', function() {
	



 function boxIn() {
        if (allowedBounds.contains(map.getCenter())) {
            return;
        }
        else {
            var mapCenter = map.getCenter();
            var X = mapCenter.lng();
            var Y = mapCenter.lat();

            var AmaxX = allowedBounds.getNorthEast().lng();
            var AmaxY = allowedBounds.getNorthEast().lat();
            var AminX = allowedBounds.getSouthWest().lng();
            var AminY = allowedBounds.getSouthWest().lat();

            if (X < AminX) {
                X = AminX;
            }
            if (X > AmaxX) {
                X = AmaxX;
            }
            if (Y < AminY) {
                Y = AminY;
            }
            if (Y > AmaxY) {
                Y = AmaxY;
            }

            map.setCenter(new google.maps.LatLng(Y, X));
        }
    }

clearOverlays();
	numClicked = 0;  
//change
 resizeMapDiv();
       
	   if (gmapsx != 'n'){
	    var latlng = new google.maps.LatLng(gmapsy, gmapsx);
				   }
		else {
		var latlng = new google.maps.LatLng(-20, 5);
>>>>>>> fc4adb7de0c2858c9dac0a55ba98b63e09586f5f
		}
		var myOptions = {
			zoom: initialZoom,
            minZoom: 2,
            maxZoom: 4,
            center: latlng,
            panControl: true,
            zoomControl: true,
            mapTypeControl: false,
            scaleControl: false,
            streetViewControl: false,
            overviewMapControl: false,
<<<<<<< HEAD
			mapTypeControlOptions: {
				mapTypeIds: ["moon"]
			}
		}
		
		map = new google.maps.Map(document.getElementById("map"), myOptions);
		map.mapTypes.set('moon', moonMapType);
		map.setMapTypeId('moon');
		setMarkers(map, beaches);
		
		if (stationSelected >= 0 && gmapsx != 'n'){
			google.maps.event.trigger(markersArray[stationSelected], 'click');
		}
		
		//Add Legend
		map.controls[google.maps.ControlPosition.RIGHT_CENTER].push(mapmap);
		var homeControl = new HomeControl(homeControlDiv, homeControlDiv4, mapmap, map);
		homeControlDiv.index = 1;
		map.controls[google.maps.ControlPosition.TOP_RIGHT].push(homeControlDiv);
		homeControlDiv4.index = 1;
		map.controls[google.maps.ControlPosition.TOP_RIGHT].push(homeControlDiv4);
		
		// Listen for the bounds_changes event
		google.maps.event.addListener(map, 'tilesloaded', function() {
			updateEdge();
		});
		
		google.maps.event.addListener(map, 'zoom_changed', function() {
			updateEdge();
			boxIn();
			var currentZoom = map.getZoom();
			
			if (currentZoom == 2){
				var newicon = {
					path: google.maps.SymbolPath.CIRCLE,
					fillOpacity: 0,
					strokeOpacity: 0,
					strokeWeight: 0,
					scale: 10
				};
			}
			else{
				var newicon = {
					path: google.maps.SymbolPath.CIRCLE,
					scale: 30,
					strokeWeight: 5,
					strokeOpacity: 0
				}
			}
			for (var i = 0; i < markersArray.length; i++ ) {
				markersArray[i].setIcon(newicon)
			}
		});
		
		google.maps.event.addListener(map, 'center_changed', function() {
			boxIn();
		});
	});
}
=======
             mapTypeControlOptions: {
            mapTypeIds: ["moon"]
        }
        }
        map = new google.maps.Map(document.getElementById("map"), myOptions);
    map.mapTypes.set('moon', moonMapType);
    map.setMapTypeId('moon');
 	setMarkers(map, beaches);
	

	if (stationSelected >= 0 && gmapsx != 'n'){		
	google.maps.event.trigger(markersArray[stationSelected], 'click');}
	
	
		//add buttons
document.getElementById('map-legend').style.visibility = 'visible';
 var homeControl = new HomeControl(homeControlDiv, homeControlDiv4, map);
  homeControlDiv.index = 1;
 map.controls[google.maps.ControlPosition.TOP_RIGHT].push(homeControlDiv);
    homeControlDiv4.index = 1;
 map.controls[google.maps.ControlPosition.TOP_RIGHT].push(homeControlDiv4);
 
// Listen for the bounds_changes event
 google.maps.event.addListener(map, 'tilesloaded', function() {
        updateEdge();
    });
google.maps.event.addListener(map, 'zoom_changed', function() {
	updateEdge();
	boxIn();
	var currentZoom = map.getZoom();
	
	if (currentZoom == 2){
		var newicon = {
        path: google.maps.SymbolPath.CIRCLE,
        fillOpacity: 0,
        strokeOpacity: 0,
        strokeWeight: 0,
        scale: 10
		};
	}
	else{
		var newicon = {
			path: google.maps.SymbolPath.CIRCLE,
			scale: 30,
			strokeWeight: 5,
			strokeOpacity: 0
			}
		}

for (var i = 0; i < markersArray.length; i++ ) {
	markersArray[i].setIcon(newicon)
	}
});
google.maps.event.addListener(map, 'center_changed', function() {
        boxIn();
    });
  });
}



>>>>>>> fc4adb7de0c2858c9dac0a55ba98b63e09586f5f
