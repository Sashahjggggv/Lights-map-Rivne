function initMap() {

  const map = new google.maps.Map(document.getElementById("map"), {
		center: { lat: 50.61980292268567, lng: 26.251496156650585 },
		zoom: 13,
		mapId: "b061204d7bd99792",
		// mapId: "99ef70356ee7ffe7", // DARK them; "#ff0" -- DARK THEME COLOR ZONE
    mapTypeId: "roadmap",
  });

}