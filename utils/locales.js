const { SUPPORTED_GAMES } = require('./constants');

const LOCALES = {
	en: {
		none: 'none',
		damage: 'damage',
		aliases: 'Aliases',
		usage: 'Usage',
		description: 'Description',
		table: 'Table',
		artifact: 'Artifact',
		'base-dice': 'Base Dice',
		'base-power-level': 'Base Power Level',
		overcharging: 'Overcharging',
		'magic-mishap': 'Magic Mishap',
		permanent: 'Permanent',
		'permanent-effects': 'These effects are permanent.',
		'healing-time': 'Healing Time',
		'healing-time-until-end-text': 'days until end of effects.',
		lethality: 'Lethality',
		'attmyz-fight': 'Fight //TODO List attributes etc.',
		'carkthreat-description': 'Draws a random threat against the Ark.',
		'carkthreat-title': 'Threat Against the Ark',
		'cartifact-description': 'Draws a random artifact from the MYZ core rulebook. Available sources are (combine one or more):'
			+ '\n• `myz` – Mutant: Year Zero (default if none are specified)'
			+ '\n• `gla` – Mutant: GenLab Alpha'
			+ '\n• `mek` – Mutant: Mechatron'
			+ '\n• `ely` – Mutant: Elysium'
			+ '\n• `astra` – Mutant: Ad Astra'
			+ '\nMetaplot items are removed by default. Use `meta` to add them to the stack.'
			+ '\nUse `all` to pick from all book sources (including metaplot items).',
		'ccast-description': 'Cast a spell. Use the `-mishap` parameter if you want a specific mishap.',
		'ccast-title': 'Spell Casting',
		'ccast-invalid-mishap-reference': 'Invalid Magic Mishap\'s reference!',
		'ccast-invalid-power-level': 'Invalid Power Level!',
		'ccrit-description': 'Rolls for a random critical injury. Use the `-private` argument to send the result in a DM.',
		'ccrit-moredescriptions': [
			[
				'Arguments',
				'There are three main arguments you can use with this command in any order:'
				+ '\n• `game` – Specifies the game you are using. Can be omitted if you set it with `!setconf game [default game]`.'
				+ `\n> Choices: \`${SUPPORTED_GAMES.join('`, `')}\`.`
				+ '\n• `table` – Specifies the table you want from this game. See below for possible options *(default is "damage")*.'
				+ '\n• `numeric` – Specifies a fixed reference.',
			],
			[
				'☢️ Mutant: Year Zero',
				'• `dmg` | `damage` : Critical injuries from damage.'
				+ '\n• `h` | `horror` : The *Forbidden Lands* Horror traumas, adapted for MYZ.'
				+ '\n• `nt` | `nontypical` : Critical injury for non-typical damage.'
				+ '\n• `p` | `pushed` : Critical injury for pushed damage (none).',
			],
			[
				'⚔️ Forbidden Lands',
				'• `sl` | `slash` : Critical injuries due to Slash wounds.'
				+ '\n• `bl` | `blunt` : Critical injuries due to Blunt force.'
				+ '\n• `st` | `stab` : Critical injuries due to Stab wounds.'
				+ '\n• `h` | `horror` : Horror traumas.'
				+ '\n• `nt` | `nontypical` : Critical injury for non-typical damage.'
				+ '\n• `p` | `pushed` : Critical injury for pushed damage (none).'
				+ '\n• Add `-lucky [rank]` instead of the fixed reference to use the talent (rank is optional, default is 1).',
			],
			[
				'👾 ALIEN',
				'• `dmg` | `damage` : Critical injuries from damage.'
				+ '\n• `s`, `synth` | `synthetic` : Critical injuries on Synthetics and Androids.'
				+ '\n• `x` | `xeno` : Critical injuries for Xenomorphs.'
				+ '\n• `m` | `mental` : Permanent mental traumas.',
			],
			[
				'🌟 Coriolis: The Third Horizon',
				'• `dmg` | `damage` : Critical injuries from damage.'
				+ '\n• `at` | `atypical` : Critical injury for atypical damage.'
			],
		],
		'ccrit-lethality-start': 'This critical injury is **LETHAL** and must be HEALED',
		'ccrit-lethality-healmalus': ' (modified by',
		'ccrit-lethality-timelimit-multiple': ' within the next',
		'ccrit-lethality-timelimit-single': ' within **one',
		'ccrit-lethality-end': ' or the character will die.',
		'ccritalien-description': 'Rolls for a random critical injury.'
			+ '\nType `help crit` for more details.',
		'ccritcoriolis-description': 'Rolls for a random critical injury.'
			+ '\nType `help crit` for more details.',
		'ccritfbl-description': 'Rolls for a random critical injury.'
			+ '\nType `help crit` for more details.',
		'ccritmyz-description': 'Rolls for a random critical injury.'
			+ '\nType `help crit` for more details.',
		'malien-xeno-bloodburster': 'Bloodburster',
		'malien-xeno-neophyte': 'Juvenile Neomorph (Neophyte)',
		'malien-xeno-neomorph': 'Adult Neomorph',
		'malien-xeno-ovomorph': 'Ovomorph (Egg)',
		'malien-xeno-queenegg': 'Queen\'s Egg',
		'malien-xeno-facehugger': 'Facehugger',
		'malien-xeno-praetofacehugger': 'Praeto-Facehugger',
		'malien-xeno-royalfacehugger': 'Royal Facehugger',
		'malien-xeno-chestburster': 'Chestburster',
		'malien-xeno-bambiburster': 'Bambi Burster',
		'malien-xeno-imp': 'Imp',
		'malien-xeno-queenburster': 'Queenburster',
		'malien-xeno-stalker': 'Stalker',
		'malien-xeno-scout': 'Scout',
		'malien-xeno-drone': 'Drone',
		'malien-xeno-soldier': 'Soldier',
		'malien-xeno-worker': 'Worker',
		'malien-xeno-sentry': 'Sentry',
		'malien-xeno-praetorian': 'Praetorian',
		'malien-xeno-crusher': 'Crusher',
		'malien-xeno-queen': 'Queen',
		'malien-swarm': 'The Swarm',
		'malien-adultharvester': 'Harvester',
		'malien-juvenileharvester': 'Harvester Juvenile',
		'malien-lionworm': 'Lion Worm',
		'malien-scorpionid-onland': 'Tanakan Scorpionid (On Land)',
		'malien-scorpionid-inwater': 'Tanakan Scorpionid (In Water)',
		'mmyz-humanoid-amnesiac': 'Amnesiac',
		'mmyz-humanoid-cannibal': 'Cannibal',
		'mmyz-humanoid-beastmutant-dog': 'Beast Mutant - Dog',
		'mmyz-humanoid-beastmutant-bear': 'Beast Mutant - Bear',
		'mmyz-humanoid-beastmutant-rodent': 'Beast Mutant - Rodent',
		'mmyz-humanoid-beastmutant-monkey': 'Beast Mutant - Monkey',
		'mmyz-humanoid-doomcultist': 'Doom Cultist',
		'mmyz-humanoid-exiledmutant': 'Exiled Mutant',
		'mmyz-humanoid-helldriver': 'Helldriver',
		'mmyz-humanoid-morlock': 'Morlock',
		'mmyz-humanoid-novacultist': 'Nova Cultist',
		'mmyz-humanoid-scraporacle': 'Scrap Oracle',
		'mmyz-humanoid-wanderer': 'Wanderer',
		'mmyz-humanoid-watertrader': 'Water Trader',
		'mmyz-humanoid-wrecker': 'Wrecker',
		'mmyz-humanoid-zoneghoul': 'Zone Ghoul',
		'mmyz-monster-acidgrass': 'Acid Grass',
		'mmyz-monster-airjellies': 'Air Jellies',
		'mmyz-monster-automaton': 'Automaton',
		'mmyz-monster-bitterbeast': 'Bitterbeast',
		'mmyz-monster-deathworm': 'Deathworm',
		'mmyz-monster-devourer': 'Devourer',
		'mmyz-monster-grazer': 'Grazer',
		'mmyz-monster-gutfish': 'Gutfish',
		'mmyz-monster-killertree': 'Killer Tree',
		'mmyz-monster-killertree-seedpod': 'Seedpod',
		'mmyz-monster-mindmosquitoes': 'Mind Mosquitoes',
		'mmyz-monster-nightmareflowers': 'Nightmare Flowers',
		'mmyz-monster-parasitefungus': 'Parasite Fungus',
		'mmyz-monster-razorback': 'Razorback',
		'mmyz-monster-rotants': 'Rot Ants',
		'mmyz-monster-rotfish': 'Rot Fish',
		'mmyz-monster-scrapcrows': 'Scrap Crows',
		'mmyz-monster-trashhawk': 'Trash Hawk',
		'mmyz-monster-wormswarm': 'Worm Swarm',
		'mmyz-monster-zonedogs': 'Zone Dogs',
		'mmyz-monster-zonerats': 'Zone Rats',
		'mmyz-monster-zonespider': 'Zone Spider',
		'mmyz-monster-zonewasps': 'Zone Wasps',
		'mmyz-monster-zoneleeches': 'Zone Leeches',
		'mgla-creeper': 'Creeper',
		'wmyz-assaultrifle': 'Assault Rifle',
		'wmyz-baseballbat-spiked': 'Spiked Baseball Bat',
		'wmyz-baseballbat-wooden': 'Baseball Bat',
		'wmyz-bicyclechain': 'Bicycle Chain',
		'wmyz-bluntinstrument': 'Blunt Instrument',
		'wmyz-bow': 'Bow',
		'wmyz-brassknuckles': 'Brass Knuckles',
		'wmyz-chainknife': 'Chain Knife',
		'wmyz-chainsaw': 'Chainsaw',
		'wmyz-compoundbow': 'Compound Bow',
		'wmyz-crossbow': 'Crossbow',
		'wmyz-decapitator': 'Decapitator',
		'wmyz-emprifle': 'EMP Rifle',
		'wmyz-flamethrower': 'Flamethrower',
		'wmyz-flaregun': 'Flare Gun',
		'wmyz-gausspistol': 'Gauss Pistol',
		'wmyz-gaussrifle': 'Gauss Rifle',
		'wmyz-grenade-energy': 'Energy Grenade',
		'wmyz-grenade-frag': 'Frag Grenade',
		'wmyz-grenade-hand': 'Hand Grenade',
		'wmyz-gyrojetcarbine': 'Gyrojet Carbine',
		'wmyz-gyrojetpistol': 'Gyrojet Pistol',
		'wmyz-harpoonpistol': 'Harpoon Pistol',
		'wmyz-harpoonrifle': 'Harpoon Rifle',
		'wmyz-huntingrifle': 'Hunting Rifle',
		'wmyz-improvisedexplosive': 'Improvised Explosive',
		'wmyz-katana': 'Katana',
		'wmyz-lasercannon': 'Laser Cannon',
		'wmyz-laserpistol': 'Laser Pistol',
		'wmyz-laserrifle': 'Laser Rifle',
		'wmyz-laserwelder': 'Laser Welder',
		'wmyz-machete': 'Machete',
		'wmyz-maserpistol': 'Maser Pistol',
		'wmyz-molotovcocktail': 'Molotov Cocktail',
		'wmyz-nailgun': 'Nail Gun',
		'wmyz-oldagespeargun': 'Old Age Speargun',
		'wmyz-pickaxe': 'Pick Axe',
		'wmyz-plasmarifle': 'Plasma Rifle',
		'wmyz-pulselaser': 'Pulse Laser',
		'wmyz-revolver': 'Revolver',
		'wmyz-rock-thrown': 'Thrown Rock',
		'wmyz-rustychain': 'Rusty Chain',
		'wmyz-scrapaxe': 'Scrap Axe',
		'wmyz-scrapcannon': 'Scrap Cannon',
		'wmyz-scrapcrossbow': 'Scrap Crossbow',
		'wmyz-scrapderringer': 'Scrap Derringer',
		'wmyz-scrapflamethrower': 'Scrap Flamethrower',
		'wmyz-scrapknife': 'Scrap Knife',
		'wmyz-scrapmachete': 'Scrap Machete',
		'wmyz-scrappistol': 'Scrap Pistol',
		'wmyz-scraprifle': 'Scrap Rifle',
		'wmyz-scrapshiv': 'Scrap Shiv/Shank',
		'wmyz-scrapshotgun': 'Scrap Shotgun',
		'wmyz-scrapsledgehammer': 'Scrap Sledgehammer',
		'wmyz-scrapspear': 'Scrap Spear',
		'wmyz-semiautopistol': 'Semi-auto Pistol',
		'wmyz-shotgun-doublebarrel': 'Double-barreled Shotgun',
		'wmyz-shotgun-pumpaction': 'Pump-action Shotgun',
		'wmyz-slingshot': 'Slingshot',
		'wmyz-studdedwoodenclub': 'Studded Wooden Club',
		'wmyz-stunbaton': 'Stun Baton',
		'wmyz-stungun': 'Stun Gun',
		'wmyz-tasergun': 'Taser Gun',
		'wmyz-ultrasoniccarbine': 'Ultrasonic Carbine',
		'wmyz-unarmed': 'Unarmed',
		'wmyz-vibroknife': 'Vibroknife',
		'wmyz-whaleharpoon': 'Whale Harpoon',
		'wmyz-wrench': 'Wrench',
	},
	de: {
		none: 'Ohne',
		damage: 'Schaden',
		aliases: 'Aliase',
		usage: 'Verwendung',
		description: 'Beschreibung',
		table: 'Tabelle',
		artifact: 'Artefakt',
		'base-dice': 'Basiswürfel',
		'base-power-level': 'Basis-Machtstufe',
		overcharging: 'Überladen',
		'magic-mishap': 'Magisches Missgeschick',
		permanent: 'Permanent',
		'permanent-effects': 'Diese Effekte sind permanent.',
		'healing-time': 'Heilungsdauer',
		'healing-time-until-end-text': 'Tage bis zum Ende der Effekte.',
		lethality: 'Tödlich',
		'carkthreat-description': 'Zieht eine zufällige Bedrohung für die Arche.',
		'carkthreat-title': 'Bedrohung für die Arche',
		'cartifact-description': 'Zieht ein zufälliges Artefakt aus dem MYZ Grundregelwerk. Verfügbare Quellbücher sind (es können mehrere kombiniert werden):'
			+ '\n• `myz` – Mutant: Jahr Null (Standard falls nichts angegeben wurde)'
			+ '\n• `gla` – Mutant: Genlabor Alpha'
			+ '\n• `mek` – Mutant: Mechatron'
			+ '\n• `ely` – Mutant: Elysium'
			+ '\n• `astra` – Mutant: Ad Astra'
			+ '\nMetaplot-Gegenstände sind standardmäßig nicht enthalten. Nutze `meta` um sie dem Stapel hinzuzufügen.'
			+ '\nMit `all` wird aus allen Quellenbüchern gezogen (inklusive Metaplot-Gegenständen).',
		'ccast-description': 'Einen Zauber wirken. Mit dem `-mishap`-Parameter kann ein spezifisches magisches Missgeschick ausgewählt werden.',
		'ccast-title': 'Zauber wirken',
		'ccast-invalid-mishap-reference': 'Ungültiger \'Magisches Missgeschickt\'-Verweis!',
		'ccast-invalid-power-level': 'Ungültige Machtstufe!',
		'ccrit-description': 'Würfelt eine zufällige kritische Verletzung. Nutze `-private` Argument um das Ergebnis in einer Direktnachricht zu erhalten.',
		'ccrit-moredescriptions': [
			[
				'Parameter',
				'Es gibt drei Hauptparamter, welche mit diesem Befehl in beliebiger Rheinfolge genutzt werden können:'
				+ '\n• `game` – Gibt das genutzte Spiel an. Kann ausgelassen werden, wenn ein Standard mit `!setconf game [default game]` gesetzt wurde.'
				+ `\n> Möglichkeiten: \`${SUPPORTED_GAMES.join('`, `')}\`.`
				+ '\n• `table` – Gibt die gewünschte Tabelle des Spiels an. Siehe unten für die Optionen *(Standard ist "damage")*.'
				+ '\n• `numeric` – Ruft einen bestimmten Eintrag aus der Tabelle ab.',
			],
			[
				'☢️ Mutant: Jahr Null (myz)',
				'• `dmg` | `damage` : Kritische Verletzungen durch Schaden.'
				+ '\n• `h` | `horror` : Die geistigen Traumata der *Verbotene Lande*, adaptiert für MYZ.'
				+ '\n• `nt` | `nontypical` : Kritische Verletzungen durch untypischen Schaden.'
				+ '\n• `p` | `pushed` : Kritische Verletzungen durch strapazierten Schaden (keine).',
			],
			[
				'⚔️ Verbotene Lande (fbl)',
				'• `sl` | `slash` : Kritische Verletzungen durch Schnittwunden.'
				+ '\n• `bl` | `blunt` : Kritische Verletzungen durch stumpfe Schläge.'
				+ '\n• `st` | `stab` : Kritische Verletzungen durch Stichwunden.'
				+ '\n• `h` | `horror` : Geistige Traumata.'
				+ '\n• `nt` | `nontypical` : Kritische Verletzungen durch untypischen Schaden.'
				+ '\n• `p` | `pushed` : Kritische Verletzungen durch strapazierten Schaden (keine).'
				+ '\n• Anstatt eines bestimmten Eintrags kann der Parameter `-lucky [rank]` angegeben werden um das Talent __Glückspilz__ zu nutzen (Stufe ist optional, Standard ist 1).',
			],
			[
				'👾 ALIEN',
				'• `dmg` | `damage` : Krtisiche Verletzungen durch Schaden.'
				+ '\n• `s`, `synth` | `synthetic` : Kritische Verletzungen von Androiden.'
				+ '\n• `x` | `xeno` : Kritische Verletzungen bei Xenomorphen.'
				+ '\n• `m` | `mental` : Dauerhafte mentale Traumata.',
			],
			[
				'🌟 Coriolis: Der Dritte Horizont',
				'• `dmg` | `damage` : Kritische Verletzungen durch Schaden.'
				+ '\n• `at` | `atypical` : Kritische Verletzungen durch atypischen Schaden.'
			],
		],
		'ccrit-lethality-start': 'Diese kritische Verletzung ist **TÖDLICH** und muss',
		'ccrit-lethality-healmalus': ' (mit einem Malus von ',
		'ccrit-lethality-timelimit-multiple': ' innerhalb der nächsten',
		'ccrit-lethality-timelimit-single': ' innerhalb **eines',
		'ccrit-lethality-end': ' GEHEILT werden oder der Charakter stirbt.',
		'ccritalien-description': 'Würfelt eine zufällige kritische Verletzung.'
			+ '\nGib `help crit` für mehr Details ein.',
		'ccritcoriolis-description': 'Würfelt eine zufällige kritische Verletzung.'
			+ '\nGib `help crit` für mehr Details ein.',
		'ccritfbl-description': 'Würfelt eine zufällige kritische Verletzung.'
			+ '\nGib `help crit` für mehr Details ein.',
		'ccritmyz-description': 'Würfelt eine zufällige kritische Verletzung.'
			+ '\nGib `help crit` für mehr Details ein.',
		'malien-xeno-bloodburster': 'Bloodburster',
		'malien-xeno-neophyte': 'Juvenile Neomorph (Neophyte)',
		'malien-xeno-neomorph': 'Adult Neomorph',
		'malien-xeno-ovomorph': 'Ovomorph (Egg)',
		'malien-xeno-queenegg': 'Queen\'s Egg',
		'malien-xeno-facehugger': 'Facehugger',
		'malien-xeno-praetofacehugger': 'Praeto-Facehugger',
		'malien-xeno-royalfacehugger': 'Royal Facehugger',
		'malien-xeno-chestburster': 'Chestburster',
		'malien-xeno-bambiburster': 'Bambi Burster',
		'malien-xeno-imp': 'Imp',
		'malien-xeno-queenburster': 'Queenburster',
		'malien-xeno-stalker': 'Stalker',
		'malien-xeno-scout': 'Scout',
		'malien-xeno-drone': 'Drone',
		'malien-xeno-soldier': 'Soldier',
		'malien-xeno-worker': 'Worker',
		'malien-xeno-sentry': 'Sentry',
		'malien-xeno-praetorian': 'Praetorian',
		'malien-xeno-crusher': 'Crusher',
		'malien-xeno-queen': 'Queen',
		'malien-swarm': 'The Swarm',
		'malien-adultharvester': 'Harvester',
		'malien-juvenileharvester': 'Harvester Juvenile',
		'malien-lionworm': 'Lion Worm',
		'malien-scorpionid-onland': 'Tanakan Scorpionid (On Land)',
		'malien-scorpionid-inwater': 'Tanakan Scorpionid (In Water)',
		'mmyz-humanoid-amnesiac': 'Gedächtnisloser',
		'mmyz-humanoid-cannibal': 'Kannibale',
		'mmyz-humanoid-beastmutant-dog': 'Tiermutant - Hund',
		'mmyz-humanoid-beastmutant-bear': 'Tiermutant - Bär',
		'mmyz-humanoid-beastmutant-rodent': 'Tiermutant - Nagetier',
		'mmyz-humanoid-beastmutant-monkey': 'Tiermutant - Affe',
		'mmyz-humanoid-doomcultist': 'Untergangskultist',
		'mmyz-humanoid-exiledmutant': 'Verstossener Mutant',
		'mmyz-humanoid-helldriver': 'Höllenfahrer',
		'mmyz-humanoid-morlock': 'Morlock',
		'mmyz-humanoid-novacultist': 'Nova-Kultist',
		'mmyz-humanoid-scraporacle': 'Schrottorakel',
		'mmyz-humanoid-wanderer': 'Wanderer',
		'mmyz-humanoid-watertrader': 'Wasserhändler',
		'mmyz-humanoid-wrecker': 'Wracker',
		'mmyz-humanoid-zoneghoul': 'Zonenghul',
		'mmyz-monster-acidgrass': 'Säuregras',
		'mmyz-monster-airjellies': 'Luftgelee',
		'mmyz-monster-automaton': 'Automat',
		'mmyz-monster-bitterbeast': 'Bitterbiest',
		'mmyz-monster-deathworm': 'Todeswurm',
		'mmyz-monster-devourer': 'Verschlinger',
		'mmyz-monster-grazer': 'Graser',
		'mmyz-monster-gutfish': 'Bauchfisch',
		'mmyz-monster-killertree': 'Killerbaum',
		'mmyz-monster-killertree-seedpod': 'Samenkapsel',
		'mmyz-monster-mindmosquitoes': 'Gedankenmoskitos',
		'mmyz-monster-nightmareflowers': 'Albtraumblumen',
		'mmyz-monster-parasitefungus': 'Parasitenpilz',
		'mmyz-monster-razorback': 'Messerrücken',
		'mmyz-monster-rotants': 'Fäulnisameisen',
		'mmyz-monster-rotfish': 'Faulfisch',
		'mmyz-monster-scrapcrows': 'Schrottkrähe',
		'mmyz-monster-trashhawk': 'Müllfalke',
		'mmyz-monster-wormswarm': 'Wurmschwarm',
		'mmyz-monster-zonedogs': 'Zonenhunde',
		'mmyz-monster-zonerats': 'Zonenratten',
		'mmyz-monster-zonespider': 'Zonenspinne',
		'mmyz-monster-zonewasps': 'Zonenwespen',
		'mmyz-monster-zoneleeches': 'Zonenegel',
		'mgla-creeper': 'Creeper',
		'wmyz-assaultrifle': 'Assault Rifle',
		'wmyz-baseballbat-spiked': 'Baseballschläger mit Nägeln',
		'wmyz-baseballbat-wooden': 'Baseballschläger',
		'wmyz-bicyclechain': 'Bicycle Chain',
		'wmyz-bluntinstrument': 'Blunt Instrument',
		'wmyz-bow': 'Bogen',
		'wmyz-brassknuckles': 'Brass Knuckles',
		'wmyz-chainknife': 'Chain Knife',
		'wmyz-chainsaw': 'Chainsaw',
		'wmyz-compoundbow': 'Compound Bow',
		'wmyz-crossbow': 'Crossbow',
		'wmyz-decapitator': 'Decapitator',
		'wmyz-emprifle': 'EMP Rifle',
		'wmyz-flamethrower': 'Flamethrower',
		'wmyz-flaregun': 'Flare Gun',
		'wmyz-gausspistol': 'Gauss Pistol',
		'wmyz-gaussrifle': 'Gauss Rifle',
		'wmyz-grenade-energy': 'Energy Grenade',
		'wmyz-grenade-frag': 'Frag Grenade',
		'wmyz-grenade-hand': 'Hand Grenade',
		'wmyz-gyrojetcarbine': 'Gyrojet Carbine',
		'wmyz-gyrojetpistol': 'Gyrojet Pistol',
		'wmyz-harpoonpistol': 'Harpoon Pistol',
		'wmyz-harpoonrifle': 'Harpoon Rifle',
		'wmyz-huntingrifle': 'Hunting Rifle',
		'wmyz-improvisedexplosive': 'Improvised Explosive',
		'wmyz-katana': 'Katana',
		'wmyz-lasercannon': 'Laser Cannon',
		'wmyz-laserpistol': 'Laser Pistol',
		'wmyz-laserrifle': 'Laser Rifle',
		'wmyz-laserwelder': 'Laser Welder',
		'wmyz-machete': 'Machete',
		'wmyz-maserpistol': 'Maser Pistol',
		'wmyz-molotovcocktail': 'Molotov Cocktail',
		'wmyz-nailgun': 'Nail Gun',
		'wmyz-oldagespeargun': 'Old Age Speargun',
		'wmyz-pickaxe': 'Pick Axe',
		'wmyz-plasmarifle': 'Plasma Rifle',
		'wmyz-pulselaser': 'Pulse Laser',
		'wmyz-revolver': 'Revolver',
		'wmyz-rock-thrown': 'Thrown Rock',
		'wmyz-rustychain': 'Rusty Chain',
		'wmyz-scrapaxe': 'Schrott-Axt',
		'wmyz-scrapcannon': 'Schrottkanone',
		'wmyz-scrapcrossbow': 'Scrap Crossbow',
		'wmyz-scrapderringer': 'Schrott-Taschenpistole',
		'wmyz-scrapflamethrower': 'Scrap Flamethrower',
		'wmyz-scrapknife': 'Scrap Knife',
		'wmyz-scrapmachete': 'Scrap Machete',
		'wmyz-scrappistol': 'Scrap Pistol',
		'wmyz-scraprifle': 'Scrap Rifle',
		'wmyz-scrapshiv': 'Scrap Shiv/Shank',
		'wmyz-scrapshotgun': 'Scrap Shotgun',
		'wmyz-scrapsledgehammer': 'Scrap Sledgehammer',
		'wmyz-scrapspear': 'Schrott-Speer',
		'wmyz-semiautopistol': 'Semi-auto Pistol',
		'wmyz-shotgun-doublebarrel': 'Double-barreled Shotgun',
		'wmyz-shotgun-pumpaction': 'Pump-action Shotgun',
		'wmyz-slingshot': 'Steinschleuder',
		'wmyz-studdedwoodenclub': 'Studded Wooden Club',
		'wmyz-stunbaton': 'Stun Baton',
		'wmyz-stungun': 'Stun Gun',
		'wmyz-tasergun': 'Taser Gun',
		'wmyz-ultrasoniccarbine': 'Ultrasonic Carbine',
		'wmyz-unarmed': 'Unarmed',
		'wmyz-vibroknife': 'Vibroknife',
		'wmyz-whaleharpoon': 'Whale Harpoon',
		'wmyz-wrench': 'Wrench',
	},
};

module.exports.__ = (text, locale) => {
	const loc = LOCALES[locale] ? locale : 'en';
	if (LOCALES[loc][text]) return LOCALES[loc][text];
	else if (LOCALES.en[text]) return LOCALES.en[text];
	return text;
};