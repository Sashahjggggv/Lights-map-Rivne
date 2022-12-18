function initMap() {
	
  const map = new google.maps.Map(document.getElementById("map"), {
		center: { lat: 50.61980292268567, lng: 26.251496156650585 },
		zoom: 13,
		mapId: "b061204d7bd99792",
		// mapId: "99ef70356ee7ffe7", // DARK them; "#ff0" -- DARK THEME COLOR ZONE
    mapTypeId: "roadmap",
  });

	const infowindow1 = new google.maps.InfoWindow({
		content: '<h1>Пункт незламності на вул. Млинівська, 34</h1><p>пункт незламності</p>',
		ariaLabel: "Млинівська 34",
	});
	const marker1 = new google.maps.Marker({
		position: { lat: 50.64264244334985, lng: 26.194509184681348 },
		map,
		title: "Млинівська 34",
	});

	const infowindow2 = new google.maps.InfoWindow({
		content: '<h1>Пункт незламності на вул. Г. Полуботка, 37</h1><p>пункт незламності</p>',
		ariaLabel: "Г. Полуботка 37",
	});
	const marker2 = new google.maps.Marker({
		position: { lat: 50.62272157243296, lng: 26.24498472886133 },
		map,
		title: "Полуботка 37",
	});
	
	const infowindow3 = new google.maps.InfoWindow({
		content: '<h1>Пункт незламності на вул. Князя Володимира, 74</h1><p>пункт незламності</p>',
		ariaLabel: "Кн. Володимира 74",
	});
	const marker3 = new google.maps.Marker({
		position: { lat: 50.63070886722709, lng: 26.25228172700857 },
		map,
		title: "Кн. Володимира 74",
	});
	
	const infowindow4 = new google.maps.InfoWindow({
		content: '<h1>Пункт незламності на вул. С. Дем’янчука, 18</h1><p>пункт незламності</p>',
		ariaLabel: "C. Дем’янчука 18",
	});
	const marker4 = new google.maps.Marker({
		position: { lat: 50.609988313402, lng: 26.290776882827227 },
		map,
		title: "С. Дем’янчука 18",
	});
	
	const infowindow5 = new google.maps.InfoWindow({
		content: '<h1>Пункт незламності на вул. Коновальця, 19 (поблизу ЗОШ №28)</h1><p>пункт незламності</p>',
		ariaLabel: "Коновальця 19",
	});
	const marker5 = new google.maps.Marker({
		position: { lat: 50.63749274700648, lng: 26.2602491981728 },
		map,
		title: "Коновальця 19",
	});
	
	const infowindow6 = new google.maps.InfoWindow({
		content: '<h1>Пункт незламності на вул. Кн. Острозького, 1 (поблизу ПК "Хімік")</h1><p>пункт незламності</p>',
		ariaLabel: "Кн. Острозького, 1",
	});
	const marker6 = new google.maps.Marker({
		position: { lat: 50.63692343447677, lng: 26.20451178653412 },
		map,
		title: "Кн. Острозького, 1",
	});
	
	const infowindow7 = new google.maps.InfoWindow({
		content: '<h1>Пункт незламності на вул. майдан Просвіти, 1</h1><p>пункт незламності</p>',
		ariaLabel: "Просвіти 1",
	});
	const marker7 = new google.maps.Marker({
		position: { lat: 50.626201820691854, lng: 26.254574328861434 },
		map,
		title: "Просвіти 1",
	});
	
	const infowindow8 = new google.maps.InfoWindow({
		content: '<h1>Пункт незламності на вул. Соборна, 195</h1><p>пункт незламності</p>',
		ariaLabel: "Соборна 195",
	});
	const marker8 = new google.maps.Marker({
		position: { lat: 50.6210020621312, lng: 26.231435440499798 },
		map,
		title: "Соборна 195",
	});
	
	const infowindow9 = new google.maps.InfoWindow({
		content: '<h1>Пункт незламності на вул. Соборна, 108</h1><p>пункт незламності</p>',
		ariaLabel: "Соборна 108",
	});
	const marker9 = new google.maps.Marker({
		position: { lat: 50.62006891999917, lng: 26.24777982700816 },
		map,
		title: "Соборна 108",
	});
	
	const infowindow10 = new google.maps.InfoWindow({
		content: '<h1>Пункт незламності на вул. Соборна, 1</h1><p>пункт незламності</p>',
		ariaLabel: "Соборна 1",
	});
	const marker10 = new google.maps.Marker({
		position: { lat: 50.617422720241564, lng: 26.26373255584434 },
		map,
		title: "Соборна 1",
	});
	
	const infowindow11 = new google.maps.InfoWindow({
		content: '<h1>Пункт незламності на вул. Соборна, 57</h1><p>пункт незламності</p>',
		ariaLabel: "Соборна, 57",
	});
	const marker11 = new google.maps.Marker({
		position: { lat: 50.619575572412955, lng: 26.2466908693359 },
		map,
		title: "Соборна, 57",
	});
	
	const infowindow12 = new google.maps.InfoWindow({
		content: '<h1>Пункт незламності на вул. Соборна, 370</h1><p>пункт незламності</p>',
		ariaLabel: "Соборна, 370",
	});
	const marker12 = new google.maps.Marker({
		position: { lat: 50.63166575816264, lng: 26.219980727008675 },
		map,
		title: "Соборна, 370",
	});
	
	const infowindow13 = new google.maps.InfoWindow({
		content: '<h1>Пункт незламності на вул. Симона Петлюри, 14</h1><p>пункт незламності</p>',
		ariaLabel: "C. Петлюри, 14",
	});
	const marker13 = new google.maps.Marker({
		position: { lat: 50.62184865247704, lng: 26.248721698172115 },
		map,
		title: "C. Петлюри, 14",
	});
	
	const infowindow14 = new google.maps.InfoWindow({
		content: '<h1>Пункт незламності на вул. Дубенська, 29</h1><p>пункт незламності</p>',
		ariaLabel: "Дубенська, 29",
	});
	const marker14 = new google.maps.Marker({
		position: { lat: 50.62096677261455, lng: 26.22642678282759 },
		map,
		title: "Дубенська, 29",
	});
	
	const infowindow15 = new google.maps.InfoWindow({
		content: '<h1>Пункт незламності на вул. Павлюченка, 1</h1><p>пункт незламності</p>',
		ariaLabel: "Павлюченка, 1",
	});
	const marker15 = new google.maps.Marker({
		position: { lat: 50.62350579253695, lng: 26.21856179817224 },
		map,
		title: "Павлюченка, 1",
	});
	
	const infowindow16 = new google.maps.InfoWindow({
		content: '<h1>Пункт незламності на вул. Литвина, 2</h1><p>пункт незламності</p>',
		ariaLabel: "Литвина, 2",
	});
	const marker16 = new google.maps.Marker({
		position: { lat: 50.595146422249016, lng: 26.297822896588126 },
		map,
		title: "Литвина, 2",
	});
	
	const infowindow17 = new google.maps.InfoWindow({
		content: '<h1>Пункт незламності на вул. Плужника, 3</h1><p>пункт незламності</p>',
		ariaLabel: "Плужника, 3",
	});
	const marker17 = new google.maps.Marker({
		position: { lat: 50.630713963082165, lng: 26.21384856933637 },
		map,
		title: "Плужника, 3",
	});
	
	const infowindow18 = new google.maps.InfoWindow({
		content: '<h1>Пункт незламності на вул. Кулика і Гудачека (Макарова), 44</h1><p>пункт незламності</p>',
		ariaLabel: "Кулика і Гудачека, 44",
	});
	const marker18 = new google.maps.Marker({
		position: { lat: 50.638597557849266, lng: 26.19586298282835 },
		map,
		title: "Кулика і Гудачека, 44",
	});
	
	const infowindow19 = new google.maps.InfoWindow({
		content: '<h1>Пункт незламності на вул. Коперніка, 23</h1><p>пункт незламності</p>',
		ariaLabel: "Коперніка, 23",
	});
	const marker19 = new google.maps.Marker({
		position: { lat: 50.61846072878764, lng: 26.224521698172083 },
		map,
		title: "Коперніка, 23",
	});
	
	const infowindow20 = new google.maps.InfoWindow({
		content: '<h1>Пункт незламності на вул. Жукова, 13</h1><p>пункт незламності</p>',
		ariaLabel: "Жукова, 13",
	});
	const marker20 = new google.maps.Marker({
		position: { lat: 50.616039349112995, lng: 26.21632008468033 },
		map,
		title: "Жукова, 13",
	});
	
	const infowindow21 = new google.maps.InfoWindow({
		content: '<h1>Пункт незламності на вул. Погоринська, 1</h1><p>пункт незламності</p>',
		ariaLabel: "Погоринська, 1",
	});
	const marker21 = new google.maps.Marker({
		position: { lat: 50.597168569167266, lng: 26.23629709817119 },
		map,
		title: "Погоринська, 1",
	});
	
	const infowindow22 = new google.maps.InfoWindow({
		content: '<h1>Пункт незламності на вул. Корольова, 3</h1><p>пункт незламності</p>',
		ariaLabel: "Корольова, 3",
	});
	const marker22 = new google.maps.Marker({
		position: { lat: 50.64077206745201, lng: 26.201362898172942 },
		map,
		title: "Корольова, 3",
	});
	
	const infowindow23 = new google.maps.InfoWindow({
		content: '<h1>Пункт незламності на вул. Чорновола, 17 А</h1><p>пункт незламності</p>',
		ariaLabel: "Чорновола, 17 А",
	});
	const marker23 = new google.maps.Marker({
		position: { lat: 50.61733520914987, lng: 26.252960998171936 },
		map,
		title: "Чорновола, 17 А",
	});
	
	const infowindow24 = new google.maps.InfoWindow({
		content: '<h1>Пункт незламності на вул. Чорновола, 98 А</h1><p>пункт незламності</p>',
		ariaLabel: "Чорновола, 98 А",
	});
	const marker24 = new google.maps.Marker({
		position: { lat: 50.59647265863802, lng: 26.258222284679626 },
		map,
		title: "Чорновола, 98 А",
	});
	
	const infowindow25 = new google.maps.InfoWindow({
		content: '<h1>Пункт незламності на вул. В.Червонія, 18 Б</h1><p>пункт незламності</p>',
		ariaLabel: "В.Червонія, 18 Б",
	});
	const marker25 = new google.maps.Marker({
		position: { lat: 50.600843269699475, lng: 26.227609398171413 },
		map,
		title: "В.Червонія, 18 Б",
	});
	
	const infowindow26 = new google.maps.InfoWindow({
		content: '<h1>Пункт незламності на вул. В.Червонія, 26</h1><p>пункт незламності</p>',
		ariaLabel: "В.Червонія, 26",
	});
	const marker26 = new google.maps.Marker({
		position: { lat: 50.6008228403026, lng: 26.22810292463357 },
		map,
		title: "В.Червонія, 26",
	});
	
	const infowindow27 = new google.maps.InfoWindow({
		content: '<h1>Пункт незламності на вул. Київська 108 А</h1><p>пункт незламності</p>',
		ariaLabel: "Київська 108 А",
	});
	const marker27 = new google.maps.Marker({
		position: { lat: 50.61178768771212, lng: 26.32024884049943 },
		map,
		title: "Київська 108 А",
	});
	
	

	marker1.addListener("click", () => {
		infowindow1.open({
			anchor: marker1,
			map,
		});
	});
	
	marker2.addListener("click", () => {
		infowindow2.open({
			anchor: marker2,
			map,
		});
	});

	marker3.addListener("click", () => {
		infowindow3.open({
			anchor: marker3,
			map,
		});
	});

	marker4.addListener("click", () => {
		infowindow4.open({
			anchor: marker4,
			map,
		});
	});

	marker5.addListener("click", () => {
		infowindow5.open({
			anchor: marker5,
			map,
		});
	});

	marker6.addListener("click", () => {
		infowindow6.open({
			anchor: marker6,
			map,
		});
	});

	marker7.addListener("click", () => {
		infowindow7.open({
			anchor: marker7,
			map,
		});
	});

	marker8.addListener("click", () => {
		infowindow8.open({
			anchor: marker8,
			map,
		});
	});

	marker9.addListener("click", () => {
		infowindow9.open({
			anchor: marker9,
			map,
		});
	});

	marker10.addListener("click", () => {
		infowindow10.open({
			anchor: marker10,
			map,
		});
	});

	marker11.addListener("click", () => {
		infowindow11.open({
			anchor: marker11,
			map,
		});
	});

	marker12.addListener("click", () => {
		infowindow12.open({
			anchor: marker12,
			map,
		});
	});

	marker13.addListener("click", () => {
		infowindow13.open({
			anchor: marker13,
			map,
		});
	});

	marker14.addListener("click", () => {
		infowindow14.open({
			anchor: marker14,
			map,
		});
	});

	marker15.addListener("click", () => {
		infowindow15.open({
			anchor: marker15,
			map,
		});
	});

	marker16.addListener("click", () => {
		infowindow16.open({
			anchor: marker16,
			map,
		});
	});

	marker17.addListener("click", () => {
		infowindow17.open({
			anchor: marker17,
			map,
		});
	});

	marker18.addListener("click", () => {
		infowindow18.open({
			anchor: marker18,
			map,
		});
	});

	marker19.addListener("click", () => {
		infowindow19.open({
			anchor: marker19,
			map,
		});
	});

	marker20.addListener("click", () => {
		infowindow20.open({
			anchor: marker20,
			map,
		});
	});

	marker21.addListener("click", () => {
		infowindow21.open({
			anchor: marker21,
			map,
		});
	});

	marker22.addListener("click", () => {
		infowindow22.open({
			anchor: marker22,
			map,
		});
	});

	marker23.addListener("click", () => {
		infowindow23.open({
			anchor: marker23,
			map,
		});
	});

	marker24.addListener("click", () => {
		infowindow24.open({
			anchor: marker24,
			map,
		});
	});

	marker25.addListener("click", () => {
		infowindow25.open({
			anchor: marker25,
			map,
		});
	});

	marker26.addListener("click", () => {
		infowindow26.open({
			anchor: marker26,
			map,
		});
	});

	marker27.addListener("click", () => {
		infowindow27.open({
			anchor: marker27,
			map,
		});
	});
}

window.initMap = initMap;