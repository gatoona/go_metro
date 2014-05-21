//Initial Variables
var markersArray = [];	
var gmapslat = [34.055806];	
var gmapslon = [-118.237063];
var gmapsx = [50.05];	
var gmapsy = [52.8];
var stationSelected = [-1];
var initialZoom=3;
var imageWraps=false; //SET THIS TO false TO PREVENT THE IMAGE WRAPPING AROUND
var allowedBounds = new google.maps.LatLngBounds(
	new google.maps.LatLng(-85, -150), 
	new google.maps.LatLng(83, 125));
numClicked = 0;

//Initial Map Load

var map; //the GMap3 itself
var gmicMapType;

function GMICMapType() {
	this.Cache = Array();
	this.opacity = 1.0;
    }
    GMICMapType.prototype.tileSize = new google.maps.Size(256, 256);
    GMICMapType.prototype.maxZoom = 19;
    GMICMapType.prototype.getTile = function(coord, zoom, ownerDocument) {
        var c = Math.pow(2, zoom);
        var c = Math.pow(2, zoom);
        var tilex=coord.x,tiley=coord.y;
        if (imageWraps) {
		if (tilex<0) tilex=c+tilex%c;
        	if (tilex>=c) tilex=tilex%c;
        	if (tiley<0) tiley=c+tiley%c;
        	if (tiley>=c) tiley=tiley%c;
	}
	else {
		if ((tilex<0)||(tilex>=c)||(tiley<0)||(tiley>=c))
		{
			var blank = ownerDocument.createElement('DIV');
			blank.style.width = this.tileSize.width + 'px';
			blank.style.height = this.tileSize.height + 'px';
			return blank;
		}
	}
	var img = ownerDocument.createElement('IMG');
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
        img.id = "t_" + f;
        img.style.width = this.tileSize.width + 'px';
        img.style.height = this.tileSize.height + 'px';
        img.src = "rail_map-tiles/"+f+".jpg";
        this.Cache.push(img);
        return img;
    }
    GMICMapType.prototype.realeaseTile = function(tile) {
        var idx = this.Cache.indexOf(tile);
        if(idx!=-1) this.Cache.splice(idx, 1);
        tile=null;
    }
    GMICMapType.prototype.name = "Image Cutter";
    GMICMapType.prototype.alt = "Image Cutter Tiles";
    GMICMapType.prototype.setOpacity = function(newOpacity) {
        this.opacity = newOpacity;
        for (var i = 0; i < this.Cache.length; i++) {
            this.Cache[i].style.opacity = newOpacity; //mozilla
            this.Cache[i].style.filter = "alpha(opacity=" + newOpacity * 100 + ")"; //ie
        }
    }

//Global Map Functions
//Clear Markers
function clearOverlays() {
				    if (markersArray) {
    for (var i = 0; i < markersArray.length; i++ ) {
      markersArray[i].setMap(null);
	  if ( i== (markersArray.length-1))
	  {markersArray = [];
	  }
    }
	}
}

//LoadIt
function load() {
		google.maps.visualRefresh = true;
        resizeMapDiv();
        var latlng = new google.maps.LatLng(gmapsx, gmapsy);
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
	    mapTypeId: "ImageCutter"
        }
		
map = new google.maps.Map(document.getElementById("map"), myOptions);
gmicMapType = new GMICMapType();
map.mapTypes.set("ImageCutter",gmicMapType);

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

///URL Variable Actions
if (second == 2){		
	map.setZoom(2); }	
if (first >= 0){
	var stationIDNum = first;
	google.maps.event.trigger(markersArray[stationIDNum], 'click');
	centerLocation = beaches[stationIDNum];
	stationSelect = new google.maps.LatLng(centerLocation[3], centerLocation[2])
	map.setCenter(stationSelect);	
}

// Listen for the bounds_changes event
google.maps.event.addListener(map, 'bounds_changed', function() {
	if (allowedBounds.contains(map.getCenter())) return;
// Out of bounds - Move the map back within the bounds
var c = map.getCenter(),
x = c.lng(),
y = c.lat(),
maxX = allowedBounds.getNorthEast().lng(),
maxY = allowedBounds.getNorthEast().lat(),
minX = allowedBounds.getSouthWest().lng(),
minY = allowedBounds.getSouthWest().lat();
if (x < minX) x = minX;
if (x > maxX) x = maxX;
if (y < minY) y = minY;
if (y > maxY) y = maxY;
map.setCenter(new google.maps.LatLng(y, x));
	});
}

	function alerz(stnID){
google.maps.event.trigger(markersArray[stnID], 'click');
}


function setMarkers(map, locations, category) {
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
	 var myLatLng = new google.maps.LatLng(beach[3], beach[2]);
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

//Update Initial Variables
gmapslat = datalat;
gmapslon = datalon;
gmapsx = dataxcoord;
gmapsy = dataycoord;
stationSelected = dataID;
stationSelect = new google.maps.LatLng(dataxcoord, dataycoord) 


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
      scale: 15,
	  strokeWeight: 5,
	  strokeColor: '#FF0000',
	  strokeOpacity: 0.5,
	   fillColor: '#000',
      fillOpacity: 0.5
    }
});
  }

  });
		  markersArray.push(marker);

}
}  



//Function 1 Go to Google Maps
function HomeControl(homeControlDiv, homeControlDiv4, map) {
	//style
		  var pinkParksStyles = [ { "featureType": "transit.station.rail", "stylers": [ { "visibility": "off" } ] },{ "featureType": "road", "elementType": "geometry", "stylers": [ { "saturation": -100 }, { "lightness": 100 } ] },{ "featureType": "poi", "stylers": [ { "visibility": "off" } ] },{ "featureType": "administrative", "stylers": [ { "visibility": "off" } ] },{ "featureType": "landscape", "stylers": [ { "hue": "#fff700" }, { "lightness": -5 } ] },{ } ];
// Create a new StyledMapType object, passing it the array of styles,
// as well as the name to be displayed on the map type control.
  var pinkMapType = new google.maps.StyledMapType(pinkParksStyles,
    {name: "Pink Parks"});
// Setup the click event listeners
  google.maps.event.addDomListener(homeControlDiv, 'click', function() { 
  numClicked = 0;
clearOverlays();
//change
       // var latlng = new google.maps.LatLng(34.055806, -118.237063);
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

clearOverlays();
	numClicked = 0;  
//change
 resizeMapDiv();
       
	   if (gmapsx != 'n'){
	    var latlng = new google.maps.LatLng(gmapsx, gmapsy);}
		else {
		var latlng = new google.maps.LatLng(50, 50);
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
            mapTypeControlOptions: { mapTypeIds: ["ImageCutter"] },
	    mapTypeId: "ImageCutter"
        }
        map = new google.maps.Map(document.getElementById("map"), myOptions);
	gmicMapType = new GMICMapType();
        map.mapTypes.set("ImageCutter",gmicMapType);
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
   google.maps.event.addListener(map, 'bounds_changed', function() {
     if (allowedBounds.contains(map.getCenter())) return;
// Out of bounds - Move the map back within the bounds
     var c = map.getCenter(),
         x = c.lng(),
         y = c.lat(),
         maxX = allowedBounds.getNorthEast().lng(),
         maxY = allowedBounds.getNorthEast().lat(),
         minX = allowedBounds.getSouthWest().lng(),
         minY = allowedBounds.getSouthWest().lat();
     if (x < minX) x = minX;
     if (x > maxX) x = maxX;
     if (y < minY) y = minY;
     if (y > maxY) y = maxY;
     map.setCenter(new google.maps.LatLng(y, x));
   });
  });
}



