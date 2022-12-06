function initMap() {
	var opt = {
		center: { lat: 50.61980292268567, lng: 26.251496156650585 },
		zoom: 13,
		mapId: "b061204d7bd99792",
	}

	var map = new google.maps.Map(document.getElementById("map"), opt);

	let arreyCords = [
		[
			[
				{ lat: 50.63613805807085, lng: 26.216213785759717 },
				{ lat: 50.635298787456215, lng: 26.21535938804161 },
				{ lat: 50.635297147606316, lng: 26.212737842646572 },
				{ lat: 50.644293693689775, lng: 26.200567675348896 },
				{ lat: 50.64426150636462, lng: 26.21021967000816 },
				{ lat: 50.64460892561582, lng: 26.210205858243317 },
				{ lat: 50.64461184509444, lng: 26.210850407269387 },
				{ lat: 50.644487492929045, lng: 26.212739144096666 },
				{ lat: 50.644672362857534, lng: 26.21274206557718 },
				{ lat: 50.644689676829465, lng: 26.213091893008947 },
				{ lat: 50.64419448592153, lng: 26.213865755949215 },
				{ lat: 50.643011224141425, lng: 26.213689293713102 },
				{ lat: 50.63613805807085, lng: 26.216213785759717 },
			],
			"#FF0000"
		],
		[
			[
				{ lat: 50.63422866536523, lng: 26.206743616191876 },
				{ lat: 50.634247633668764, lng: 26.20274778620236 },
				{ lat: 50.633872419669125, lng: 26.200161218265166 },
				{ lat: 50.630207903861084, lng: 26.201630033131828 },
				{ lat: 50.63071946084701, lng: 26.205599933172397 },
				{ lat: 50.63037591351893, lng: 26.20571557010445 },
				{ lat: 50.63044609375658, lng: 26.20625421659193 },
				{ lat: 50.6308435491089, lng: 26.206106784171425 },
				{ lat: 50.631342840918045, lng: 26.209194430564672 },
				{ lat: 50.6318501182763, lng: 26.20904149258038 },
				{ lat: 50.63183232740843, lng: 26.20853977993369 },
				{ lat: 50.63214164720186, lng: 26.208397916332622 },
				{ lat: 50.632659050306636, lng: 26.211962239309415 },
				{ lat: 50.63324955776106, lng: 26.211784909808088 },
				{ lat: 50.6327771524105, lng: 26.20815852151067 },
				{ lat: 50.63340339077939, lng: 26.207949946656612 },
				{ lat: 50.6339382090298, lng: 26.21148821130752 },
				{ lat: 50.6348906493452, lng: 26.211208348697127 },
				{ lat: 50.63422866536523, lng: 26.206743616191876 },
			],
			"#FF0000"
		],
		[
			[
				{ lat: 50.642148571351385, lng: 26.20145394475747 },
				{ lat: 50.64249498818973, lng: 26.202138001747056 },
				{ lat: 50.64340002913954, lng: 26.200937211060307 },
				{ lat: 50.64306610226658, lng: 26.200169492424514 },
				{ lat: 50.642148571351385, lng: 26.20145394475747 },
			],
			"#FF0000"
		],
		[
			[
				{ lat: 50.63652059800477, lng: 26.210678237870844 },
				{ lat: 50.633718578096854, lng: 26.21452018743175 },
				{ lat: 50.6303429447104, lng: 26.21441898593142 },
				{ lat: 50.630499622183535, lng: 26.21277913158722 },
				{ lat: 50.63128760893939, lng: 26.20932305791572 },
				{ lat: 50.63189621949649, lng: 26.20914249968032 },
				{ lat: 50.6318286487518, lng: 26.20855659587167 },
				{ lat: 50.63209470806037, lng: 26.208483357895414 },
				{ lat: 50.63261415284673, lng: 26.212032070744797 },
				{ lat: 50.63331940611197, lng: 26.211779066833735 },
				{ lat: 50.63284642306717, lng: 26.20829027596493 },
				{ lat: 50.633390864952275, lng: 26.208079360669693 },
				{ lat: 50.63392941398288, lng: 26.211562191191017 },
				{ lat: 50.63495537594897, lng: 26.211257306947548 },
				{ lat: 50.63443978566802, lng: 26.207633605212962 },
				{ lat: 50.63555139451216, lng: 26.207207293033097 },
			],
			"#FF0000"
		],
		[
			[
				{ lat: 50.635588564967875, lng: 26.199583794566994 },
				{ lat: 50.63403207756591, lng: 26.198611342347284 },
				{ lat: 50.63528339072463, lng: 26.19738330895431 },
				{ lat: 50.63593442666917, lng: 26.19888451488828 },
				{ lat: 50.640883758165316, lng: 26.192172263199765 },
				{ lat: 50.641930953273054, lng: 26.19440025810282 },
				{ lat: 50.64306752858004, lng: 26.193107300905826 },
				{ lat: 50.64405712600293, lng: 26.195242453114947 },
				{ lat: 50.643043065156235, lng: 26.196527067017655 },
				{ lat: 50.644080059771, lng: 26.198459268254975 },
				{ lat: 50.63891165286823, lng: 26.205774960587163 },
			],
			"#FF0000"
		],
		[
			[
				{ lat: 50.61912968890845, lng: 26.205574127014824 },
				{ lat: 50.62124572644756,  lng: 26.219276641023086 },
				{ lat: 50.61804651181162,  lng: 26.22054461397347 },
				{ lat: 50.61809311358452,  lng: 26.220893035833143 },
				{ lat: 50.626944521890586,  lng: 26.217922610190442 },
				{ lat: 50.628015187377436,  lng: 26.217302497511827 },
				{ lat: 50.62843051175444,  lng: 26.2168688488124 },
				{ lat: 50.63032181717893,  lng: 26.21415508880315 },
				{ lat: 50.63047134158413,  lng: 26.212515923648017 },
				{ lat: 50.63114717618948,  lng: 26.209982952772833 },
				{ lat: 50.631132826960254,  lng: 26.208687572369634 },
				{ lat: 50.6307411232479, lng: 26.206257588497124 },
				{ lat: 50.630399752070886, lng: 26.206323884840216 },
				{ lat: 50.63033543548465, lng: 26.20568042033369 },
				{ lat: 50.63063970163532, lng: 26.205543927862603 },
				{ lat: 50.63010203434898,  lng: 26.201694367031866 },
				{ lat: 50.61912968890845, lng: 26.205574127014824 },
			],
			"#FF0000"
		],
		[
			[
				{ lat: 50.61893136166339,  lng: 26.205626568417728 },
				{ lat: 50.612188065353536,  lng: 26.207925975321363 },
				{ lat: 50.61168977644311,  lng: 26.208370361435144 },
				{ lat: 50.61160433237462,  lng: 26.20897627764084 },
				{ lat: 50.61174370250675,  lng: 26.210058217237567 },
				{ lat: 50.61217363005046,  lng: 26.210941112523848 },
				{ lat: 50.6136879822405,  lng: 26.213268159810585 },
				{ lat: 50.617868876365556,  lng: 26.220423348756395 },
				{ lat: 50.621043893189984,  lng: 26.21922596832497 },
			],
			"#FF0000"
		],


		// один блок (разом)
		[
			[
				{ lat: 50.62026821558733, lng: 26.26061329667358 },
				{ lat: 50.62002768204831, lng: 26.260184750496027 },
				{ lat: 50.6191124744292, lng: 26.260920289395404 },
				{ lat: 50.619243196401996, lng: 26.261262216087086 },
				{ lat: 50.62035443345905, lng: 26.260747715724552 },
				{ lat: 50.62107488522127, lng: 26.262384746419304 },
				{ lat: 50.621160989588006, lng: 26.262891895341365 },
				{ lat: 50.623148129547666, lng: 26.262911956326498 },
				{ lat: 50.62341251160226, lng: 26.262385557192577 },
				{ lat: 50.62282808612441, lng: 26.261924957950395 },
				{ lat: 50.6224941254474, lng: 26.26090871517796 },
				{ lat: 50.62282014338262, lng: 26.259464733813537 },
				{ lat: 50.62282444438433, lng: 26.256624167323608 },
				{ lat: 50.62245455680011, lng: 26.256502138214252 },
				{ lat: 50.622998148096244, lng: 26.25477032497306 },
				{ lat: 50.622877018260006, lng: 26.25413061284978 },
				{ lat: 50.6224228259623, lng: 26.253916915838964 },
				{ lat: 50.62195719399524, lng: 26.256511091072053 },
				{ lat: 50.6221289093142, lng: 26.257009223402076 },
				{ lat: 50.6221334686231, lng: 26.257519460823104 },
				{ lat: 50.62145269759696, lng: 26.257790974958045 },
				{ lat: 50.62135402482635, lng: 26.257474904143077 },
				{ lat: 50.619787964749534, lng: 26.257976603849375 },
				{ lat: 50.619745578824684, lng: 26.259718351646196 },
				{ lat: 50.61999217264023, lng: 26.2600479401692 },
				{ lat: 50.62034134727291, lng: 26.259886255232722 },
				{ lat: 50.620512974534776, lng: 26.260399293968547 },
			],"#FF0000",
		],
		[
			[
				{ lat: 50.62527455728793, lng: 26.256980290698735 },
				{ lat: 50.625725979393216, lng: 26.258390450693852 },
				{ lat: 50.6251231647578, lng: 26.25892414201508 },
				{ lat: 50.62463595276147, lng: 26.257470592481653 },
				{ lat: 50.62527455728793, lng: 26.256980290698735 },
			],
			"#FF0000",
		],
		
		[
			[
				{ lat: 50.616283470753686, lng: 26.264113519340533 },
				{ lat: 50.61740433704816, lng: 26.264462709457835 },
				{ lat: 50.61827542115384, lng: 26.264492309331875 },
				{ lat: 50.61878606185786, lng: 26.26430004749765 },
				{ lat: 50.61836620212782, lng: 26.263508644149766 },
				{ lat: 50.61876052995528, lng: 26.26158602585095 },
				{ lat: 50.61839104799798, lng: 26.26043420819279 },
				{ lat: 50.617980337971446, lng: 26.260287911065074 },
				{ lat: 50.619085183560756, lng: 26.252264185262177 },
				{ lat: 50.61807409043149, lng: 26.252301121881395 },
				{ lat: 50.618044979619526, lng: 26.251657876764575 },
				{ lat: 50.61762893358017, lng: 26.251760510784926 },
				{ lat: 50.61769179793401, lng: 26.252663650610867 },
				{ lat: 50.61783660199737, lng: 26.25268845722634 },
				{ lat: 50.61783660199737, lng: 26.253244125445967 },
				{ lat: 50.617428677541746, lng: 26.253254048092742 },
				{ lat: 50.617293939291045, lng: 26.253140005774952 },
				{ lat: 50.61638837298749, lng: 26.253820927264492 },
				{ lat: 50.615779442821484, lng: 26.255115797017883 },
				{ lat: 50.61541783858686, lng: 26.255657883871763 },
				{ lat: 50.61430213968548, lng: 26.258104224531014 },
				{ lat: 50.61402062675708, lng: 26.263061544388258 },
				{ lat: 50.61627679585561, lng: 26.26366117011436 },
			],
			"#FF0000"
		],


		// ------
		// один блок 
		[
			[
				{ lat: 50.619779366389615, lng: 26.247983998590925 },
				{ lat: 50.62013130882172, lng: 26.248014573191764 },
				{ lat: 50.620171491057896, lng: 26.247525379578395 },
				{ lat: 50.61985769300783,  lng: 26.24749499420442 },
			],
			"#FF0000"
		], 
		[
			[
				{ lat: 50.62161408401661, lng: 26.247347241323475 },
				{ lat: 50.62072655929663, lng: 26.24740715315308 },
				{ lat: 50.620808847229895, lng: 26.246737821638504 },
				{ lat: 50.621352294836186,  lng: 26.246720340610356 },
				{ lat: 50.621744164740605, lng: 26.244360402506874 },
				{ lat: 50.62192686731781, lng: 26.244112573522642 },
				{ lat: 50.62139325530281, lng: 26.24351551754775 },
				{ lat: 50.62135766328781, lng: 26.24302113894513 },
				{ lat: 50.621546745558796, lng: 26.242807258840458 },
				{ lat: 50.62176431570632, lng: 26.24280194168709 },
				{ lat: 50.62194672292102, lng: 26.24318061465931 },
				{ lat: 50.621873662116634, lng: 26.2435870587848 },
				{ lat: 50.62207440462779, lng: 26.243495371239586 },
				{ lat: 50.62251139986222, lng: 26.242778338909847 },
				{ lat: 50.62261545458757, lng: 26.242494374511296 },
				{ lat: 50.622414661531494, lng: 26.242247719135737 },
				{ lat: 50.62270027790587, lng: 26.241363717620867 },
				{ lat: 50.623215895546565, lng: 26.24181288615481 },
				{ lat: 50.622672778360645, lng: 26.24321994338251 },
				{ lat: 50.622518674757515, lng: 26.243062945413495 },
				{ lat: 50.6222128899322, lng: 26.243701417407014 },
				{ lat: 50.62245389563505, lng: 26.244007536274637 },
				{ lat: 50.62202821071629, lng: 26.24482886978912 },
				{ lat: 50.62181229777309, lng: 26.244802102788917 },
				{ lat: 50.62173709190839, lng: 26.245398624507782 },
				{ lat: 50.62190259114287, lng: 26.24548250609409 },
				{ lat: 50.62161408401661, lng: 26.247347241323475 },
			],
			"#FF0000"
		],
		[
			[
				{ lat: 50.62014300882493, lng: 26.248844171545205 },
				{ lat: 50.620087084980725, lng: 26.24938465633361 },
				{ lat: 50.61962476403716, lng: 26.24928308260676 },
				{ lat: 50.61959674443998, lng: 26.2497291237551 },
				{ lat: 50.61992747953035, lng: 26.249816252233163 },
				{ lat: 50.619812870701296, lng: 26.250587115747308 },
				{ lat: 50.620218894719045, lng: 26.25070304900821 },
				{ lat: 50.62031010253074, lng: 26.250044548086283 },
				{ lat: 50.620968071562345, lng: 26.25027625705127 },
				{ lat: 50.62086604724019, lng: 26.251110155953214 },
				{ lat: 50.62021064074352, lng: 26.250902251486366 },
				{ lat: 50.62005400136274, lng: 26.25201324097913 },
				{ lat: 50.62083907062739, lng: 26.25229920898632 },
				{ lat: 50.6210737564845, lng: 26.251113613834104 },
				{ lat: 50.62166061347134, lng: 26.251329442197658 },
				{ lat: 50.621804636644725, lng: 26.250802460516987 },
				{ lat: 50.622301547160156, lng: 26.250956246497548 },
				{ lat: 50.62222667056918, lng: 26.251503438474902 },
				{ lat: 50.623156389974646, lng: 26.25184014599132 },
				{ lat: 50.62349956997089, lng: 26.250990099649993 },
				{ lat: 50.62396728188044, lng: 26.25140251105947 },
				{ lat: 50.624198428731816, lng: 26.25078737795001 },
				{ lat: 50.62435180235653, lng: 26.250849767767377 },
				{ lat: 50.62446312161379, lng: 26.25053781868409 },
				{ lat: 50.62522813807472, lng: 26.25122296465658 },
				{ lat: 50.625081735057535, lng: 26.251620895302285 },
				{ lat: 50.6246941523797, lng: 26.25144404172568 },
				{ lat: 50.62446024516396, lng: 26.252717442832743 },
				{ lat: 50.62496226818491, lng: 26.253002977406894 },
				{ lat: 50.624803553582915, lng: 26.253704576650584 },
				{ lat: 50.62496226818397, lng: 26.253805193596722 },
				{ lat: 50.62487428515608, lng: 26.25414783508899 },
				{ lat: 50.62421526978392, lng: 26.253826948609913 },
				{ lat: 50.62409450680468, lng: 26.254713465486724 },
				{ lat: 50.62433085691637, lng: 26.254939173771312 },
				{ lat: 50.62426755418329, lng: 26.255311112784874 },
				{ lat: 50.624762884116244, lng: 26.255320186602003 },
				{ lat: 50.6254455323226, lng: 26.252046631524863 },
				{ lat: 50.62663565962978, lng: 26.25277040521151 },
				{ lat: 50.627656481218125, lng: 26.250683022795187 },
				{ lat: 50.6274121185551, lng: 26.25003044141595 },
				{ lat: 50.626487013455, lng: 26.250103689526856 },
				{ lat: 50.625029423844246, lng: 26.248828659034622 },
				{ lat: 50.62534502028977, lng: 26.247960341854228 },
				{ lat: 50.62467547861202, lng: 26.247315464183515 },
				{ lat: 50.62376941068999, lng: 26.249426983845055 },
				{ lat: 50.62329607084094, lng: 26.249032490656965 },
				{ lat: 50.623154612035265, lng: 26.249315496644016 },
				{ lat: 50.622610535735305, lng: 26.248903851578188 },
				{ lat: 50.62286081160811, lng: 26.247900466719383 },
				{ lat: 50.62235481769705, lng: 26.24740306225729 },
				{ lat: 50.62195728674472, lng: 26.24848423141831 },
				{ lat: 50.622066080646974, lng: 26.248745967012184 },
				{ lat: 50.62192865672861, lng: 26.249061854797898 },
				{ lat: 50.62165236850779, lng: 26.248880044461096 },
				{ lat: 50.62149799335106, lng: 26.249396872083135 },
				{ lat: 50.620961662802145, lng: 26.24919256041852 },
				{ lat: 50.62074174363614, lng: 26.249297405308624 },
				{ lat: 50.62070101775178, lng: 26.248972172180142 },
				{ lat: 50.62014300882493, lng: 26.248844171545205 },
			],
			"#FF0000"
		],

		// Один блок
		[
			[
				{ lat: 50.634051216735074, lng: 26.244209344839884 },
				{ lat: 50.634426515850606, lng: 26.244003042000333 },
				{ lat: 50.63429997855258, lng: 26.243511089075252 },
				{ lat: 50.634016706321134, lng: 26.243910092369326 },
				{ lat: 50.634051216735074, lng: 26.244209344839884 },
			],
			"#FF0000"
		],
		[
			[
				{ lat: 50.63490212344766, lng: 26.244061346896444 },
				{ lat: 50.635444204898334, lng: 26.245666853996344 },
				{ lat: 50.63553708426909, lng: 26.24650022667397 },
				{ lat: 50.63565022798189, lng: 26.24642567576351 },
				{ lat: 50.63582078739238, lng: 26.245712117049123 },
				{ lat: 50.63565216900184, lng: 26.244223669609024 },
				{ lat: 50.63560304975568, lng: 26.243691658678994 },
				{ lat: 50.63490212344766, lng: 26.244061346896444 },
			],
			"#FF0000"
		],
		[
			[
				{ lat: 50.63582582298362, lng: 26.241152136095277 },
				{ lat: 50.63583554966896, lng: 26.241650549500527 },
				{ lat: 50.636025219630675, lng: 26.24163776966963 },
				{ lat: 50.636021977415524, lng: 26.241141912230553 },
				{ lat: 50.63582582298362, lng: 26.241152136095277 },
			],
			"#FF0000"
		],
		[
			[
				{ lat: 50.640324685569595, lng: 26.243647554715857 },
				{ lat: 50.641479939492676, lng: 26.244931886033257 },
				{ lat: 50.64165613400034, lng: 26.244360489652404 },
				{ lat: 50.64063386422263, lng: 26.2430263577329 },
			],
			"#FF0000"
		],
		[
			[
				{ lat: 50.64316228717212, lng: 26.239253278611358 },
				{ lat: 50.642151909972, lng: 26.23925860223138 },
				{ lat: 50.642110639226125, lng: 26.2390308251251 },
				{ lat: 50.6419709533557, lng: 26.23905084948609 },
				{ lat: 50.64176172131242, lng: 26.23948659905953},
				{ lat: 50.64130865514682, lng: 26.239499841293128 },
				{ lat: 50.640891087210925, lng: 26.24061223967387 },
				{ lat: 50.64172362582958, lng: 26.241626485244296 },
				{ lat: 50.641954451688456, lng: 26.240436382564162 },
				{ lat: 50.644008492494876, lng: 26.241610126436537 },
				{ lat: 50.64501463209935, lng: 26.241230947601277 },
				{ lat: 50.645726304914994, lng: 26.241309471264646 },
				{ lat: 50.64684588873949, lng: 26.242194865002563 },
				{ lat: 50.64743029432138, lng: 26.24216379855546 },
				{ lat: 50.64735478165238, lng: 26.240651898138598 },
				{ lat: 50.64857938524553, lng: 26.240258389807114 },
				{ lat: 50.64939914062476, lng: 26.23973291969546 },
				{ lat: 50.64924891910482, lng: 26.238618010755903 },
				{ lat: 50.64665777565464, lng: 26.239350387990683 },
				{ lat: 50.64620985485352, lng: 26.23971588649241 },
				{ lat: 50.644374076450916, lng: 26.23931011772955 },
				{ lat: 50.64442987713494, lng: 26.238515720589618 },
				{ lat: 50.64435542963483, lng: 26.23776587088538 },
				{ lat: 50.64414409415308, lng: 26.23786054887834 },
				{ lat: 50.644223345070124, lng: 26.238273344927638 },
				{ lat: 50.64331795542267, lng: 26.238564953145957 },
			],
			"#FF0000"
		],
		[
			[
				{ lat: 50.637188486975525, lng: 26.233141932399434 },
				{ lat: 50.63737237936579, lng: 26.233120340600518 },
				{ lat: 50.63733520968534, lng: 26.2324787557184 },
				{ lat: 50.637166967606234, lng: 26.23250651660272 },
				{ lat: 50.637188486975525, lng: 26.233141932399434 },
			],
			"#FF0000"
		],
		[
			[
				{ lat: 50.63600866477997, lng: 26.23032993847119 },
				{ lat: 50.63638900704315, lng: 26.230186265167518 },
				{ lat: 50.63635335008672, lng: 26.229786478583392 },
				{ lat: 50.63596904561722, lng: 26.229936398552436 },
				{ lat: 50.63600866477997, lng: 26.23032993847119 },
			],
			"#FF0000"
		],
		[
			[
				{ lat: 50.642777098993996, lng: 26.244442198804116 },
				{ lat: 50.64299785221123, lng: 26.244774115532053 },
				{ lat: 50.64289175389516, lng: 26.244938724641028 },
				{ lat: 50.6426675776331, lng: 26.24463649152291 },
				{ lat: 50.642777098993996, lng: 26.244442198804116 },
			],
			"#FF0000"
		],
		[
			[
				{ lat: 50.64097041286228, lng: 26.237353284489327 },
				{ lat: 50.64080200143265, lng: 26.23740784998949 },
				{ lat: 50.64081425453851, lng: 26.236920337007636 },
				{ lat: 50.64099312492095, lng: 26.236814568088196 },
				{ lat: 50.64113884815913, lng: 26.23597736268277 },
				{ lat: 50.640622797415844, lng: 26.235681931894636 },
				{ lat: 50.640744414976886, lng: 26.235324305152186 },
				{ lat: 50.6411158396339, lng: 26.235619735939423 },
				{ lat: 50.64167657219855, lng: 26.235671553457248 },
				{ lat: 50.64180475342897, lng: 26.23637899177539 },
				{ lat: 50.64329785433517, lng: 26.235740056432324 },
				{ lat: 50.643346694073976, lng: 26.236186752429774 },
				{ lat: 50.64265804902983, lng: 26.236440907051364 },
				{ lat: 50.642728053596365, lng: 26.236964619604056 },
				{ lat: 50.64257664823995, lng: 26.23702880006394 },
				{ lat: 50.64249687531959, lng: 26.236461444796806 },
				{ lat: 50.64109174598523, lng: 26.236972619541497 },
				{ lat: 50.64097041286228, lng: 26.237353284489327 },
			],
			"#FF0000"
		],
		[
			[
				{ lat: 50.651233829317874, lng: 26.22924079064118 },
				{ lat: 50.64603855320277, lng: 26.235170355642783 },
				{ lat: 50.64499023612188, lng: 26.235839505315468 },
				{ lat: 50.64489060475548, lng: 26.233800044758322 },
				{ lat: 50.644406378983824, lng: 26.23367098413559 },
				{ lat: 50.644126753387894, lng: 26.232622366586494 },
				{ lat: 50.644443118216984, lng: 26.23241279589721 },
				{ lat: 50.64440671689369, lng: 26.230715559492552 },
				{ lat: 50.64478772739161, lng: 26.230629725096765 },
				{ lat: 50.644811054464604, lng: 26.230090194550158 },
				{ lat: 50.644441707782406, lng: 26.230059539405463 },
				{ lat: 50.644915713844455, lng: 26.22618707462751 },
				{ lat: 50.64651789292566, lng: 26.227014141247412 },
				{ lat: 50.64932197357297, lng: 26.224223288191062 },
			],
			"#FF0000"
		],
		[
			[
				{ lat: 50.65022643279234, lng: 26.251431188524613 },
				{ lat: 50.64915558344387, lng: 26.272335026917574 },
				{ lat: 50.64622005916638, lng: 26.275861058881144 },
				{ lat: 50.64202428644016, lng: 26.268474308462565 },
				{ lat: 50.640862656384435, lng: 26.270150366297546 },
				{ lat: 50.63975878674009, lng: 26.267747806757217 },
				{ lat: 50.64340697590299, lng: 26.26601950577016 },
				{ lat: 50.643900394871366, lng: 26.250717708965404 },
			],
			"#FF0000"
		],
		[
			[
				{ lat: 50.63815271671499, lng: 26.267901320277737 },
				{ lat: 50.641256362485976, lng: 26.26650725936231 },
				{ lat: 50.64128109190806, lng: 26.26614655828629 },
				{ lat: 50.64261027923376, lng: 26.266029574150824 },
				{ lat: 50.64308630461866, lng: 26.264781743429413 },
				{ lat: 50.64312339730246, lng: 26.262919745982934 },
				{ lat: 50.641697426857796, lng: 26.26287557508598 },
				{ lat: 50.64160606740913, lng: 26.263608310900246 },
				{ lat: 50.64095710665384, lng: 26.26357194937394 },
				{ lat: 50.640945119124545, lng: 26.261524647786967 },
				{ lat: 50.641285881300625, lng: 26.261474739963823 },
				{ lat: 50.64124685082868, lng: 26.260933788389792 },
				{ lat: 50.64086287848798, lng: 26.260837860348616 },
				{ lat: 50.64086287848798, lng: 26.26010531804748 },
				{ lat: 50.64025038470254, lng: 26.26015378422908 },
				{ lat: 50.64020135916835, lng: 26.26049392376227 },
				{ lat: 50.63934323967996, lng: 26.260460009027835 },
				{ lat: 50.63929342745699, lng: 26.26361640509958 },
				{ lat: 50.63919535816407, lng: 26.264383196520164 },
				{ lat: 50.63887279296327, lng: 26.265681990065257 },
				// { lat: 50.638829798514365, lng: 26.266177917243812 },
				{ lat: 50.639568892503114, lng: 26.26560481426818 },
				{ lat: 50.63953385944782, lng: 26.2670460766942 },
				{ lat: 50.63880452902907, lng: 26.267349896824815 },
				{ lat: 50.63867235658817, lng: 26.266506231012194 },
				{ lat: 50.637975763889074, lng: 26.266789596164994 },
				{ lat: 50.63815271671499, lng: 26.267901320277737 },
			],
			"#FF0000"
		],

		[
			[
				{ lat: 50.63146464610878, lng: 26.25889851749408 },
				{ lat: 50.631504160638166, lng: 26.257730472960457 },
				{ lat: 50.63267252116214, lng: 26.25731973282029 },
				{ lat: 50.633566023889585, lng: 26.25579826537005 },
				{ lat: 50.634558019496865, lng: 26.255341847084836 },
				{ lat: 50.63526618752582, lng: 26.255549037685416 },
				{ lat: 50.63635289402599, lng: 26.256446657944483 },
				{ lat: 50.6354512386958, lng: 26.25719770104857 },
				{ lat: 50.635707044603514, lng: 26.25829222881047 },
				{ lat: 50.63527420963687, lng: 26.25938717895389 },
				{ lat: 50.63498981648218, lng: 26.25922140342912 },
				{ lat: 50.633709433280366, lng: 26.258986295962597 },
				{ lat: 50.63361173192518, lng: 26.26037261929968 },
				{ lat: 50.6364330930754, lng: 26.260904446646556 },
				{ lat: 50.636078908487505, lng: 26.26393399802831 },
				{ lat: 50.63690837298196, lng: 26.26447531106115 },
				{ lat: 50.637345071930724, lng: 26.263163168266967 },
				{ lat: 50.63885713012114, lng: 26.26574837746815 },
				{ lat: 50.639511296165246, lng: 26.26575695566752 },
				{ lat: 50.63951123128702, lng: 26.26700951032057 },
				{ lat: 50.63881333454611, lng: 26.267204337880624 },
				{ lat: 50.63875582139315, lng: 26.2662999067101 },
				{ lat: 50.63742657203457, lng: 26.266348728034767 },
				{ lat: 50.637163577642305, lng: 26.268213709312942 },
				{ lat: 50.63640434468751, lng: 26.269229315507154 },
			],
			"#FF0000"
		],

		[
			[
				{ lat: 50.629320810607176, lng: 26.271511892172295 },
				{ lat: 50.629311017667064, lng: 26.270532231895903 },
				{ lat: 50.62754989528414, lng: 26.270948273274026 },
				{ lat: 50.627468689185356, lng: 26.27002818176272 },
				{ lat: 50.6272453717386, lng: 26.270116190515783 },
				{ lat: 50.6273265782056, lng: 26.27105228361656 },
				{ lat: 50.62610761802231, lng: 26.271359103124382 },
				{ lat: 50.6267888507536, lng: 26.278565754422488 },
				{ lat: 50.626474846268536, lng: 26.27866642941194 },
				{ lat: 50.62670901931787, lng: 26.280990343724046 },
				{ lat: 50.62652274540751, lng: 26.28108262913104 },
				{ lat: 50.62703898844848, lng: 26.285352926576042 },
				{ lat: 50.627640377815375, lng: 26.285319368246228 },
				{ lat: 50.62944982155594, lng: 26.28614993692494 },
				{ lat: 50.63004805969541, lng: 26.28520813906366 },
				{ lat: 50.629674419045344, lng: 26.283250910242604 },
				{ lat: 50.6317102142785, lng: 26.28057016583999 },
				{ lat: 50.63115361313184, lng: 26.275089723282377 },
				{ lat: 50.62975778478816, lng: 26.272247141855825 },
				{ lat: 50.63053644799895, lng: 26.27125688904432 },
				{ lat: 50.631022586460595, lng: 26.272199041830326 },
				{ lat: 50.6313651798516, lng: 26.271881333422915 },
				{ lat: 50.6310595329261, lng: 26.271211498200802 },
				{ lat: 50.630941975881285, lng: 26.269975082983073 },
			],
			"#FF0000"
		],

		
		[
			[
				{ lat: 50.618124942525235, lng: 26.260303222464604 },
				{ lat: 50.61845308482328, lng: 26.258128024469016 },
				{ lat: 50.6186750621437, lng: 26.256564481210592 },
				{ lat: 50.61889526814698, lng: 26.256636643635023 },
				{ lat: 50.61893887318069, lng: 26.256207105405856 },
				{ lat: 50.61870340555532, lng: 26.256138379287354 },
				{ lat: 50.619394408410905, lng: 26.25065063429115 },
				{ lat: 50.62019912011823, lng: 26.25094535095044 },
				{ lat: 50.619992100175466, lng: 26.252334729476935 },
				{ lat: 50.62134549021037, lng: 26.25281263724311 },
				{ lat: 50.621131722615914, lng: 26.253991916367834 },
				{ lat: 50.62193869019544, lng: 26.254067727168703 },
				{ lat: 50.62202419587947, lng: 26.253082186754586 },
				{ lat: 50.622825267859476, lng: 26.25327961514089 },
				{ lat: 50.623306794154175, lng: 26.25187140174204 },
				{ lat: 50.622637501553015, lng: 26.251637495109687 },
				{ lat: 50.622743498753664, lng: 26.25120309707818 },
				{ lat: 50.62302817576714, lng: 26.25127470114931 },
				{ lat: 50.62330702105744, lng: 26.25076865359955 },
				{ lat: 50.62372918958904, lng: 26.251080059909828 },
				{ lat: 50.624104511574515, lng: 26.25021036907992 },
				{ lat: 50.62427724799413, lng: 26.250404107723877 },
				{ lat: 50.623629483148704, lng: 26.252173936417325 },
				{ lat: 50.624024786859145, lng: 26.252519524268706 },
				{ lat: 50.623945062008715, lng: 26.25287558447922 },
				{ lat: 50.62435361055385, lng: 26.253050422628064 },
				{ lat: 50.624438647359085, lng: 26.2527269720437 },
				{ lat: 50.624891478625955, lng: 26.252939612723505 },
				{ lat: 50.62527489315258, lng: 26.251175111851193 },
				{ lat: 50.62551865396687, lng: 26.251398340284773 },
				{ lat: 50.625799557710984, lng: 26.250589594642637 },
				{ lat: 50.625592942723564, lng: 26.25035904724239 },
				{ lat: 50.62576705653717, lng: 26.249865017099008 },
				{ lat: 50.626038672799005, lng: 26.25016509466758 },
				{ lat: 50.625932088169456, lng: 26.250584499580878 },
				{ lat: 50.62607555853653, lng: 26.250916669878244 },
				{ lat: 50.626934129877206, lng: 26.25071171373542 },
				{ lat: 50.62682204573705, lng: 26.25122763781431 },
				{ lat: 50.62619212789495, lng: 26.25245384093088 },
				{ lat: 50.62549898519637, lng: 26.25203988151818 },
				{ lat: 50.62487217131631, lng: 26.255177799466026 },
				{ lat: 50.62532188448018, lng: 26.255574780334957 },
				{ lat: 50.625188514568414, lng: 26.256431003521506 },
				{ lat: 50.62546252870457, lng: 26.257600665553138 },
				{ lat: 50.624693522188515, lng: 26.258197613411184 },
				{ lat: 50.62579399042108, lng: 26.260763688391524 },
				{ lat: 50.62534919296676, lng: 26.261033233059774 },
				{ lat: 50.62427623497278, lng: 26.25900815749913 },
				{ lat: 50.62370411517315, lng: 26.25884244804527 },
				{ lat: 50.623452032914486, lng: 26.25832105616502 },
				{ lat: 50.62285615648699, lng: 26.258164266118392 },
				{ lat: 50.62285410410184, lng: 26.2566276191711 },
				{ lat: 50.62248672571181, lng: 26.256452926681696 },
				{ lat: 50.62303060889338, lng: 26.254783642848093 },
				{ lat: 50.62288976967439, lng: 26.254069532074112 },
				{ lat: 50.622393736756536, lng: 26.253822904445563 },
				{ lat: 50.621900940484075, lng: 26.256560002507648 },
				{ lat: 50.622115556488524, lng: 26.257044402987482 },
				{ lat: 50.62211301665992, lng: 26.257520796848894 },
				{ lat: 50.62145265655895, lng: 26.25769494081775 },
				{ lat: 50.621381540296085, lng: 26.2574347256852 },
				{ lat: 50.61915190427896, lng: 26.258171681812005 },
				{ lat: 50.61926196281697, lng: 26.25972102489323 },
				{ lat: 50.619770374479515, lng: 26.259841222983617 },
				{ lat: 50.61998100055707, lng: 26.2601216851839 },
				{ lat: 50.62031509515905, lng: 26.25995569735108 },
				{ lat: 50.620460352941365, lng: 26.26035063391882 },
				{ lat: 50.62022794027429, lng: 26.260510898033264 },
				{ lat: 50.62006089296041, lng: 26.26012740890227 },
				{ lat: 50.61908764898532, lng: 26.26084859741728 },
				{ lat: 50.61920748981581, lng: 26.26127215257688 },
				{ lat: 50.61884796640823, lng: 26.261649917989505 },
				{ lat: 50.61847028226982, lng: 26.260384976219203 },
			],
			"#FF0000"
		],
		[
			[
				{ lat: 50.61917028703843, lng: 26.28468703899786 },
				{ lat: 50.61985127052228, lng: 26.283932651673855 },
				{ lat: 50.62087078164918, lng: 26.28295746805989 },
				{ lat: 50.62031044239122, lng: 26.282748938230487 },
				{ lat: 50.62036323318292, lng: 26.282219763544216 },
				{ lat: 50.620741947535166, lng: 26.281559342563636 },
				{ lat: 50.62052399316943, lng: 26.280801203901706 },
				{ lat: 50.62059298536275, lng: 26.280437929119643 },
				{ lat: 50.62128806562615, lng: 26.279677834034704 },
				{ lat: 50.621293870624484, lng: 26.278799457931306 },
				{ lat: 50.62242360546494, lng: 26.278487187301884 },
				{ lat: 50.62248282084091, lng: 26.278919398908524 },
				{ lat: 50.62232706649346, lng: 26.278986792019545 },
				{ lat: 50.62236371462161, lng: 26.27963184036786 },
				{ lat: 50.62175539255205, lng: 26.279665559957554 },
				{ lat: 50.62168363294473, lng: 26.279241407086364 },
				{ lat: 50.621403769457125, lng: 26.27931492691614 },
				{ lat: 50.62124948502872, lng: 26.281011538407796 },
				{ lat: 50.62194555495198, lng: 26.28109636898238 },
				{ lat: 50.62208189733846, lng: 26.280412069014073 },
				{ lat: 50.62226847048998, lng: 26.280440345872268 },
				{ lat: 50.62227923430305, lng: 26.280915397089935 },
				{ lat: 50.62273490013031, lng: 26.281028504522713 },
				{ lat: 50.62267749366958, lng: 26.28149224498332 },
				{ lat: 50.623393749025446, lng: 26.281679399486045 },
				{ lat: 50.62705286213301, lng: 26.2809126585244 },
				{ lat: 50.62746490498803, lng: 26.285635740137643 },
				{ lat: 50.62191171700164, lng: 26.28689419577531 },
				{ lat: 50.621729095616985, lng: 26.284569651266366 },
				{ lat: 50.62085014331402, lng: 26.28442412696598 },
				{ lat: 50.62031094596323, lng: 26.285035329030304 },
			],
			"#FF0000",
		],
		[
			[
				{ lat: 50.626497855060215, lng: 26.274848356671626 },
				{ lat: 50.62671748508257, lng: 26.274795092566762 },
				{ lat: 50.62678506334458, lng: 26.27531441758918 },
				{ lat: 50.62733413312296, lng: 26.27515462527459 },
				{ lat: 50.627431275570004, lng: 26.276805812525335 },
				{ lat: 50.62672170873495, lng: 26.276958946815927 },
				{ lat: 50.62682729971718, lng: 26.277950990769003 },
				{ lat: 50.62770580749565, lng: 26.277757908388875 },
				{ lat: 50.62775649013589, lng: 26.27857684400114 },
				{ lat: 50.62737214541689, lng: 26.278663398171542 },
				{ lat: 50.62735102748416, lng: 26.27835047155547 },
				{ lat: 50.626780839714215, lng: 26.27853689592249 },
				{ lat: 50.62642605272314, lng: 26.274861672686956 },
			],
			"#FF0000",
		],
		[
			[
				{ lat: 50.62855008789206, lng: 26.284690224539208 },
				{ lat: 50.628964040633754, lng: 26.285033427859847 },
				{ lat: 50.628924178692465, lng: 26.286121044012877 },
				{ lat: 50.63000350591159, lng: 26.285468474318705 },
				{ lat: 50.63042971068803, lng: 26.286396573439305 },
				{ lat: 50.62936879091751, lng: 26.287435851100398 },
				{ lat: 50.628172927772944, lng: 26.286865456850496 },
			],
			"#FF0000",
		],





		
		[
			[
				{ lat: 50.63512446228778, lng: 26.251943087661743 },
				{ lat: 50.638461473138804, lng: 26.25307652488357 },
				{ lat: 50.640914359781654, lng: 26.254365763622523 },
				{ lat: 50.64092064906997, lng: 26.256091360096054 },
				{ lat: 50.63728312485491, lng: 26.25681542980582 },
				{ lat: 50.636760303585895, lng: 26.259346863897978 },
				{ lat: 50.63786357317514, lng: 26.259866132421855 },
				{ lat: 50.63785122328602, lng: 26.260826779207164 },
				{ lat: 50.63842343140805, lng: 26.260911160343714 },
				{ lat: 50.6383493329072, lng: 26.262806490487705 },
				{ lat: 50.636333655806645, lng: 26.25965013388793 },
				{ lat: 50.633748118434355, lng: 26.258929824349067 },
				{ lat: 50.63363264451726, lng: 26.260394189897095 },
				{ lat: 50.634867698684246, lng: 26.260623739083428 },
				{ lat: 50.63482251434841, lng: 26.262420555188303 },
				{ lat: 50.63618806620688, lng: 26.26191396386358 },
				{ lat: 50.636208147566336, lng: 26.262285991851503 },
				{ lat: 50.63602741511663, lng: 26.263884920720162 },
				{ lat: 50.63685576649713, lng: 26.264605230249355 },
				{ lat: 50.63680804716089, lng: 26.265149920581983 },
				{ lat: 50.6362603220204, lng: 26.265049502433037 },
				{ lat: 50.63655611822254, lng: 26.267282714728214 },
				{ lat: 50.63539042263408, lng: 26.267151320831932 },
				{ lat: 50.633560821318945, lng: 26.263212591147557 },
				{ lat: 50.63402802748152, lng: 26.2625521146825 },
				{ lat: 50.6331163321231, lng: 26.262312552035166 },
				{ lat: 50.62989420676093, lng: 26.255691096704435 },
				{ lat: 50.630995335852525, lng: 26.25570587384469 },
				{ lat: 50.63451446236774, lng: 26.25218587040162 },
			],
			"#FF0000",
		],





		[
			[
				{ lat: 50.63512446228778, lng: 26.251943087661743 },
				{ lat: 50.638461473138804, lng: 26.25307652488357 },
				{ lat: 50.640914359781654, lng: 26.254365763622523 },
				{ lat: 50.64092064906997, lng: 26.256091360096054 },
				{ lat: 50.63728312485491, lng: 26.25681542980582 },
				{ lat: 50.636760303585895, lng: 26.259346863897978 },
				{ lat: 50.63786357317514, lng: 26.259866132421855 },
				{ lat: 50.63785122328602, lng: 26.260826779207164 },
				{ lat: 50.63842343140805, lng: 26.260911160343714 },
				{ lat: 50.6383493329072, lng: 26.262806490487705 },
				{ lat: 50.636333655806645, lng: 26.25965013388793 },
				{ lat: 50.633748118434355, lng: 26.258929824349067 },
				{ lat: 50.63363264451726, lng: 26.260394189897095 },
				{ lat: 50.634867698684246, lng: 26.260623739083428 },
				{ lat: 50.63482251434841, lng: 26.262420555188303 },
				{ lat: 50.63618806620688, lng: 26.26191396386358 },
				{ lat: 50.636208147566336, lng: 26.262285991851503 },
				{ lat: 50.63602741511663, lng: 26.263884920720162 },
				{ lat: 50.63685576649713, lng: 26.264605230249355 },
				{ lat: 50.63680804716089, lng: 26.265149920581983 },
				{ lat: 50.6362603220204, lng: 26.265049502433037 },
				{ lat: 50.63655611822254, lng: 26.267282714728214 },
				{ lat: 50.63539042263408, lng: 26.267151320831932 },
				{ lat: 50.633560821318945, lng: 26.263212591147557 },
				{ lat: 50.63402802748152, lng: 26.2625521146825 },
				{ lat: 50.6331163321231, lng: 26.262312552035166 },
				{ lat: 50.62989420676093, lng: 26.255691096704435 },
				{ lat: 50.630995335852525, lng: 26.25570587384469 },
				{ lat: 50.63451446236774, lng: 26.25218587040162 },
				"#FF0000",
			],
		],
		[
			[
				{ lat: 50.63290490715057, lng: 26.270933804667678 },
				{ lat: 50.634628265061835, lng: 26.27081304327714 },
				{ lat: 50.63568352231963, lng: 26.27051326468399 },
				{ lat: 50.63629159428549, lng: 26.269689169423476 },
				{ lat: 50.63822020312797, lng: 26.273198552823626 },
				{ lat: 50.6386837528387, lng: 26.272591762244453 },
				{ lat: 50.638739728343445, lng: 26.272795864530178 },
				{ lat: 50.638561306189644, lng: 26.273046855178837 },
				{ lat: 50.638640021929234, lng: 26.27321234351861 },
				{ lat: 50.63912474707125, lng: 26.27255686734269 },
				{ lat: 50.63893441142522, lng: 26.272186955197885 },
				{ lat: 50.63974886552595, lng: 26.271223787726495 },
				{ lat: 50.64043494362545, lng: 26.27250103154725 },
				{ lat: 50.64064740448968, lng: 26.2721450783513 },
				{ lat: 50.640231334395914, lng: 26.271188890354345 },
				{ lat: 50.64066953578625, lng: 26.270735224522717 },
				{ lat: 50.64037285027516, lng: 26.270137015329887 },
				{ lat: 50.639965455919224, lng: 26.27062046103914 },
				{ lat: 50.63979822635061, lng: 26.270305868191155 },
				{ lat: 50.63928204634144, lng: 26.270968685283353 },
				{ lat: 50.63939382572046, lng: 26.271386655788135 },
				{ lat: 50.63901377474704, lng: 26.271411834734206 },
				{ lat: 50.638735920388626, lng: 26.271129830542847 },
				{ lat: 50.63779695219781, lng: 26.26922126643064 },
				{ lat: 50.63724946418434, lng: 26.268359136906543 },
				{ lat: 50.63687188773895, lng: 26.26880058550374 },
				{ lat: 50.63736227067429, lng: 26.269563672826628 },
				{ lat: 50.637121887521765, lng: 26.269897207682995 },
				{ lat: 50.63693759293888, lng: 26.269644529761507 },
				{ lat: 50.63669260311297, lng: 26.269908181641178 },
				{ lat: 50.63623328440278, lng: 26.26939106941211 },
				{ lat: 50.63579420232795, lng: 26.268786409904912 },
				{ lat: 50.633928706035775, lng: 26.269184864136157 },
				{ lat: 50.63381165865686, lng: 26.267977109966456 },
				{ lat: 50.63355331876738, lng: 26.268156515375022 },
				{ lat: 50.633630205776164, lng: 26.26933477251731 },
				{ lat: 50.63095271214263, lng: 26.2700067772389 },
				{ lat: 50.631009240191645, lng: 26.27059494960139 },
				{ lat: 50.631998470046746, lng: 26.270381068742303 },
				{ lat: 50.63197020662548, lng: 26.269864189999506 },
				{ lat: 50.63275027083226, lng: 26.269730514463372 },
				// { lat: lng: },
				// { lat: lng: },
				// { lat: lng: },
				// { lat: lng: },
			],
			"#FF0000",
		],
		// - разом до попереднього
		[
			[
				{ lat: 50.642390305779834, lng: 26.274531864741874 },
				{ lat: 50.64292203306152, lng: 26.275362205680366 },
				{ lat: 50.643113040422, lng: 26.27510984715985 },
				{ lat: 50.64264262687628, lng: 26.274271365623925 },
			],
			"#FF0000",
		],
	];

	arreyCords.forEach(function(element) {
		new google.maps.Polygon({
			paths: element[0],
			strokeColor: element[1],
			strokeOpacity: 0.8,
			strokeWeight: 2,
			fillColor: element[1],
			fillOpacity: 0.35,
		}).setMap(map);
	});
}