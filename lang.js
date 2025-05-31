/*
	You can use language files like this one to modify and augment localization strings for any supported language, including English.
	Valid language codes are EN (English), FR (French), DE (German), NL (Dutch), CS (Czech), PL (Polish), IT (Italian), ES (Spanish), PT-BR (Portuguese), JA (Japanese), ZH-CN (Chinese), and RU (Russian).
	You can also use the language code "*" to apply to any language.
	You may call ModLanguage multiple times in a single file to augment multiple languages. The game will only load what it needs for the current language.
	You may also use this to add flavor text to upgrades and achievements, which is omitted in non-English languages. This is done via the syntax "[Upgrade quote ID]upgrade's original English name":"your custom flavor text". See below for examples.
	Note that the game has various hard-coded exceptions for English which may not be easy to change through localization files alone.
	The special "REPLACE ALL" key is provided as a utility for replacing every single instance of a string in the game's language files with another. At the moment this does not apply to default english flavor text.
	Please refer to the /loc directory for the default localization files, which you may use for reference.
*/
ModLanguage('CS',{
	
	"REPLACE ALL": {
		"cookie":"sušenka",
	},
	
	//we're already changing "cookie" and "grandma" in the REPLACE ALL so some of the following is redundant and mostly just for the sake of example
	"%1 of CpS": "%1 z S/s",
	"CpS": "S/s",
	"cookies/click": "/",
	"%1 CpS": "%1 S/s",
	//Cps
	"per second:": "za sekundu:", //Line 84
	
	"Your prestige level is currently <b>%1</b>.<br>(CpS +%2%)": "Momentální úroveň vaší prestiže je <b>%1</b>.<br>(S/s +%2%)",
	//Building Tooltip
	"%1 producing <b>%2</b> per second": "%1 vyrabí <b>%2</b> za sekundu", //Line 962
	"<b>%1%</b> of total CpS": "<b>%1%</b> z celkových S/s",
	"<b>%1</b> produced so far": "<b>%1</b> zatím vyrobeno",
	
	//Farm
	"Farm": "Farma",		//Line 1004
	"farm": "farma",		//Line 1005
	"farms": "Felder",	//Line 1006
	"%1 farm": [		//Line 1007
		"%1 Feld",		//Line 1008
		"%1 Felder"		//Line 1009
	],					//Line 1010
	

	
	"%1 cookie": [
		"%1 sušenka",
		"%1 sušenek"
	],
	
	"%1 are <b>twice</b> as efficient.": "%1 jsou dvakrát účinnější",
	
	"Antimatter condenser": "Kond. antihmoty",
	"Shipment": "Expedice",
	"Prism": "Hranol",
	"prism": "hranol",
	"prisms": "hranoly",
	
	"Grandma": "Babička",
	"%1 grandma": [
		"%1 babička",
		"%1 babiček",
		"%10 babičky"
	],
	"%1 golden cookie": [
		"%1 zlatá sušenka",
		"%1 zlaté sušenky",
		"%1 zlatých sušenek"
	],
	"Stats": "Statistiky",
	"Legacy": "Dědictví",
	"Cookies per second:": "Sušenek za sekundu:",
	"Raw cookies per second:": "Surové sušenky za sekundu:",
});

ModLanguage('DE',{
	
	//Cps
	"per second:": "pro Sekunde:", //Line 84
	
	//Building Tooltip
	"%1 producing <b>%2</b> per second": "%1 produzieren <b>%2</b> pro Sekunde", //Line 962
	
	//Farm
	"Farm": "Feld",		//Line 1004
	"farm": "Feld",		//Line 1005
	"farms": "Felder",	//Line 1006
	"%1 farm": [		//Line 1007
		"%1 Feld",		//Line 1008
		"%1 Felder"		//Line 1009
	],					//Line 1010
	
	
	
	//Sugar lump: mature (ausgewachsen) vs ripe (reif)
	"Because you've baked a <b>billion cookies</b> in total, you are now attracting <b>sugar lumps</b>. They coalesce quietly near the top of your screen, under the Stats button.<br>You will be able to harvest them when they're ripe, after which you may spend them on all sorts of things!": "Da du insgesamt eine <b>Milliarde Kekse</b> gebacken habst, ziehst du nun <b>Würfelzucker</b> an. Sie sammeln sich in der Nähe des oberen Bildschirmrandes unter der Schaltfläche \"Statistik\".<br> Wenn sie reif sind, kannst du sie ernten und für alles Mögliche ausgeben!", //Line 501
	"Your sugar lumps mature after <b>%1</b>,<br>ripen after <b>%2</b>,<br>and fall after <b>%3</b>.": "Dein Würfelzucker ist nach <b>%1</b> ausgewachsen,<br>reift nach <b>%2</b>,<br>und fällt nach <b>%3</b>.", //Line 503
	"&bull; Sugar lumps can be harvested when mature, though if left alone beyond that point they will start ripening (increasing the chance of harvesting them) and will eventually fall and be auto-harvested after some time.<br>&bull; Sugar lumps are delicious and may be used as currency for all sorts of things.<br>&bull; Once a sugar lump is harvested, another one will start growing in its place.<br>&bull; Note that sugar lumps keep growing when the game is closed.": "&bull; Die Würfelzucker können geerntet werden, wenn sie ausgewachsen sind, aber wenn sie darüber hinaus in Ruhe gelassen werden, beginnen sie zu reifen (was die Chance erhöht, sie zu ernten) und fallen schließlich herunter und werden nach einiger Zeit automatisch geerntet.<br>&bull; Würfelzucker sind köstlich und können als Währung für alle möglichen Dinge verwendet werden.<br>&bull; Sobald ein Würfelzucker geerntet wurde, beginnt ein anderer an seiner Stelle zu wachsen.<br>&bull; Beachte, dass Würfelzucker weiter wachsen, wenn das Spiel geschlossen ist.", //Line 504
	"This sugar lump has been exposed to time travel shenanigans and will take an excruciating <b>%1</b> to reach maturity.": "Dieser Würfelzucker wurde dem Zeitreisemodus ausgesetzt und wird einen qualvollen <b>%1</b> brauchen, um ausgewachsen zu sein.", //Line 505
	"This sugar lump is still growing and will take <b>%1</b> to reach maturity.": "Dieser Würfelzucker ist noch im Wachstum und wird <b>%1</b> brauchen, um ausgewachsen zu sein.", //Line 506
	"This sugar lump is mature and will be ripe in <b>%1</b>.<br>You may <b>click it to harvest it now</b>, but there is a <b>50% chance you won't get anything</b>.": "Dieser Würfelzucker ist ausgewachsen und wird in <b>%1</b> reif sein.<br>Du kannst ihn <b>anklicken, um ihn jetzt zu ernten</b>, aber es besteht eine <b>50%ige Chance, dass du nichts bekommst</b>.", //Line 507
	"<b>This sugar lump is ripe! Click it to harvest it.</b><br>If you do nothing, it will auto-harvest in <b>%1</b>.": "<b>Dieser Würfelzucker ist reif! Klicke ihn an, um ihn zu ernten.</b><br>Wenn du nichts tust, wird er in <b>%1</b> automatisch geerntet.", //Line 508
	
	"Sugar lumps ripen <b>%1</b> sooner.": "Würfelzucker sind <b>%1</b> früher ausgewachsen.", //Line 1365
	"Sugar lumps mature <b>%1</b> sooner.": "Würfelzucker reifen <b>%1</b> früher.", //Line 1366
	
	"Successfully harvest a coalescing sugar lump before it's ripe.": "Ernte erfolgreich einen zusammenfließenden Würfelzucker, bevor er reif ist.", //1520
	
	//Achievement
	"Make <b>%1</b> from clicking.": "Backe <b>%1</b> durch Klicken.", //Line 1470
	
});