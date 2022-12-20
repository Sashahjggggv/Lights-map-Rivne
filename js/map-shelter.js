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
	const shelter31 = new google.maps.Marker({
		position: { lat: 50.61055859649922, lng: 26.255197265009933 },
		icon: nuclearWeapon,
		title: 'Котляревського 3',
		map: map,
	});
	const content31 = 'Балансоутримувач: Головне управління ДСЕС у Рівненській області<br />Адреса: м. Рівне, вул. Котляревського, З<br />Місткість (чол.): 80';
	const shelter32 = new google.maps.Marker({
		position: { lat: 50.61804930391094, lng: 26.26759403058737 },
		icon: bombsWeapon,
		title: 'Грабник 2',
		map: map,
	});
	const content32 = 'Балансоутримувач: Управління з питань НС та ЦЗН Рівненської  ОДА<br />Адреса: м. Рівне, вул. Грабник, 2<br />Місткість (чол.): 350';
	const shelter33 = new google.maps.Marker({
		position: { lat: 50.61725442715882, lng: 26.264045795983364 },
		icon: nuclearWeapon,
		title: 'Соборна 1',
		map: map,
	});
	const content33 = 'Балансоутримувач: ЗАТ `Рівнебудтандем`<br />Адреса: м. Рівне, вул. Соборна, 1<br />Місткість (чол.): 140';
	const shelter34 = new google.maps.Marker({
		position: { lat: 50.61741735329911, lng: 26.262567364850963 },
		icon: bombsWeapon,
		title: 'Соборна 3',
		map: map,
	});
	const content34 = 'Балансоутримувач: Управління комунальною власністю міста<br />Адреса: м. Рівне, вул. Соборна, З<br />Місткість (чол.): 100';
	const shelter35 = new google.maps.Marker({
		position: { lat: 50.617545718951625, lng: 26.261462432152193 },
		icon: nuclearWeapon,
		title: 'Соборна 5',
		map: map,
	});
	const content35 = 'Балансоутримувач: Рівненська обласна спілка споживчих товариств Облспоживспілка<br />Адреса: м. Рівне, вул. Соборна, 5<br />Місткість (чол.): 170';
	const shelter36 = new google.maps.Marker({
		position: { lat: 50.61862693881819, lng: 26.261937086356603 },
		icon: nuclearWeapon,
		title: 'Соборна 12а',
		map: map,
	});
	const content36 = 'Балансоутримувач: Рівненський міськвиконком<br />Адреса: м. Рівне, вул. Соборна, 12а<br />Місткість (чол.): 150';
	const shelter37 = new google.maps.Marker({
		position: { lat: 50.617950562180305, lng: 26.258435539044473 },
		icon: bombsWeapon,
		title: 'Соборна 11',
		map: map,
	});
	const content37 = 'Балансоутримувач: Національний університет водного господарства та природокористування<br />Адреса: м. Рівне, вул. Соборна, 11<br />Місткість (чол.): 200';
	const shelter38 = new google.maps.Marker({
		position: { lat: 50.6195106571679, lng: 26.258700100408284 },
		icon: bombsWeapon,
		title: 'Пушкіна 4',
		map: map,
	});
	const content38 = 'Балансоутримувач: УМВС України в Рівненській області<br />Адреса: м. Рівне, вул. Пушкіна, 4<br />Місткість (чол.): 450';
	const shelter39 = new google.maps.Marker({
		position: { lat: 50.6126557310971, lng: 26.252562967158436 },
		icon: bombsWeapon,
		title: 'Ст.Бандери 12',
		map: map,
	});
	const content39 = 'Балансоутримувач: Рівненський державний гуманітарний університет<br />Адреса: м. Рівне, вул. Ст. Бандери, 12<br />Місткість (чол.): 140';
	const shelter40 = new google.maps.Marker({
		position: { lat: 50.61538604706445, lng: 26.251762667429144 },
		icon: bombsWeapon,
		title: 'Драгоманова 9',
		map: map,
	});
	const content40 = 'Балансоутримувач: Жіноча консультація з денним стаціонаром поліклініки № 2<br />Адреса: м. Рівне, вул. Драгоманова, 9<br />Місткість (чол.): 160';
	const shelter41 = new google.maps.Marker({
		position: { lat: 50.61168039696542, lng: 26.251124992697545 },
		icon: bombsWeapon,
		title: 'Котляревського, 20а',
		map: map,
	});
	const content41 = 'Балансоутримувач: Рівненська обласна державна телерадіокомпанія<br />Адреса: м. Рівне, вул. Котляревського, 20а<br />Місткість (чол.): 150';
	const shelter42 = new google.maps.Marker({
		position: { lat: 50.62077503312628, lng: 26.27387680428927 },
		icon: bombsWeapon,
		title: 'Білякова, 4а',
		map: map,
	});
	const content42 = 'Балансоутримувач: ПАТ `Рівнегаз`<br />Адреса: м. Рівне, вул. Білякова, 4а<br />Місткість (чол.): 150';
	const shelter43 = new google.maps.Marker({
		position: { lat: 50.6225339665402, lng: 26.27283834458799 },
		icon: nuclearWeapon,
		title: 'Б.Хмельницького 3',
		map: map,
	});
	const content43 = 'Балансоутримувач: ТДВ `Рівнефармація`<br />Адреса: м. Рівне, вул. Б. Хмельницького, 3<br />Місткість (чол.): 50';
	const shelter44 = new google.maps.Marker({
		position: { lat: 50.62197057913787, lng: 26.2691532710065 },
		icon: nuclearWeapon,
		title: 'Видумки 26',
		map: map,
	});
	const content44 = 'Балансоутримувач: Управління освіти міста (ЗОШ № 10)<br />Адреса: м. Рівне, вул. Видумки, 26<br />Місткість (чол.): 120';
	const shelter45 = new google.maps.Marker({
		position: { lat: 50.620027054091445, lng: 26.26281158548264 },
		icon: nuclearWeapon,
		title: 'Кн.Володимира 17',
		map: map,
	});
	const content45 = 'Балансоутримувач: КЗ `Рівненський обласний центр психічного здоров’я`<br />Адреса: м. Рівне, вул. Кн. Володимира, 17<br />Місткість (чол.): 60';
	const shelter46 = new google.maps.Marker({
		position: { lat: 50.622555393114126, lng: 26.266024288337817 },
		icon: nuclearWeapon,
		title: 'Островського 13а',
		map: map,
	});
	const content46 = 'Балансоутримувач: Музична школа № 2<br />Адреса: м. Рівне, вул. Островського, 13а<br />Місткість (чол.): 640';
	const shelter47 = new google.maps.Marker({
		position: { lat: 50.623070568244295, lng: 26.25931988566974 },
		icon: nuclearWeapon,
		title: 'Остафова 29',
		map: map,
	});
	const content47 = 'Балансоутримувач: Рівненський державний гуманітарний університет (гурт.)<br />Адреса: м. Рівне, вул. Остафова, 29<br />Місткість (чол.): 830';
	const shelter48 = new google.maps.Marker({
		position: { lat: 50.6217247141513, lng: 26.256409343724908 },
		icon: nuclearWeapon,
		title: 'Пушкіна, 17',
		map: map,
	});
	const content48 = 'Балансоутримувач: Управління освіти міста (Спеціалізована школа № 15)<br />Адреса: м. Рівне, вул. Пушкіна, 17<br />Місткість (чол.): 300';
	const shelter49 = new google.maps.Marker({
		position: { lat: 50.622775731165106, lng: 26.255142971163593 },
		icon: nuclearWeapon,
		title: 'Остафова 5',
		map: map,
	});
	const content49 = 'Балансоутримувач: Управління освіти міста (`Центр надії`)<br />Адреса: м. Рівне, вул. Остафова, 5<br />Місткість (чол.): 100';
	const shelter50 = new google.maps.Marker({
		position: { lat: 50.62026160411404, lng: 26.25337006556121 },
		icon: bombsWeapon,
		title: 'Міцкевича 2',
		map: map,
	});
	const content50 = 'Балансоутримувач: РФ ПАТ `Укртелеком` ЦТП <br />Адреса: м. Рівне, вул. Міцкевича, 2<br />Місткість (чол.): 450';
	const shelter51 = new google.maps.Marker({
		position: { lat: 50.619578984140574, lng: 26.252424934425058 },
		icon: bombsWeapon,
		title: 'Соборна 56',
		map: map,
	});
	const content51 = 'Балансоутримувач: Поштамт - ЦПЗ № 1 Рівненської дирекції УДППЗ “Укрпошта`<br />Адреса: м. Рівне, вул. Соборна, 56<br />Місткість (чол.): 150';
	const shelter52 = new google.maps.Marker({
		position: { lat: 50.61866252298836, lng: 26.254434081091173 },
		icon: nuclearWeapon,
		title: 'Соборна, 15',
		map: map,
	});
	const content52 = 'Балансоутримувач: ТДВ `Рівнефармація`<br />Адреса: м. Рівне, вул. Соборна, 15<br />Місткість (чол.): 40';
	const shelter53 = new google.maps.Marker({
		position: { lat: 50.61862103666989, lng: 26.25276375502308 },
		icon: nuclearWeapon,
		title: 'Соборна 17',
		map: map,
	});
	const content53 = 'Балансоутримувач: ПАТ `Рівненський ЦУМ`<br />Адреса: м. Рівне, вул. Соборна, 17<br />Місткість (чол.): 150';
	const shelter54 = new google.maps.Marker({
		position: { lat: 50.618081711182874, lng: 26.25252598621429 },
		icon: nuclearWeapon,
		title: 'Чорновола 1',
		map: map,
	});
	const content54 = 'Балансоутримувач: Рівненська філія ПАТ `Укртелеком`<br />Адреса: м. Рівне, вул. В. Чорновола, 1<br />Місткість (чол.): 120';
	const shelter55 = new google.maps.Marker({
		position: { lat: 50.6176517549788, lng: 26.25289452790903 },
		icon: nuclearWeapon,
		title: 'В.Чорновола 13',
		map: map,
	});
	const content55 = 'Балансоутримувач: Рівненська обласна спілка споживчих товариств Облспоживспілка<br />Адреса: м. Рівне, вул. В. Чорновола, 13<br />Місткість (чол.): 220';
	const shelter56 = new google.maps.Marker({
		position: { lat: 50.617874276658384, lng: 26.250546560774477 },
		icon: bombsWeapon,
		title: '16 липня 17',
		map: map,
	});
	const content56 = 'Балансоутримувач: ВП `Рівненська дирекція залізничних перевезень` ДТГО `Львівська залізниця`<br />Адреса: м. Рівне, вул. 16 липня, 17<br />Місткість (чол.): 300';
	const shelter57 = new google.maps.Marker({
		position: { lat: 50.61541516495229, lng: 26.249482545211674 },
		icon: nuclearWeapon,
		title: '16 Липня 38',
		map: map,
	});
	const content57 = 'Балансоутримувач: Рівненська філія УДНДІПМ `Діпромісто`<br />Адреса: вул. 16 Липня, 38<br />Місткість (чол.): 450';
	const shelter58 = new google.maps.Marker({
		position: { lat: 50.61453119530184, lng: 26.245168419584726 },
		icon: bombsWeapon,
		title: '24 серпня 2',
		map: map,
	});
	const content58 = 'Балансоутримувач: Управління освіти міста (ЗОШ № 2)<br />Адреса: м. Рівне, вул. 24 серпня, 2<br />Місткість (чол.): 120';
	const shelter59 = new google.maps.Marker({
		position: { lat: 50.61755720162067, lng: 26.245132406014232 },
		icon: nuclearWeapon,
		title: 'Замкова 31',
		map: map,
	});
	const content59 = 'Балансоутримувач: ДП `Рівненський науково-виробничий центр стандартизації, метрології та сертифікації`<br />Адреса: м. Рівне, вул. Замкова, 31<br />Місткість (чол.): 50';
	const shelter60 = new google.maps.Marker({
		position: { lat: 50.61741408596521, lng: 26.24465754601661 },
		icon: nuclearWeapon,
		title: 'Замкова, 29',
		map: map,
	});
	const content60 = 'Балансоутримувач: Рівненське міське управління ГУ ДСЕС у Рівненській області<br />Адреса: м. Рівне, вул. Замкова, 29<br />Місткість (чол.): 120';
	const shelter61 = new google.maps.Marker({
		position: { lat: 50.61967375603196, lng: 26.245850631723762 },
		icon: nuclearWeapon,
		title: 'Соборна 57',
		map: map,
	});
	const content61 = 'Балансоутримувач: Управління комунальною власністю міста<br />Адреса: м. Рівне, вул. Соборна, 57<br />Місткість (чол.): 140';
	const shelter62 = new google.maps.Marker({
		position: { lat: 50.619579109205254, lng: 26.246921810573923 },
		icon: nuclearWeapon,
		title: 'Соборна, 57',
		map: map,
	});
	const content62 = 'Балансоутримувач: Управління комунальною власністю міста<br />Адреса: м. Рівне, вул. Соборна, 57<br />Місткість (чол.): 140';
	const shelter63 = new google.maps.Marker({
		position: { lat: 50.6200660430964, lng: 26.250300007506524 },
		icon: nuclearWeapon,
		title: 'майдвн Незалежності 3',
		map: map,
	});
	const content63 = 'Балансоутримувач: ТДВ `Рівнефармація`<br />Адреса: м. Рівне, майдан Незалежності, 3<br />Місткість (чол.): 300';
	const shelter64 = new google.maps.Marker({
		position: { lat: 50.62105654258992, lng: 26.249978586818976 },
		icon: nuclearWeapon,
		title: 'Поштова 11',
		map: map,
	});
	const content64 = 'Балансоутримувач: Рівненська обласна стоматологічна поліклініка<br />Адреса: м. Рівне, вул. Поштова, 11<br />Місткість (чол.): 40';
	const shelter65 = new google.maps.Marker({
		position: { lat: 50.62188471732032, lng: 26.24869946372045 },
		icon: bombsWeapon,
		title: 'С.Петлюри 14а',
		map: map,
	});
	const content65 = 'Балансоутримувач: Філія `Відділення ПАТ Промінвестбанку в м. Рівне`<br />Адреса: м. Рівне, вул. С. Петлюри, 14а<br />Місткість (чол.): 100';
	const shelter66 = new google.maps.Marker({
		position: { lat: 50.62127393610755, lng: 26.248154838409487 },
		icon: bombsWeapon,
		title: 'С.Петлюри 10',
		map: map,
	});
	const content66 = 'Балансоутримувач: Управління Національного банку України в Рівненській області<br />Адреса: м. Рівне, вул. С. Петлюри, 10<br />Місткість (чол.): 50';
	const shelter67 = new google.maps.Marker({
		position: { lat: 50.620794051375064, lng: 26.246073444230223 },
		icon: nuclearWeapon,
		title: 'площа Театральна 1',
		map: map,
	});
	const content67 = 'Балансоутримувач: Облмуздрамтеатр<br />Адреса: м. Рівне, площа Театральна, 1<br />Місткість (чол.): 800';
	const shelter68 = new google.maps.Marker({
		position: { lat: 50.62044349418952, lng: 26.244265635336145 },
		icon: bombsWeapon,
		title: 'Соборна 190',
		map: map,
	});
	const content68 = 'Балансоутримувач: ЖКП `Покровське`<br />Адреса: м. Рівне, вул. Соборна, 190<br />Місткість (чол.): 120';
	const shelter69 = new google.maps.Marker({
		position: { lat: 50.620940399712886, lng: 26.245150764339684 },
		icon: bombsWeapon,
		title: 'Пересопницька, 58',
		map: map,
	});
	const content69 = 'Балансоутримувач: ЖКП `Покровське`<br />Адреса: м. Рівне, вул. Пересопницька, 58<br />Місткість (чол.): 148';
	const shelter70 = new google.maps.Marker({
		position: { lat: 50.619984022069, lng: 26.241443951444296 },
		icon: nuclearWeapon,
		title: 'Соборна 135',
		map: map,
	});
	const content70 = 'Балансоутримувач: ЖКП `Західне`<br />Адреса: м. Рівне, вул. Соборна, 135<br />Місткість (чол.): 130';
	const shelter71 = new google.maps.Marker({
		position: { lat: 50.62093018938829, lng: 26.242044766274894 },
		icon: nuclearWeapon,
		title: 'Базарна 8',
		map: map,
	});
	const content71 = 'Балансоутримувач: ЖКП `Покровське`<br />Адреса: м. Рівне, вул. Базарна, 8<br />Місткість (чол.): 100';
	const shelter72 = new google.maps.Marker({
		position: { lat: 50.6210152754425, lng: 26.240548093596182 },
		icon: nuclearWeapon,
		title: 'Пересопницька 93',
		map: map,
	});
	const content72 = 'Балансоутримувач: Управління освіти міста (ЗОШ № 21)<br />Адреса: м. Рівне, вул. Пересопницька, 93<br />Місткість (чол.): 140';
	const shelter73 = new google.maps.Marker({
		position: { lat: 50.62206692639017, lng: 26.244324643895933 },
		icon: nuclearWeapon,
		title: 'Сагайдачного, 4',
		map: map,
	});
	const content73 = 'Балансоутримувач: Управління комунальною власністю міста<br />Адреса: м. Рівне, вул. Сагайдачного, 4<br />Місткість (чол.): 100';
	const shelter74 = new google.maps.Marker({
		position: { lat: 50.622618267961, lng: 26.24493618757111 },
		icon: bombsWeapon,
		title: 'Г.Полуботка 37',
		map: map,
	});
	const content74 = 'Балансоутримувач: Рівненське міськрайонне управління ГУ ДСНС України в Рівненській області<br />Адреса: м. Рівне, вул. Г. Полуботка, 37<br />Місткість (чол.): 150';
	const shelter75 = new google.maps.Marker({
		position: { lat: 50.62288032310792, lng: 26.245907147265903 },
		icon: nuclearWeapon,
		title: 'Г.Мазепи 20',
		map: map,
	});
	const content75 = 'Балансоутримувач: ЖКП `Покровське`<br />Адреса: м. Рівне, вул. Г. Мазепи, 20<br />Місткість (чол.): 120';
	const shelter76 = new google.maps.Marker({
		position: { lat: 50.624703760301195, lng: 26.25308005093785 },
		icon: nuclearWeapon,
		title: 'Директорії 5',
		map: map,
	});
	const content76 = 'Балансоутримувач: ТДВ `Рівнефармація`<br />Адреса: м. Рівне, вул. Директорії, 5<br />Місткість (чол.): 40';
	const shelter77 = new google.maps.Marker({
		position: { lat: 50.62471494622639, lng: 26.25047486989058 },
		icon: nuclearWeapon,
		title: 'С.Петлюри 35',
		map: map,
	});
	const content77 = 'Балансоутримувач: Управління міжнародного співробітництва та європейської інтеграції ОДА<br />Адреса: м. Рівне, вул. С. Петлюри, 35<br />Місткість (чол.): 70';
	const shelter78 = new google.maps.Marker({
		position: { lat: 50.62558668252512, lng: 26.24884281885692 },
		icon: nuclearWeapon,
		title: 'Литовська, 55/53',
		map: map,
	});
	const content78 = 'Балансоутримувач: Рівненський економіко-технологічний коледж НУВГ та П<br />Адреса: м. Рівне, вул. Литовська, 55/53<br />Місткість (чол.): 100';
	const shelter79 = new google.maps.Marker({
		position: { lat: 50.62685350540808, lng: 26.250220416968574 },
		icon: bombsWeapon,
		title: 'Кавказька, 15',
		map: map,
	});
	const content79 = 'Балансоутримувач: ЖКП `Покровське`<br />Адреса: м. Рівне, вул. Кавказька, 15<br />Місткість (чол.): 300';
	const shelter80 = new google.maps.Marker({
		position: { lat: 50.62668183349879, lng: 26.271732160496835 },
		icon: bombsWeapon,
		title: 'Ак. Грушевського, 11',
		map: map,
	});
	const content80 = 'Балансоутримувач: Дитяча поліклініка № 3 Рівненської міської дитячої лікарні<br />Адреса: м. Рівне, вул. Ак. Грушевського, 11<br />Місткість (чол.): 100';
	const shelter81 = new google.maps.Marker({
		position: { lat: 50.62920484723075, lng: 26.272170527430326 },
		icon: bombsWeapon,
		title: 'Гагаріна 16',
		map: map,
	});
	const content81 = 'Балансоутримувач: ТзОВ `Рівнеспецбудінвест`<br />Адреса: м. Рівне, вул. Гагаріна, 16<br />Місткість (чол.): 150';
	const shelter82 = new google.maps.Marker({
		position: { lat: 50.6288724103142, lng: 26.2671996044529 },
		icon: bombsWeapon,
		title: 'Гагаріна 39',
		map: map,
	});
	const content82 = 'Балансоутримувач: ПАТ `Рівненський завод `Газотрон`<br />Адреса: м. Рівне, вул. Гагаріна, 39<br />Місткість (чол.): 1633';
	const shelter83 = new google.maps.Marker({
		position: { lat: 50.62817791599219, lng: 26.266077685019223 },
		icon: nuclearWeapon,
		title: 'Гагаріна 29',
		map: map,
	});
	const content83 = 'Балансоутримувач: Колективне підприємство `Наш спільний дім`<br />Адреса: м. Рівне, вул. Гагаріна, 29<br />Місткість (чол.): 200';
	const shelter84 = new google.maps.Marker({
		position: { lat: 50.63287673458737, lng: 26.28420561133277 },
		icon: nuclearWeapon,
		title: 'Костромська, 25а',
		map: map,
	});
	const content84 = 'Балансоутримувач: Рівненське лінійне виробниче управління магістральних газопроводів УМГ `Львівтрансгаз`<br />Адреса: м. Рівне, вул. Костромська, 25а<br />Місткість (чол.): 100';
	const shelter85 = new google.maps.Marker({
		position: { lat: 50.63407786648173, lng: 26.276542944308407 },
		icon: nuclearWeapon,
		title: 'Кн.Романа, 1',
		map: map,
	});
	const content85 = 'Балансоутримувач: ЖКП `Перспективне`<br />Адреса: м. Рівне, вул. Кн.Романа, 1<br />Місткість (чол.): 540';
	const shelter86 = new google.maps.Marker({
		position: { lat: 50.63571066869026, lng: 26.277527251912197 },
		icon: nuclearWeapon,
		title: 'проспект Кн. Романа, 8',
		map: map,
	});
	const content86 = 'Балансоутримувач: ЖКП `Перспективне`<br />Адреса: м. Рівне, проспект Кн. Романа, 8<br />Місткість (чол.): 1000';
	const shelter87 = new google.maps.Marker({
		position: { lat: 50.63663048025497, lng: 26.27423651938737 },
		icon: nuclearWeapon,
		title: 'проспект Кн. Романа, 12',
		map: map,
	});
	const content87 = 'Балансоутримувач: Управління комунальною власністю міста<br />Адреса: м. Рівне, проспект Кн. Романа, 12<br />Місткість (чол.): 450';
	const shelter88 = new google.maps.Marker({
		position: { lat: 50.63633496043557, lng: 26.27361914300182 },
		icon: nuclearWeapon,
		title: 'проспект Кн. Романа, 13',
		map: map,
	});
	const content88 = 'Балансоутримувач: Управління комунальною власністю міста<br />Адреса: м. Рівне, проспект Кн. Романа, 13<br />Місткість (чол.): 150';
	const shelter89 = new google.maps.Marker({
		position: { lat: 50.645874978867255, lng: 26.278197648238976 },
		icon: bombsWeapon,
		title: 'Фабрична, 2',
		map: map,
	});
	const content89 = 'Балансоутримувач: ПАТ `Рівненська фабрика нетканих матеріалів`<br />Адреса: м. Рівне, вул. Фабрична, 2<br />Місткість (чол.): 450';
	const shelter90 = new google.maps.Marker({
		position: { lat: 50.64406156390772, lng: 26.27806921780933 },
		icon: nuclearWeapon,
		title: 'Фабрична, 4',
		map: map,
	});
	const content90 = 'Балансоутримувач: ПАТ `Рівненська фабрика нетканих матеріалів`<br />Адреса: м. Рівне, вул. Фабрична, 4<br />Місткість (чол.): 200';
	const shelter91 = new google.maps.Marker({
		position: { lat: 50.64277475695046, lng: 26.274867019297822 },
		icon: bombsWeapon,
		title: 'Фабрична, 12',
		map: map,
	});
	const content91 = 'Балансоутримувач: Приватний підприємець Червонюк О.К.<br />Адреса: м. Рівне, вул. Фабрична, 12<br />Місткість (чол.): 1000';
	const shelter92 = new google.maps.Marker({
		position: { lat: 50.64045793035828, lng: 26.268316121943233 },
		icon: bombsWeapon,
		title: 'Будівельників, 1',
		map: map,
	});
	const content92 = 'Балансоутримувач: ПП Черняк В.П.<br />Адреса: м. Рівне, вул. Будівельників, 1<br />Місткість (чол.): 300';
	const shelter93 = new google.maps.Marker({
		position: { lat: 50.63800371167198, lng: 26.261609330960717 },
		icon: nuclearWeapon,
		title: 'Є. Коновальця, 17',
		map: map,
	});
	const content93 = 'Балансоутримувач: Управління освіти міста (ЗОШ № 25)<br />Адреса: м. Рівне, вул. Є. Коновальця, 17<br />Місткість (чол.): 2500';
	const shelter94 = new google.maps.Marker({
		position: { lat: 50.637420928786604, lng: 26.260323940902207 },
		icon: nuclearWeapon,
		title: 'Є. Коновальця, 19',
		map: map,
	});
	const content94 = 'Балансоутримувач: Управління освіти міста (ЗОШ № 28)<br />Адреса: м. Рівне, вул. Є. Коновальця, 19<br />Місткість (чол.): 1800';
	const shelter95 = new google.maps.Marker({
		position: { lat: 50.64239994396275, lng: 26.261788024518548 },
		icon: nuclearWeapon,
		title: 'Вол. Дивізії, 13',
		map: map,
	});
	const content95 = 'Балансоутримувач: Управління освіти міста (Дошкільний навчальний заклад №57)<br />Адреса: м. Рівне, вул. Вол. Дивізії, 13<br />Місткість (чол.): 720';
	const shelter96 = new google.maps.Marker({
		position: { lat: 50.64475829363221, lng: 26.264694123473426 },
		icon: nuclearWeapon,
		title: 'Будівельників, 7',
		map: map,
	});
	const content96 = 'Балансоутримувач: ТзОВ `Рівнеагроспецмонтаж`<br />Адреса: м. Рівне, вул. Будівельників, 7<br />Місткість (чол.): 120';
	const shelter97 = new google.maps.Marker({
		position: { lat: 50.630933971867805, lng: 26.25077944045639 },
		icon: nuclearWeapon,
		title: 'Кн. Володимира, 71',
		map: map,
	});
	const content97 = 'Балансоутримувач: ПАТ `Рівнеобленерго`<br />Адреса: м. Рівне, вул. Кн. Володимира, 71<br />Місткість (чол.): 300';
	const shelter98 = new google.maps.Marker({
		position: { lat: 50.637951994640126, lng: 26.243900839389738 },
		icon: nuclearWeapon,
		title: 'Кн. Володимира, 112а',
		map: map,
	});
	const content98 = 'Балансоутримувач: Державна інспекція сільського господарства у Рівненській області<br />Адреса: м. Рівне, вул. Кн. Володимира, 112а<br />Місткість (чол.): 150';
	const shelter99 = new google.maps.Marker({
		position: { lat: 50.639969861332006, lng: 26.24366263920238 },
		icon: bombsWeapon,
		title: 'Кн. Володимира, 112а',
		map: map,
	});
	const content99 = 'Балансоутримувач: ПАТ `Рівнеголовпостач`<br />Адреса: м. Рівне, вул. Кн. Володимира, 112а<br />Місткість (чол.): 150';
	const shelter100 = new google.maps.Marker({
		position: { lat: 50.64026155254755, lng: 26.243183531436244 },
		icon: bombsWeapon,
		title: 'Кн. Володимира, 82а',
		map: map,
	});
	const content100 = 'Балансоутримувач: Регіональне відділення ФДМУ по Рівненській області<br />Адреса: м. Рівне, вул. Кн. Володимира, 82а<br />Місткість (чол.): 50';
	const shelter101 = new google.maps.Marker({
		position: { lat: 50.6275199312823, lng: 26.242380954476292 },
		icon: nuclearWeapon,
		title: 'Кіквідзе, 24',
		map: map,
	});
	const content101 = 'Балансоутримувач: ЖКП `Сонячне`<br />Адреса: м. Рівне, вул. Кіквідзе, 24<br />Місткість (чол.): 100';
	const shelter102 = new google.maps.Marker({
		position: { lat: 50.6293427864154, lng: 26.235775568830817 },
		icon: nuclearWeapon,
		title: 'Біла, 16',
		map: map,
	});
	const content102 = 'Балансоутримувач: ТзОВ `Високовольтний союз - РЗВА`<br />Адреса: м. Рівне, вул. Біла, 16<br />Місткість (чол.): 500';
	const shelter103 = new google.maps.Marker({
		position: { lat: 50.6350426898251, lng: 26.23800100478918 },
		icon: bombsWeapon,
		title: 'Н. Хасевича, 39',
		map: map,
	});
	const content103 = 'Балансоутримувач: ВП `Рівненська дирекція залізничних перевезень` ДТГО `Львівська залізниця`<br />Адреса: м. Рівне, вул. Н. Хасевича, 39<br />Місткість (чол.): 50';
	const shelter104 = new google.maps.Marker({
		position: { lat: 50.63493509181094, lng: 26.23353591284651 },
		icon: bombsWeapon,
		title: 'Біла, 35',
		map: map,
	});
	const content104 = 'Балансоутримувач: Регіональне відділення ФДМУ по Рівненській області<br />Адреса: м. Рівне, вул. Біла, 35<br />Місткість (чол.): 200';
	const shelter105 = new google.maps.Marker({
		position: { lat: 50.63726958971394, lng: 26.232812805782096 },
		icon: bombsWeapon,
		title: 'Біла, 53',
		map: map,
	});
	const content105 = 'Балансоутримувач: Департамент соціального захисту населення ОДА<br />Адреса: м. Рівне, вул. Біла, 53<br />Місткість (чол.): 150';
	const shelter106 = new google.maps.Marker({
		position: { lat: 50.64192040849191, lng: 26.229032716588307 },
		icon: bombsWeapon,
		title: 'Млинівська, 11',
		map: map,
	});
	const content106 = 'Балансоутримувач: База виробничого обслуговування `Рівне` філії `Магістральні нафтопроводи Дружба`<br />Адреса: м. Рівне, вул. Млинівська, 11<br />Місткість (чол.): 100';
	const shelter107 = new google.maps.Marker({
		position: { lat: 50.64461398509671, lng: 26.235189057263778 },
		icon: bombsWeapon,
		title: 'Млинівська, 2',
		map: map,
	});
	const content107 = 'Балансоутримувач: Професійний ліцей<br />Адреса: м. Рівне, вул. Млинівська, 2<br />Місткість (чол.): 1200';
	const shelter108 = new google.maps.Marker({
		position: { lat: 50.64539947415814, lng: 26.233402631541924 },
		icon: nuclearWeapon,
		title: 'пров. Робітничий, 4',
		map: map,
	});
	const content108 = 'Балансоутримувач: ЖКП `Сонячне`<br />Адреса: м. Рівне, пров. Робітничий, 4<br />Місткість (чол.): 800';
	const shelter109 = new google.maps.Marker({
		position: { lat: 50.64846002114324, lng: 26.229674717709074 },
		icon: bombsWeapon,
		title: 'пров. Робітничий, 5',
		map: map,
	});
	const content109 = 'Балансоутримувач: Управління комунальною власністю міста<br />Адреса: м. Рівне, провулок Робітничий, 5<br />Місткість (чол.): 300';
	const shelter110 = new google.maps.Marker({
		position: { lat: 50.62510918949605, lng: 26.235242227073922 },
		icon: nuclearWeapon,
		title: 'П. Дорошенка, 55а',
		map: map,
	});
	const content110 = 'Балансоутримувач: КП `Міськсвітло`<br />Адреса: м. Рівне, вул. П. Дорошенка, 55а<br />Місткість (чол.): 100';
	const shelter111 = new google.maps.Marker({
		position: { lat: 50.620508415098065, lng: 26.234090995002234 },
		icon: bombsWeapon,
		title: 'Соборна, 185',
		map: map,
	});
	const content111 = 'Балансоутримувач: ЖКП `Західне`<br />Адреса: м. Рівне, вул. Соборна, 185<br />Місткість (чол.): 100';
	const shelter112 = new google.maps.Marker({
		position: { lat: 50.62058027957807, lng: 26.233604600651205 },
		icon: nuclearWeapon,
		title: 'Соборна, 187',
		map: map,
	});
	const content112 = 'Балансоутримувач: ТДВ `Рівнефармація`<br />Адреса: м. Рівне, вул. Соборна, 187<br />Місткість (чол.): 30';
	const shelter113 = new google.maps.Marker({
		position: { lat: 50.619498073430975, lng: 26.232831700038624 },
		icon: nuclearWeapon,
		title: 'С. Ковалевської, 17',
		map: map,
	});
	const content113 = 'Балансоутримувач: Управління освіти міста (гуманітарна гімназія)<br />Адреса: м. Рівне, вул. С. Ковалевської, 17<br />Місткість (чол.): 1300';
	const shelter114 = new google.maps.Marker({
		position: { lat: 50.620943417384055, lng: 26.231469201939497 },
		icon: bombsWeapon,
		title: 'Соборна, 195',
		map: map,
	});
	const content114 = 'Балансоутримувач: Рівненська районна рада<br />Адреса: м. Рівне, вул. Соборна, 195<br />Місткість (чол.): 100';
	const shelter115 = new google.maps.Marker({
		position: { lat: 50.621229890759636, lng: 26.228386077951463 },
		icon: nuclearWeapon,
		title: 'Коперніка, 14',
		map: map,
	});
	const content115 = 'Балансоутримувач: ОСББ «Газда»<br />Адреса: м. Рівне, вул. Коперніка, 14<br />Місткість (чол.): 100';
	const shelter116 = new google.maps.Marker({
		position: { lat: 50.619061293858636, lng: 26.22914176824563 },
		icon: bombsWeapon,
		title: 'Яворницького, 34',
		map: map,
	});
	const content116 = 'Балансоутримувач: Управління Державного казначейства в м. Рівне<br />Адреса: м. Рівне, вул. Яворницького, 34<br />Місткість (чол.): 100';
	const shelter117 = new google.maps.Marker({
		position: { lat: 50.61911102713917, lng: 26.22668478500253 },
		icon: bombsWeapon,
		title: 'П. Могили, 28',
		map: map,
	});
	const content117 = 'Балансоутримувач: Рівненський інститут слов`янознавства<br />Адреса: м. Рівне, вул. П. Могили, 28<br />Місткість (чол.): 300';
	const shelter118 = new google.maps.Marker({
		position: { lat: 50.62014040417128, lng: 26.225200293383097 },
		icon: nuclearWeapon,
		title: 'Дубенська, 35',
		map: map,
	});
	const content118 = 'Балансоутримувач: Рівненський державний аграрний коледж<br />Адреса: м. Рівне, вул. Дубенська, 35<br />Місткість (чол.): 400';
	const shelter119 = new google.maps.Marker({
		position: { lat: 50.61648774061667, lng: 26.22428059027622 },
		icon: bombsWeapon,
		title: 'Чернишова, 7',
		map: map,
	});
	const content119 = 'Балансоутримувач: Регіональне відділення ФДМУ по Рівненській області<br />Адреса: м. Рівне, вул. Чернишова, 7<br />Місткість (чол.): 200';
	const shelter120 = new google.maps.Marker({
		position: { lat: 50.61068255832231, lng: 26.228724819850342 },
		icon: bombsWeapon,
		title: 'Дворецька, 106',
		map: map,
	});
	const content120 = 'Балансоутримувач: Рівненський МВ УМВСУ<br />Адреса: м. Рівне, вул. Дворецька, 106<br />Місткість (чол.): 300';
	const shelter121 = new google.maps.Marker({
		position: { lat: 50.61142408439908, lng: 26.214602741909015 },
		icon: nuclearWeapon,
		title: 'Дубенська, 133',
		map: map,
	});
	const content121 = 'Балансоутримувач: Управління освіти міста (ЗОШ № 27)<br />Адреса: м. Рівне, вул. Дубенська, 133<br />Місткість (чол.): 2025';
	const shelter122 = new google.maps.Marker({
		position: { lat: 50.612956357085324, lng: 26.209654352751578 },
		icon: nuclearWeapon,
		title: 'Дубенська, 46Б',
		map: map,
	});
	const content122 = 'Балансоутримувач: Управління освіти міста (Дошкільний навчальний заклад № 2)<br />Адреса: м. Рівне, вул. Дубенська, 46Б<br />Місткість (чол.): 350';
	const shelter123 = new google.maps.Marker({
		position: { lat: 50.61948974432307, lng: 26.21897075816669 },
		icon: nuclearWeapon,
		title: 'Тув. Добровольців, 8',
		map: map,
	});
	const content123 = 'Балансоутримувач: ТДВ `Рівнефармація`<br />Адреса: м. Рівне, вул. Тув. Добровольців, 8<br />Місткість (чол.): 15';
	const shelter124 = new google.maps.Marker({
		position: { lat: 50.6187628715646, lng: 26.21203475169651 },
		icon: bombsWeapon,
		title: 'Тув. Добровольців, 19',
		map: map,
	});
	const content124 = 'Балансоутримувач: ТзОВ `Украса`<br />Адреса: м. Рівне, вул. Тув. Добровольців, 19<br />Місткість (чол.): 100';
	const shelter125 = new google.maps.Marker({
		position: { lat: 50.618671111398406, lng: 26.206035786895153 },
		icon: bombsWeapon,
		title: 'Макарова, 12',
		map: map,
	});
	const content125 = 'Балансоутримувач: Рівненська регіональна державна лабораторія ветеринарної медицини<br />Адреса: м. Рівне, вул. Макарова, 12<br />Місткість (чол.): 60';
	const shelter126 = new google.maps.Marker({
		position: { lat: 50.62001400826032, lng: 26.210863747622234 },
		icon: bombsWeapon,
		title: 'Боярка, 40',
		map: map,
	});
	const content126 = 'Балансоутримувач: ПрАТ `Рівнеліфт`<br />Адреса: м. Рівне, вул. Боярка, 40<br />Місткість (чол.): 50';
	const shelter127 = new google.maps.Marker({
		position: { lat: 50.62007041538077, lng: 26.20630288538754 },
		icon: bombsWeapon,
		title: 'Макарова, 14',
		map: map,
	});
	const content127 = 'Балансоутримувач: ПАТ `Полісся хліб`<br />Адреса: м. Рівне, вул. Макарова, 14<br />Місткість (чол.): 150';
	const shelter128 = new google.maps.Marker({
		position: { lat: 50.62185848607224, lng: 26.208632214631397 },
		icon: bombsWeapon,
		title: 'Павлюченка, 35',
		map: map,
	});
	const content128 = 'Балансоутримувач: Рівненський цех протезно-ортопедичних виробів Львів, казенного експериментал. під-ва засобів пересування і протезування<br />Адреса: м. Рівне, вул. Павлюченка, 35<br />Місткість (чол.): 50';
	const shelter129 = new google.maps.Marker({
		position: { lat: 50.62304861528863, lng: 26.20859665235276 },
		icon: nuclearWeapon,
		title: 'Павлюченка, 24',
		map: map,
	});
	const content129 = 'Балансоутримувач: Управління освіти міста (ЗОШ № 26)<br />Адреса: м. Рівне, вул. Павлюченка, 24<br />Місткість (чол.): 2000';
	const shelter130 = new google.maps.Marker({
		position: { lat: 50.62761911733853, lng: 26.223847157702725 },
		icon: bombsWeapon,
		title: 'Соборна, 364',
		map: map,
	});
	const content130 = 'Балансоутримувач: ДП `Рівненський автомобільний ремонтний завод`<br />Адреса: м. Рівне, вул. Соборна, 364<br />Місткість (чол.): 250';
	const shelter131 = new google.maps.Marker({
		position: { lat: 50.6328739459660, lng: 26.223456897473557 },
		icon: bombsWeapon,
		title: 'Старицького, 21а',
		map: map,
	});
	const content131 = 'Балансоутримувач: Регіональне відділення ФДМУ по Рівненській області<br />Адреса: м. Рівне, вул. Старицького, 21а<br />Місткість (чол.): 150';
	const shelter132 = new google.maps.Marker({
		position: { lat: 50.634184469621935, lng: 26.21562398326105 },
		icon: nuclearWeapon,
		title: 'Соборна, 404Б',
		map: map,
	});
	const content132 = 'Балансоутримувач: Управління комунальною власністю міста<br />Адреса: м. Рівне, вул. Соборна, 404Б<br />Місткість (чол.): 150';
	const shelter133 = new google.maps.Marker({
		position: { lat: 50.629564231357804, lng: 26.211014274770786 },
		icon: nuclearWeapon,
		title: '6-та Гвардійська, З',
		map: map,
	});
	const content133 = 'Балансоутримувач: Навчально-реабілітаційний центр «Особлива дитина»<br />Адреса: м. Рівне, вул. 6-та Гвардійська, З<br />Місткість (чол.): 350';
	const shelter134 = new google.maps.Marker({
		position: { lat: 50.64457636163949, lng: 26.212894510714555 },
		icon: bombsWeapon,
		title: 'Млинівська, 18',
		map: map,
	});
	const content134 = 'Балансоутримувач: ТзОВ `Регіон`<br />Адреса: м. Рівне, вул. Млинівська, 18<br />Місткість (чол.): 100';
	const shelter135 = new google.maps.Marker({
		position: { lat: 50.64494993776065, lng: 26.208950407816204 },
		icon: bombsWeapon,
		title: 'Млинівська, 20',
		map: map,
	});
	const content135 = 'Балансоутримувач: Гуртово-роздрібне об’єднання ОСС<br />Адреса: м. Рівне, вул. Млинівська, 20<br />Місткість (чол.): 300';
	const shelter136 = new google.maps.Marker({
		position: { lat: 50.646311249368615, lng: 26.20720302050461 },
		icon: nuclearWeapon,
		title: 'Млинівська, 22а',
		map: map,
	});
	const content136 = 'Балансоутримувач: Заготівельно-виробничо- збутовий комбінат ОСС<br />Адреса: м. Рівне, вул. Млинівська, 22а<br />Місткість (чол.): 650';
	const shelter137 = new google.maps.Marker({
		position: { lat: 50.641797498295986, lng: 26.20718789517843 },
		icon: bombsWeapon,
		title: 'Соборна, 444а',
		map: map,
	});
	const content137 = 'Балансоутримувач: Регіональне відділення ФДМУ по Рівненській області<br />Адреса: м. Рівне, вул. Соборна, 444а<br />Місткість (чол.): 100';
	const shelter138 = new google.maps.Marker({
		position: { lat: 50.6413415778079, lng: 26.205120985558278 },
		icon: nuclearWeapon,
		title: 'Соборна, 442Г',
		map: map,
	});
	const content138 = 'Балансоутримувач: ДП `Оптима - 770Р`<br />Адреса: м. Рівне, вул. Соборна, 442Г<br />Місткість (чол.): 150';
	const shelter139 = new google.maps.Marker({
		position: { lat: 50.63827033142394, lng: 26.20211547947437 },
		icon: nuclearWeapon,
		title: 'Кн. Острозького, 14',
		map: map,
	});
	const content139 = 'Балансоутримувач: ПАТ `Рівнеазот`<br />Адреса: м. Рівне, вул. Кн. Острозького, 14<br />Місткість (чол.): 150';
	const shelter140 = new google.maps.Marker({
		position: { lat: 50.63726975834314, lng: 26.19940952535756 },
		icon: nuclearWeapon,
		title: 'Макарова, 40а',
		map: map,
	});
	const content140 = 'Балансоутримувач: Управління освіти міста (Дошкільний навчальний заклад № 39)<br />Адреса: м. Рівне, вул. Макарова, 40а<br />Місткість (чол.): 215';
	const shelter141 = new google.maps.Marker({
		position: { lat: 50.638966920365036, lng: 26.200238286208116 },
		icon: nuclearWeapon,
		title: 'Корольова, 4',
		map: map,
	});
	const content141 = 'Балансоутримувач: Управління освіти міста (Дошкільний навчальний заклад № 33)<br />Адреса: м. Рівне, вул. Корольова, 4<br />Місткість (чол.): 215';
	const shelter142 = new google.maps.Marker({
		position: { lat: 50.63863762506961, lng: 26.19590476562113 },
		icon: nuclearWeapon,
		title: 'Макарова, 44',
		map: map,
	});
	const content142 = 'Балансоутримувач: ОСББ `Моя оселя`, (гурт.)<br />Адреса: м. Рівне, вул. Макарова, 44<br />Місткість (чол.): 600';
	const shelter143 = new google.maps.Marker({
		position: { lat: 50.64128458743595, lng: 26.19797167521157 },
		icon: nuclearWeapon,
		title: 'Макарова, 48',
		map: map,
	});
	const content143 = 'Балансоутримувач: Управління освіти міста (ЗОШ № 19)<br />Адреса: м. Рівне, вул. Макарова, 48<br />Місткість (чол.): 2000';

	// const infowindow = new google.maps.InfoWindow({
  //   content: content7,
  //   ariaLabel: "контент",
  // });
  // const marker = new google.maps.Marker({
  //   position: { lat: 50.61176, lng: 26.32025 },
  //   map,
  //   title: "content",
  // });

  // marker.addListener("click", () => {
  //   infowindow.open({
  //     anchor: marker,
  //     map,
  //   });
  // });

	// shelter4.addListener("click", () => {
  //   infowindow.open({
  //     anchor: shelter4,
  //     map,
  //   });
	// });
}