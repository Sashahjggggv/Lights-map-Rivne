function initMap() {
	var opt = {
		center: {lat: 50.617470432064536, lng: 26.27430882247241},
		zoom: 13,
		mapId: "b061204d7bd99792"
	}

	var map = new google.maps.Map(document.getElementById("map"), opt);

	
  // Define the LatLng coordinates for the polygon's path.
  const triangleCoords = [
    { lat: 50.621918027629334, lng: 26.26682135400799 },
    { lat: 50.62354190082035, lng: 26.271830980113435 },
    { lat: 50.617470432064536, lng: 26.27430882247241 },
		{ lat: 50.619422061074935, lng: 26.269011366394604 },
    { lat: 50.621918027629334, lng: 26.26682135400799 },
  ];
  // Construct the polygon.
  const bermudaTriangle = new google.maps.Polygon({
    paths: triangleCoords,
    strokeColor: "#FF0000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#FF0000",
    fillOpacity: 0.35,
  });

  bermudaTriangle.setMap(map);
	
	// var countyLayer = map.getFeatureLayer(google.maps.FeatureType.COUNTRY);
}