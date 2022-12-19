function initMap() {

  const map = new google.maps.Map(document.getElementById("map"), {
		center: { lat: 50.61980292268567, lng: 26.251496156650585 },
		zoom: 13,
		mapId: "b061204d7bd99792",
		// mapId: "99ef70356ee7ffe7", // DARK them; "#ff0" -- DARK THEME COLOR ZONE
    mapTypeId: "roadmap",
  });

	const biologyWeapon = '../img/vault_biology.svg';
	const bombsWeapon = '../img/vault_bombs.svg';
	const chemicalWeapon = '../img/vault_chemical.svg';
	const nuclearWeapon = '../img/vault_nuclear.svg';
	const weapon = '../img/vault.svg';

	const shelter1 = new google.maps.Marker({
		position: { lat: 50.61176, lng: 26.32025 },
		icon: bombsWeapon,
		title: 'Київська 108а',
		map: map,
	});
	const content1 = 'Балансоутримувач: ВАТ `Рівневодавтотранс`<br />Адреса: м. Рівне, вул. Київська, 108а<br />Місткість (чол.): 200';
	const shelter2 = new google.maps.Marker({
		position: { lat: 50.6129802714575, lng: 26.307495626644588 },
		icon: bombsWeapon,
		title: 'Київська 92в',
		map: map,
	});
	const content2 = 'Балансоутримувач: ЖКП `Галицьке`<br />Адреса: м. Рівне, вул. Київська, 92в<br />Місткість (чол.): 300';
	const shelter3 = new google.maps.Marker({
		position: { lat: 50.6141632480265, lng: 26.290730055480886 },
		icon: nuclearWeapon,
		title: 'Київська 78д',
		map: map,
	});
	const content3 = 'Балансоутримувач: ТДВ `Рівнефармація`<br />Адреса: м. Рівне, вул. Київська, 78д<br />Місткість (чол.): 200';
	const shelter4 = new google.maps.Marker({
		position: { lat: 50.6070913439318, lng: 26.284752255480633 },
		icon: bombsWeapon,
		title: 'Д.Галицького 23',
		map: map,
	});
	const content4 = 'Балансоутримувач: КП `Рівнеелектроавтотранс`<br />Адреса: м. Рівне, вул. Д. Галицького, 23<br />Місткість (чол.): 150';
	const shelter5 = new google.maps.Marker({
		position: { lat: 50.60590889762058, lng: 26.283162855452886 },
		icon: bombsWeapon,
		title: 'Д.Галицького 25',
		map: map,
	});
	const content5 = 'Балансоутримувач: ПАТ ` Рівненський, радіотехнічний завод`<br />Адреса: м. Рівне, вул. Д. Галицького, 25<br />Місткість (чол.): 4000';
	const shelter6 = new google.maps.Marker({
		position: { lat: 50.60396827418544, lng: 26.28261568481889 },
		icon: nuclearWeapon,
		title: 'Д.Галицького 25',
		map: map,
	});
	const content6 = 'Балансоутримувач: Регіональне відділення ФДМУ по Рівненській області<br />Адреса: м. Рівне, вул. Д. Галицького, 31<br />Місткість (чол.): 350';
	const shelter7 = new google.maps.Marker({
		position: { lat: 50.596439263867396, lng: 26.294147502677973 },
		icon: bombsWeapon,
		title: 'Курчатова 60',
		map: map,
	});
	const content7 = 'Балансоутримувач: Регіональне відділення ФДМУ по Рівненській області<br />Адреса: м. Рівне, вул. Курчатова, 60<br />Місткість (чол.): 150';
	const shelter8 = new google.maps.Marker({
		position: { lat: 50.60341342174024, lng: 26.278370131142072 },
		icon: bombsWeapon,
		title: 'Курчатова 18',
		map: map,
	});
	const content8 = 'Балансоутримувач: АТВТ `Ремонтно-транспортне підприємство`<br />Адреса: м. Рівне, вул. Курчатова, 18<br />Місткість (чол.): 200';
	const shelter9 = new google.maps.Marker({
		position: { lat: 50.60455058208492, lng: 26.277265061027496 },
		icon: nuclearWeapon,
		title: 'Курчатова 3',
		map: map,
	});
	const content9 = 'Балансоутримувач: Обласне товариство сприяння обороні України<br />Адреса: м. Рівне, вул. Курчатова, 3<br />Місткість (чол.): 100';
	const shelter10 = new google.maps.Marker({
		position: { lat: 50.60235113935698, lng: 26.274679411524517 },
		icon: nuclearWeapon,
		title: 'Тракторна 9',
		map: map,
	});
	const content10 = 'Балансоутримувач: ЖКП `Галицьке`<br />Адреса: м. Рівне, вул. Тракторна, 9<br />Місткість (чол.): 100';
	const shelter11 = new google.maps.Marker({
		position: { lat: 50.60438715954698, lng: 26.273960579491487 },
		icon: nuclearWeapon,
		title: 'Курчатова 6',
		map: map,
	});
	const content11 = 'Балансоутримувач: Рівненський базовий медичний коледж<br />Адреса: м. Рівне, вул. Курчатова, 6<br />Місткість (чол.): 700';
	const shelter12 = new google.maps.Marker({
		position: { lat: 50.605251930752054, lng: 26.274818886393078 },
		icon: nuclearWeapon,
		title: 'Курчатова 2/1',
		map: map,
	});
	const content12 = 'Балансоутримувач: Управління комунальною власністю міста<br />Адреса: м. Рівне, вул. Курчатова, 2/1<br />Місткість (чол.): 400';
	const shelter13 = new google.maps.Marker({
		position: { lat: 50.60373595941551, lng: 26.270288128789357 },
		icon: bombsWeapon,
		title: 'Медична 7',
		map: map,
	});
	const content13 = 'Балансоутримувач: Рівненський міський пологовий будинок № 2<br />Адреса: м. Рівне, вул. Медична, 7<br />Місткість (чол.): 400';
	const shelter14 = new google.maps.Marker({
		position: { lat: 50.598472554490186, lng: 26.259924894985474 },
		icon: bombsWeapon,
		title: 'Чорновола 89а',
		map: map,
	});
	const content14 = 'Балансоутримувач: ОВКПВКГ`Рівнеоблводоканал`<br />Адреса: м. Рівне, вул. В. Чорновола, 89а<br />Місткість (чол.): 150';
	const shelter15 = new google.maps.Marker({
		position: { lat: 50.60333220527293, lng: 26.260014410820418 },
		icon: nuclearWeapon,
		title: 'Чорновола 79',
		map: map,
	});
	const content15 = 'Балансоутримувач: Рівненський обласний спеціалізований диспансер<br />Адреса: м. Рівне, вул. Чорновола, 79<br />Місткість (чол.): 310';
	const shelter16 = new google.maps.Marker({
		position: { lat: 50.60709100898116, lng: 26.275965855867994 },
		icon: nuclearWeapon,
		title: 'Відінська 35',
		map: map,
	});
	const content16 = 'Балансоутримувач: Рівненський автотранспортний технікум НУВГ та П<br />Адреса: м. Рівне, вул. Відінська, 35<br />Місткість (чол.): 1000';
	const shelter17 = new google.maps.Marker({
		position: { lat: 50.60810343514676, lng: 26.274370549441045 },
		icon: nuclearWeapon,
		title: 'Відінська 40а',
		map: map,
	});
	const content17 = 'Балансоутримувач: ЖКП `Галицьке`<br />Адреса: м. Рівне, вул. Відінська, 40а<br />Місткість (чол.): 300';
	const shelter18 = new google.maps.Marker({
		position: { lat: 50.61179438819874, lng: 26.279478452656015 },
		icon: nuclearWeapon,
		title: 'С.Бандери 69',
		map: map,
	});
	const content18 = 'Балансоутримувач: ЖКП `Галицьке`<br />Адреса: м. Рівне, вул. С. Бандери, 69<br />Місткість (чол.): 250';
	const shelter19 = new google.maps.Marker({
		position: { lat: 50.611420654844174, lng: 26.272460637576245 },
		icon: nuclearWeapon,
		title: 'Ст.Бандери 58',
		map: map,
	});
	const content19 = 'Балансоутримувач: Управління державної служби охорони при УМВС<br />Адреса: м. Рівне, вул. Ст. Бандери, 58<br />Місткість (чол.): 200';
	const shelter20 = new google.maps.Marker({
		position: { lat: 50.61304819355112, lng: 26.275777532356013 },
		icon: nuclearWeapon,
		title: 'Відінська 5',
		map: map,
	});
	const content20 = 'Балансоутримувач: Управління громадської безпеки УМВС України в Рівненській області<br />Адреса: м. Рівне, вул. Відінська, 5<br />Місткість (чол.): 220';
	const shelter21 = new google.maps.Marker({
		position: { lat: 50.61632929729453, lng: 26.282742195757752 },
		icon: nuclearWeapon,
		title: 'Київська 77',
		map: map,
	});
	const content21 = 'Балансоутримувач: Управління комунальною власністю міста<br />Адреса: м. Рівне, вул. Київська, 77<br />Місткість (чол.): 300';
	const shelter22 = new google.maps.Marker({
		position: { lat: 50.61517254701302, lng: 26.276129596881365 },
		icon: nuclearWeapon,
		title: 'Київська 12',
		map: map,
	});
	const content22 = 'Балансоутримувач: Поштамт - ЦПЗ № 1 Рівненської дирекції УДППЗ `Укрпошта `<br />Адреса: м. Рівне, вул. Київська, 12<br />Місткість (чол.): 150';
	const shelter23 = new google.maps.Marker({
		position: { lat: 50.61602944849389, lng: 26.274957954631613 },
		icon: bombsWeapon,
		title: 'Київська 10',
		map: map,
	});
	const content23 = 'Балансоутримувач: Регіональне відділення Фонду державного майна України по Рівненській області<br />Адреса: м. Рівне, вул. Київська, 10<br />Місткість (чол.): 150';
	const shelter24 = new google.maps.Marker({
		position: { lat: 50.61525957292282, lng: 26.273645328992774 },
		icon: bombsWeapon,
		title: 'Відінська 4',
		map: map,
	});
	const content24 = 'Балансоутримувач: Управління СБУ в Рівненський області<br />Адреса: м. Рівне, вул. Відінська, 4<br />Місткість (чол.): 165';
	const shelter25 = new google.maps.Marker({
		position: { lat: 50.6186608595161, lng: 26.27532715828276 },
		icon: bombsWeapon,
		title: 'Білякова 31',
		map: map,
	});
	const content25 = 'Балансоутримувач: Управління освіти міста (ЗОШ № 12)<br />Адреса: м. Рівне, вул. Білякова, 31<br />Місткість (чол.): 150';
	const shelter26 = new google.maps.Marker({
		position: { lat: 50.61703392926956, lng: 26.272004153912253 },
		icon: nuclearWeapon,
		title: 'Київська 15',
		map: map,
	});
	const content26 = 'Балансоутримувач: Управління комунальною власністю міста<br />Адреса: м. Рівне, вул. Київська, 15<br />Місткість (чол.): 100';
	const shelter27 = new google.maps.Marker({
		position: { lat: 50.616572450137554, lng: 26.268838229174325 },
		icon: nuclearWeapon,
		title: 'С.Крушельницької 62а',
		map: map,
	});
	const content27 = 'Балансоутримувач: ЖКП `Галицьке`<br />Адреса: м. Рівне, вул. С. Крушельницької, 62а<br />Місткість (чол.): 600';
	const shelter28 = new google.maps.Marker({
		position: { lat: 50.61387134917417, lng: 26.2640572550558 },
		icon: nuclearWeapon,
		title: 'Кн.Ольги 13',
		map: map,
	});
	const content28 = 'Балансоутримувач: Управління комунальною власністю міста<br />Адреса: м. Рівне, вул. Кн. Ольги, 13<br />Місткість (чол.): 250';
	const shelter29 = new google.maps.Marker({
		position: { lat: 50.609865249072044, lng: 26.258591812975208 },
		icon: nuclearWeapon,
		title: 'Чорновола 43',
		map: map,
	});
	const content29 = 'Балансоутримувач: Національний університет водного господарства та природокористування<br />Адреса: м. Рівне, вул. Чорновола, 43<br />Місткість (чол.): 100';
	const shelter30 = new google.maps.Marker({
		position: { lat: 50.6082600575047, lng: 26.255555285708148 },
		icon: bombsWeapon,
		title: 'Чорновола 76а',
		map: map,
	});
	const content30 = 'Балансоутримувач: Рівненський державний гуманітарний університет<br />Адреса: м. Рівне, вул. Чорновола, 76а<br />Місткість (чол.): 600';
	// const shelter9 = new google.maps.Marker({
	// 	position: { lat: , lng:  },
	// 	icon: ,
	// 	title: '',
	// 	map: map,
	// });
	// const content9 = '';
	// const shelter9 = new google.maps.Marker({
	// 	position: { lat: , lng:  },
	// 	icon: ,
	// 	title: '',
	// 	map: map,
	// });
	// const content9 = '';
	// const shelter9 = new google.maps.Marker({
	// 	position: { lat: , lng:  },
	// 	icon: ,
	// 	title: '',
	// 	map: map,
	// });
	// const content9 = '';
	// const shelter9 = new google.maps.Marker({
	// 	position: { lat: , lng:  },
	// 	icon: ,
	// 	title: '',
	// 	map: map,
	// });
	// const content9 = '';
	// const shelter9 = new google.maps.Marker({
	// 	position: { lat: , lng:  },
	// 	icon: ,
	// 	title: '',
	// 	map: map,
	// });
	// const content9 = '';

	const infowindow = new google.maps.InfoWindow({
    content: content7,
    ariaLabel: "контент",
  });
  const marker = new google.maps.Marker({
    position: { lat: 50.61176, lng: 26.32025 },
    map,
    title: "content",
  });

  marker.addListener("click", () => {
    infowindow.open({
      anchor: marker,
      map,
    });
  });

	shelter4.addListener("click", () => {
    infowindow.open({
      anchor: shelter4,
      map,
    });
	});
}