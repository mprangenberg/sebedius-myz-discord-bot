const { SUPPORTED_GAMES } = require('./constants');
const Config = require('../config.json');

const LOCALES = {
	en: {
		none: 'none',
		damage: 'Damage',
		name: 'Name',
		aliases: 'Aliases',
		usage: 'Usage',
		description: 'Description',
		table: 'Table',
		possessives: '\'s',
		ability: 'Ability',
		abilities: 'Abilities',
		attack: 'Attack',
		attacks: 'Attacks',
		attribute: 'Attribute',
		attributes: 'Attributes',
		armor: 'Armor',
		'armor-rating': 'Armor Rating',
		artifact: 'Artifact',
		body: 'Body',
		demon: 'Demon',
		'signature-attacks': 'Signature Attacks',
		skill: 'Skill',
		skills: 'Skills',
		source: 'Source',
		special: 'Special',
		weakness: 'Weakness',
		weaknesses: 'Weaknesses',
		clip: 'Clip',
		fullauto: 'Fullauto',
		light: 'Light',
		heavy: 'Heavy',
		energy: 'Energy',
		'armor-piercing': 'Armor Piercing',
		explosive: 'Explosive',
		'blast-power': 'Blast Power',
		rot: 'Rot',
		mounted: 'Mounted',
		fire: 'Fire',
		barrels: 'Barrels',
		'jury-rigged': 'Jury-Rigged',
		base: 'Base',
		'base-dice': 'Base Dice',
		'base-power-level': 'Base Power Level',
		overcharging: 'Overcharging',
		'magic-mishap': 'Magic Mishap',
		permanent: 'Permanent',
		'permanent-effects': 'These effects are permanent.',
		'healing-time': 'Healing Time',
		'healing-time-until-end-text': 'days until end of effects.',
		lethality: 'Lethality',
		'selection-title': 'Multiple Matches Found',
		'selection-description': 'Which one were you looking for?',
		'selection-instructions': 'Type your response in the channel you called the command. '
			+ 'This message was PMed to you to hide the choices (i.e. the monster name).',
		success: 'Success',
		successes: 'Successes',
		trauma: 'Trauma',
		traumas: 'Traumas',
		'gear-damage': 'Gear Damage',
		'extra-hit': 'Extra Hit',
		'extra-hits': 'Extra Hits',
		suppression: 'Suppression',
		suppressions: 'Suppressions',
		mishap: 'Mishap',
		panic: 'Panic',
		details: 'Details',
		pushed: 'Pushed',
		initiative: 'Initiative',
		pride: 'Pride',
		page: 'page',
		instructions: 'Instructions',
		'attribute-myz-strength': 'Strength',
		'attribute-myz-agility': 'Agility',
		'attribute-myz-wits': 'Wits',
		'attribute-myz-empathy': 'Empathy',
		'attribute-fbl-strength': 'Strength',
		'attribute-fbl-agility': 'Agility',
		'attribute-fbl-wits': 'Wits',
		'attribute-fbl-empathy': 'Empathy',
		'skill-myz-endure': 'Endure',
		'skill-myz-force': 'Force',
		'skill-myz-fight': 'Fight',
		'skill-myz-sneak': 'Sneak',
		'skill-myz-sneak-underground': 'Sneak underground',
		'skill-myz-move': 'Move',
		'skill-myz-move-underground': 'Move underground',
		'skill-myz-move-underwater': 'Move underwater',
		'skill-myz-shoot': 'Shoot',
		'skill-myz-scout': 'Scout',
		'skill-myz-comprehend': 'Comprehend',
		'skill-myz-know-the-zone': 'Know the Zone',
		'skill-myz-sense-emotion': 'Sense Emotion',
		'skill-myz-manipulate': 'Manipulate',
		'skill-myz-heal': 'Heal',
		'skill-myz-jury-rig': 'Zusammenschustern',
		'skill-fbl-might': 'Might',
		'skill-fbl-endurance': 'Endurance',
		'skill-fbl-melee': 'Melee',
		'skill-fbl-crafting': 'Crafting',
		'skill-fbl-sneak': 'Stealth',
		'skill-fbl-sleightofhand': 'Sleight of Hand',
		'skill-fbl-move': 'Move',
		'skill-fbl-marksmanship': 'Marksmanship',
		'skill-fbl-scout': 'Scouting',
		'skill-fbl-lore': 'Lore',
		'skill-fbl-survival': 'Survival',
		'skill-fbl-insight': 'Insight',
		'skill-fbl-manipulation': 'Manipulation',
		'skill-fbl-performance': 'Performance',
		'skill-fbl-healing': 'Healing',
		'skill-fbl-animalhandling': 'Animal Handling',
		range: 'Range',
		'range-myz-arm': 'Arm',
		'range-myz-near': 'Near',
		'range-myz-short': 'Short',
		'range-myz-long': 'Long',
		'range-myz-distant': 'Distant',
		'range-fbl-arm': 'Arm',
		'range-fbl-near': 'Near',
		'range-fbl-short': 'Short',
		'range-fbl-long': 'Long',
		'range-fbl-distant': 'Distant',
		'range-coriolis-close': 'Close',
		'range-coriolis-short': 'Short',
		'range-coriolis-long': 'Long',
		'range-coriolis-extreme': 'Extreme',
		'range-alien-engaged': 'Engaged',
		'range-alien-short': 'Short',
		'range-alien-medium': 'Medium',
		'range-alien-long': 'Long',
		'range-alien-extreme': 'Extreme',
		'carkthreat-description': 'Draws a random threat against the Ark.',
		'carkthreat-title': 'Threat Against the Ark',
		'cartifact-description': 'Draws a random artifact from the MYZ core rulebook. Available additional sources are (combine one or more):'
			+ '\n• `myz` – Mutant: Year Zero (default if none are specified)'
			+ '\n• `gla` – Mutant: GenLab Alpha'
			+ '\n• `mek` – Mutant: Mechatron'
			+ '\n• `ely` – Mutant: Elysium'
			+ '\n• `astra` – Mutant: Ad Astra'
			+ '\nMetaplot items are removed by default. Use `meta` to add them to the stack.'
			+ '\nUse `all` to pick from all book sources (including metaplot items).',
		'cartifact-not-found': 'I\'m sorry, no artifact was found within this unknown package!',
		'cattack-description': 'Rolls a random attack from a monster.',
		'cattack-moredescriptions': [
			[
				'Arguments',
				`• \`game\` – Specifies the game you are using. Can be omitted.
				• \`name\` – Specifies the monster you want to fetch.
				• \`number\` – Specifies the desired attack instead of choosing a random one.
				• \`-private|-p\` – Sends the message in a private DM.`,
			],
			[
				'Reaction Menu',
				`• Click ⚔️ to roll the dice of the attack.
				• Click ☠️ to roll the critical (some attacks have fixed crits, others are random).
				• Click ❌ to stop the reaction menu.`,
			],
		],
		'cbr-description': 'Prints a scene break.',
		'ccast-description': 'Cast a spell. Use the `-mishap` parameter if you want a specific mishap.',
		'ccast-title': 'Spell Casting',
		'ccast-invalid-mishap-reference': 'Invalid Magic Mishap\'s reference!',
		'ccast-invalid-power-level': 'Invalid Power Level!',
		'ccharacter-description': 'Manages your characters.',
		'ccharacter-moredescriptions': [
			[
				'Subcommands',
				'• `sheet` – Prints the embed sheet of your currently active character.'
				+ '\n• `list` – Lists your characters.'
				+ '\n• `update [-v]` – Updates your current character sheet. The `-v` argument displays an embed sheet.'
				+ '\n• `delete` – Deletes a character.',
			],
		],
		'ccolony-description': 'Generates a colonized planet for the Alien RPG.',
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
		'ccrit-too-many-arguments': 'You typed too many arguments! See `help crit` for the correct usage.',
		'ccrit-no-table-for-game-start': 'There is no critical table for the',
		'ccrit-no-table-for-game-end': 'roleplaying game in my database',
		'ccrit-table-not-found-start': 'There is no',
		'ccrit-table-not-found-end': 'critical table for',
		'ccrit-not-found': 'The critical injury wasn\'t found',
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
		'cdemon-description': 'Generates a random demon according to the tables found in'
			+ ' the *Forbidden Lands - Gamemaster\'s Guide*.'
			+ '\nNote: all bonuses from the demon\'s abilities are not computed into its stats/armor/skills.'
			+ '\nNote: the attacks output is not optimal on a small screen (smartphone).',
		'croll-description': 'Rolls dice for any Year Zero roleplaying game.',
		'croll-moredescriptions': [
			[
				'Select [game]',
				'This argument is used to specify the skin of the rolled dice.'
				+ ' Can be omitted if you set it with `!setconf game [default game]` or if you use one of the shortcut commands'
				+ `\n Choices: \`${SUPPORTED_GAMES.join('`, `')}\`.`,
			],
			[
				'Rolling Simple Dice',
				'`roll d6|d66|d666` – Rolls a D6, D66, or D666.'
				+ '\n`roll XdY±Z` – Rolls X dice of range Y, modified by Z.'
				+ '\n`roll init` – Rolls initiative (one D6).',
			],
			[
				'Rolling Year Zero Dice',
				'Use a number in any combinations with these letters:'
				+ '\n• `b` – Base dice (attributes)'
				+ '\n• `s` – Skill dice (or Stress dice for *Alien RPG*)'
				+ '\n• `n` – Negative dice (*MYZ* and *FBL* only)'
				+ '\n• `g` – Gear dice (*MYZ* and *FBL* only)'
				+ '\n• `d` – Generic dice (or Ammo dice for *Twilight 2000*)'
				+ '\n• `a` – Ammo dice (*Twilight 2000* only)'
				+ '\n• `a8` – D8 Artifact die (see *FBL*)'
				+ '\n• `a10` – D10 Artifact die (see *FBL*)'
				+ '\n• `a12` – D12 Artifact die (see *FBL*)'
				+ '\n\n*Example:* `roll 5b 3s 2g`',
			],
			[
				'Additional Arguments',
				'Additional options for the roll:'
				+ '\n`-name|-n|-#|# <name>` : Defines a name for the roll.'
				+ '\n`-push|-p <number>` : Changes the maximum number of allowed pushes.'
				+ '\n`-fullauto|-fa|-f` : "Full-auto", unlimited number of pushes (max 10).'
				+ '\n`-mod <±X>`: Applies a difficulty modifier of `+X` or `-X` to the roll.'
				+ '\n`-pride` : Adds a D12 Artifact Die to the roll.'
				+ '\n`-nerves` : Applies the talent *Nerves of Steel* (Alien RPG).'
				+ '\n`-minpanic <value>` : Adjusts a minimum treshold for multiple consecutive panic effects (Alien RPG).'
				+ '\n`-lang <language_code>` : Changes the desired language.',
			],
			[
				'More Info',
				`To push the roll, click the ${Config.commands.roll.pushIcon} reaction icon under the message.`
				+ ' The push option for the dice pool roll is available for 2 minutes. Only the user who initially rolled the dice can push them.'
				+ '\nTo clear the reaction menu, click the ❌ reaction icon.'
				+ '\nCoriolis has more push options: 🙏 (Praying the Icons, +1D) and 🕌 (in a chapel, +2D).'
				+ `\nMax ${Config.commands.roll.max} dice can be rolled at once. If you try to roll more, it won't happen.`,
			],
			[
				'See Also',
				'The following commands are shortcuts if you don\'t want to specify the [game] parameter each time.'
				+ '\n`rm` – Rolls *Mutant: Year Zero* dice.'
				+ '\n`rf` – Rolls *Forbidden Lands* dice.'
				+ '\n`rt` – Rolls *Tales From The Loop* dice.'
				+ '\n`rc` – Rolls *Coriolis* dice.'
				+ '\n`ra` – Rolls *Alien RPG* dice.'
				+ '\n`rv` – Rolls *Vaesen* dice.'
				+ '\n`rw` – Rolls *Twilight 2000 4E* dice.',
			],
		],
		'croll-ammo-spent': 'Ammo Spent',
		'croll-generic-roll': 'Generic Roll',
		'croll-single-roll': 'Single D6 / D66 / D666 Roll',
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
		'mgla-creeper-model-two': 'Creeper Model II "Webshooter"',
		'mgla-creeper-model-three': 'Creeper Model III "Black Widow"',
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
		name: 'Name',
		aliases: 'Aliase',
		usage: 'Verwendung',
		description: 'Beschreibung',
		table: 'Tabelle',
		possessives: 's',
		ability: 'Fähigkeit',
		abilities: 'Fähigkeiten',
		attack: 'Angriff',
		attacks: 'Angriffe',
		attribute: 'Attribut',
		attributes: 'Attribute',
		armor: 'Rüstung',
		'armor-rating': 'Rüstungswert',
		artifact: 'Artefakt',
		body: 'Körper',
		demon: 'Dämon',
		'signature-attacks': 'Angriffe',
		skill: 'Fertigkeit',
		skills: 'Fertigkeiten',
		source: 'Quelle',
		special: 'Spezial',
		weakness: 'Schwäche',
		weaknesses: 'Schwächen',
		clip: 'Magazin',
		fullauto: 'Automatikfeuer',
		light: 'Leicht',
		heavy: 'Schwer',
		energy: 'Energie',
		'armor-piercing': 'Panzerbrechend',
		explosive: 'Explosiv',
		'blast-power': 'Sprengkraft',
		rot: 'Fäulnis',
		mounted: 'Montiert',
		fire: 'Feuer',
		barrels: 'Läufe',
		'jury-rigged': 'Gebastelt',
		base: 'Basis',
		'base-dice': 'Basiswürfel',
		'base-power-level': 'Basis-Machtstufe',
		overcharging: 'Überladen',
		'magic-mishap': 'Magisches Missgeschick',
		permanent: 'Permanent',
		'permanent-effects': 'Diese Effekte sind permanent.',
		'healing-time': 'Heilungsdauer',
		'healing-time-until-end-text': 'Tage bis zum Ende der Effekte.',
		lethality: 'Tödlich',
		'selection-title': 'Mehrere Einträge gefunden',
		'selection-description': 'Nach welchem hast du gesucht?',
		'selection-instructions': 'Schreibe deine Antwort in den Kanal, aus welchem du diesen Befehl aufgrufen hast. '
			+ 'Diese Nachricht hast du als Direktnachricht erhalten um die Auswahlmöglichkeiten zu verstecken (z.B. die Monsternamen).',
		success: 'Erfolg',
		successes: 'Erfolge',
		trauma: 'Trauma',
		traumas: 'Traumas',
		'gear-damage': 'Ausrüstungsschaden',
		'extra-hit': 'Extra Treffer',
		'extra-hits': 'Extra Treffer',
		suppression: 'Suppression',
		suppressions: 'Suppressions',
		mishap: 'Missgeschick',
		panic: 'Panik',
		details: 'Details',
		pushed: 'Strapaziert',
		initiative: 'Initiative',
		pride: 'Stolz',
		page: 'Seite',
		instructions: 'Anleitung',
		'attribute-myz-strength': 'Stärke',
		'attribute-myz-agility': 'Geschicklichkeit',
		'attribute-myz-wits': 'Verstand',
		'attribute-myz-empathy': 'Empathie',
		'attribute-fbl-strength': 'Stärke',
		'attribute-fbl-agility': 'Geschicklichkeit',
		'attribute-fbl-wits': 'Verstand',
		'attribute-fbl-empathy': 'Empathie',
		'skill-myz-endure': 'Erdulden',
		'skill-myz-force': 'Kraftakt',
		'skill-myz-fight': 'Prügeln',
		'skill-myz-sneak': 'Schleichen',
		'skill-myz-sneak-underground': 'Schleichen (unterirdisch)',
		'skill-myz-move': 'Bewegen',
		'skill-myz-move-underground': 'Bewegen (unterirdisch)',
		'skill-myz-move-underwater': 'Bewegen (Unterwasser)',
		'skill-myz-shoot': 'Schießen',
		'skill-myz-scout': 'Auskundschaften',
		'skill-myz-comprehend': 'Begreifen',
		'skill-myz-know-the-zone': 'Zonenkunde',
		'skill-myz-sense-emotion': 'Emotionsgespür',
		'skill-myz-manipulate': 'Manipulieren',
		'skill-myz-heal': 'Heilen',
		'skill-myz-jury-rig': 'Zusammenschustern',
		'skill-fbl-might': 'Kraft',
		'skill-fbl-endurance': 'Stärke',
		'skill-fbl-melee': 'Nahkampf',
		'skill-fbl-crafting': 'Handwerk',
		'skill-fbl-sneak': 'Heimlichkeit',
		'skill-fbl-sleightofhand': 'Fingerfertigkeit',
		'skill-fbl-move': 'Bewegen',
		'skill-fbl-marksmanship': 'Fernkampf',
		'skill-fbl-scout': 'Auskundschaften',
		'skill-fbl-lore': 'Wissen',
		'skill-fbl-survival': 'Überleben',
		'skill-fbl-insight': 'Menschenkenntnis',
		'skill-fbl-manipulation': 'Manipulation',
		'skill-fbl-performance': 'Darbietung',
		'skill-fbl-healing': 'Heilen',
		'skill-fbl-animalhandling': 'Tierkunde',
		range: 'Reichweite',
		'range-myz-arm': 'Arm',
		'range-myz-near': 'Nah',
		'range-myz-short': 'Kurz',
		'range-myz-long': 'Weit',
		'range-myz-distant': 'Extrem',
		'range-fbl-arm': 'Arm',
		'range-fbl-near': 'Nah',
		'range-fbl-short': 'Kurz',
		'range-fbl-long': 'Weit',
		'range-fbl-distant': 'Extrem',
		'range-coriolis-close': 'Nah',
		'range-coriolis-short': 'Kurz',
		'range-coriolis-long': 'Weit',
		'range-coriolis-extreme': 'Extrem',
		'range-alien-engaged': 'Kontakt',
		'range-alien-short': 'Kurz',
		'range-alien-medium': 'Mittel',
		'range-alien-long': 'Weit',
		'range-alien-extreme': 'Extrem',
		'carkthreat-description': 'Zieht eine zufällige Bedrohung für die Arche.',
		'carkthreat-title': 'Bedrohung für die Arche',
		'cartifact-description': 'Zieht ein zufälliges Artefakt aus dem MYZ Grundregelwerk. Weitere verfügbare Quellbücher sind (es können mehrere kombiniert werden):'
			+ '\n• `myz` – Mutant: Jahr Null (Standard falls nichts angegeben wurde)'
			+ '\n• `gla` – Mutant: Genlabor Alpha'
			+ '\n• `mek` – Mutant: Mechatron'
			+ '\n• `ely` – Mutant: Elysium'
			+ '\n• `astra` – Mutant: Ad Astra'
			+ '\nMetaplot-Gegenstände sind standardmäßig nicht enthalten. Nutze `meta` um sie dem Stapel hinzuzufügen.'
			+ '\nMit `all` wird aus allen Quellenbüchern gezogen (inklusive Metaplot-Gegenständen).',
		'cartifact-not-found': 'Entschuldigung, es wurde kein Artefakt in diesem unbekannten Quellenbuch gefunden!',
		'cattack-description': 'Würfelt einen zufälligen Angriff eines Monsters.',
		'cattack-moredescriptions': [
			[
				'Parameter',
				`• \`game\` – Gibt das genutzte Spiel an. Kann ausgelassen werden.
				• \`name\` – Gibt das Monster an, das abgerufen werden soll.
				• \`number\` – Gibt den gewünschten Angriff an, anstatt eines zufälligen.
				• \`-private|-p\` – Sendet das Ergebnis in einer Direktnachricht.`,
			],
			[
				'Reaktionenmenü',
				`• Klicke ⚔️ um die Angrifsswürfel zu werden.
				• Klicke ☠️ um die kritische Verletzung zu werfen (manche Angriffe haben feste Werte, andere sind zufällig).
				• Klicke ❌ um das Reaktionenmenü zu beenden.`,
			],
		],
		'cbr-description': 'Zeigt einen Szenentrenner an (Leerzeile).',
		'ccast-description': 'Einen Zauber wirken. Mit dem `-mishap`-Parameter kann ein spezifisches magisches Missgeschick ausgewählt werden.',
		'ccast-title': 'Zauber wirken',
		'ccast-invalid-mishap-reference': 'Ungültiger \'Magisches Missgeschickt\'-Verweis!',
		'ccast-invalid-power-level': 'Ungültige Machtstufe!',
		'ccharacter-description': 'Verwaltet deine Charaktere.',
		'ccharacter-moredescriptions': [
			[
				'Unterbefehle',
				'• `sheet` – Zeigt das Charakterblatt deines aktuell aktiven Charakters an.'
				+ '\n• `list` – Listet deine Charaktere auf.'
				+ '\n• `update [-v]` – Aktualisiert dein aktuelles Charakterblatt. Der `-v` Parameter zeigt das Charakterblatt an.'
				+ '\n• `delete` – Löscht einen Charakter.',
			],
		],
		'ccolony-description': 'Generiert einen kolonisierten Planeten für das Alien Rollenspiel.',
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
		'ccrit-too-many-arguments': 'Es wurden zu viele Parameter angegeben! Siehe `help crit` für die korrekte Verwendung.',
		'ccrit-no-table-for-game-start': 'Es gibt keine Tabelle mit kritischen Verletzung für das',
		'ccrit-no-table-for-game-end': 'Rollenspiel in meiner Datenbank',
		'ccrit-table-not-found-start': 'Es gibt keine',
		'ccrit-table-not-found-end': 'Tabelle mit Kritischen Verletzungen für',
		'ccrit-not-found': 'Die kritische Verletzung wurde nicht gefunden',
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
		'cdemon-description': 'Erzeugt einen zufälligen Dämon anhand der Tabellen aus dem'
			+ ' *Verbotene Lande - Spielleiterhandbuch*.'
			+ '\nHinweis: Alle Boni aus den Fähigkeiten des Dämons werden nicht in dessen Werte/Rüstung/Fähigkeiten einberechnet.'
			+ '\nHinweis: Die Anzeige der Angriffe ist nicht optimiert für kleine Bildschirme (z.B. Smartphones).',
		'croll-description': 'Wirft Würfel für ein beliebiges Year Zero Rollspiel.',
		'croll-moredescriptions': [
			[
				'Wähle Spiel mit [game]',
				'Dieser Parameter wird genutzt um das Aussehen der Würfel zu ändern.'
				+ ' Kann ausgelassen werden, falls das Spiel mit `!setconf game [default game]` gesetzt wurde oder eines der spezifischen Kürzel genutzt wird.'
				+ `\n Möglichkeiten: \`${SUPPORTED_GAMES.join('`, `')}\`.`,
			],
			[
				'Einfache Würfel werfen',
				'`roll d6|d66|d666` – Würfelt einen W6, W66, oder W666.'
				+ '\n`roll XdY±Z` – Wirft X Würfel der Augenzahl Y, modifiziert durch Z.'
				+ '\n`roll init` – Würfelt Initiative (einen W6).',
			],
			[
				'Year Zero Würfel werfen',
				'Benutze eine beliebige Kombination mit diesen Buchstaben:'
				+ '\n• `b` – Basiswürfel (Attribute)'
				+ '\n• `s` – Fertigkeitswürfel (oder Stresswürfel für das *Alien RPG*)'
				+ '\n• `n` – Negativwürfel (nur *MYZ* und *FBL*)'
				+ '\n• `g` – Ausrüstungs-/Waffenwürfel (nur *MYZ* und *FBL*)'
				+ '\n• `d` – Generische Würfel (oder Munitionswürfel für *Twilight 2000*)'
				+ '\n• `a` – Munitionswürfel (nur *Twilight 2000*)'
				+ '\n• `a8` – W8 Artefaktwürfel (siehe *FBL*)'
				+ '\n• `a10` – W10 Artefaktwürfel (siehe *FBL*)'
				+ '\n• `a12` – W12 Artefaktwürfel (siehe *FBL*)'
				+ '\n\n*Beispiel:* `roll 5b 3s 2g`',
			],
			[
				'Zusätzliche Parameter',
				'Zusätzliche Optionen für den Wurf:'
				+ '\n`-name|-n|-#|# <name>` : Legt einen Namen für den Wurf fest.'
				+ '\n`-push|-p <number>` : Ändert die maximale Anzahl an erlaubten Strapazierwürfen.'
				+ '\n`-fullauto|-fa|-f` : "Full-auto", unbegrenzte Anzahl an Strapazierwürfen (max 10).'
				+ '\n`-mod <±X>`: Verändert das Ergebnis mit einem Schwierigkeitsmodifizierer von `+X` oder `-X`.'
				+ '\n`-pride` : Fügt einen W12-Artefaktwürfel zum Wurf hinzu.'
				+ '\n`-nerves` : Nutzt das Talent *Nerven aus Stahl* (Alien RPG).'
				+ '\n`-minpanic <value>` : Verändert den minimalen Schwellenwert für mehrere aufeinanderfolgende Panik-Effekte (Alien RPG).'
				+ '\n`-lang <language_code>` : Ändert die gewünschte Sprache.',
			],
			[
				'Mehr Info',
				`Um einen Wurf zu strapazieren, klicke das ${Config.commands.roll.pushIcon} Reaktionssymbol unter der Nachricht.`
				+ ' Die Strapazieroption für den Würfelwurf ist 2 Minuten lang verfügbar. Nur der Benutzer, der die Würfel geworfen hat kann den Wurf strapazieren.'
				+ '\nUm das Reaktionsmenü zu entfernen, klicke das ❌ Reaktionssymbol.'
				+ '\nCoriolis hat mehr Strapazieroptionen: 🙏 (Zu den Ikonen beten, +1W) und 🕌 (in einer Kapelle, +2W).'
				+ `\nMaximal ${Config.commands.roll.max} Würfel können gleichzeitig geworfen werden. Versuchst du mehr, wird nichts passieren.`,
			],
			[
				'Siehe auch',
				'Die folgenden Befehle sind Kürzel, falls du nicht den Spiel-Parameter [game] jedes Mal angeben möchtest.'
				+ '\n`rm` – Wirft *Mutant: Jahr Null* Würfel.'
				+ '\n`rf` – Wirft *Verbotene Lande* Würfel.'
				+ '\n`rt` – Wirft *Tales From The Loop* Würfel.'
				+ '\n`rc` – Wirft *Coriolis* Würfel.'
				+ '\n`ra` – Wirft *Alien RPG* Würfel.'
				+ '\n`rv` – Wirft *Vaesen* Würfel.'
				+ '\n`rw` – Wirft *Twilight 2000 4E* Würfel.',
			],
		],
		'croll-ammo-spent': 'Ausgegebene Munition',
		'croll-generic-roll': 'Generischer Wurf',
		'croll-single-roll': 'Einzelner W6 / W66 / W666 Wurf',
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
		'mgla-creeper': 'Kriecher',
		'mgla-creeper-model-two': 'Kriecher Modell II "Netzschleuder"',
		'mgla-creeper-model-three': 'Kriecher Modell III "Schwarze Witwe"',
		'wmyz-assaultrifle': 'Sturmgewehr',
		'wmyz-baseballbat-spiked': 'Baseballschläger mit Nägeln',
		'wmyz-baseballbat-wooden': 'Baseballschläger',
		'wmyz-bicyclechain': 'Fahrradkette',
		'wmyz-bluntinstrument': 'Stumpfer Gegenstand',
		'wmyz-bow': 'Bogen',
		'wmyz-brassknuckles': 'Schlagring',
		'wmyz-chainknife': 'Kettenmesser',
		'wmyz-chainsaw': 'Kettensäge',
		'wmyz-compoundbow': 'Kompositbogen',
		'wmyz-crossbow': 'Armbrust',
		'wmyz-decapitator': 'Enthaupter',
		'wmyz-emprifle': 'EMP-Gewehr',
		'wmyz-flamethrower': 'Flammenwerfer',
		'wmyz-flaregun': 'Leuchtpistole',
		'wmyz-gausspistol': 'Gauss-Pistole',
		'wmyz-gaussrifle': 'Gauss-Gewehr',
		'wmyz-grenade-energy': 'Energiegranate',
		'wmyz-grenade-frag': 'Splittergranate',
		'wmyz-grenade-hand': 'Handgranate',
		'wmyz-gyrojetcarbine': 'Gyrojet-Karabiner',
		'wmyz-gyrojetpistol': 'Gyrojet-Pistole',
		'wmyz-harpoonpistol': 'Harpunenpistole',
		'wmyz-harpoonrifle': 'Harpunengewehr',
		'wmyz-huntingrifle': 'Jagdgewehr',
		'wmyz-improvisedexplosive': 'Improvisierte Brandbombe',
		'wmyz-katana': 'Katana',
		'wmyz-lasercannon': 'Lasekanone',
		'wmyz-laserpistol': 'Laserpistole',
		'wmyz-laserrifle': 'Lasergewehr',
		'wmyz-laserwelder': 'Laserschweißer',
		'wmyz-machete': 'Machete',
		'wmyz-maserpistol': 'Maser-Pistole',
		'wmyz-molotovcocktail': 'Molotov Cocktail',
		'wmyz-nailgun': 'Nagelpistole',
		'wmyz-oldagespeargun': 'Vorzeit-Harpune',
		'wmyz-pickaxe': 'Spitzhacke',
		'wmyz-plasmarifle': 'Plasmagewehr',
		'wmyz-pulselaser': 'Impulslaser',
		'wmyz-revolver': 'Revolver',
		'wmyz-rock-thrown': 'Geworfener Stein',
		'wmyz-rustychain': 'Rostige Kette',
		'wmyz-scrapaxe': 'Schrottaxt',
		'wmyz-scrapcannon': 'Schrottkanone',
		'wmyz-scrapcrossbow': 'Schrott-Armbrust',
		'wmyz-scrapderringer': 'Schrott-Taschenpistole',
		'wmyz-scrapflamethrower': 'Schrott-Flammenwerfer',
		'wmyz-scrapknife': 'Schrottmesser',
		'wmyz-scrapmachete': 'Schrottmachete',
		'wmyz-scrappistol': 'Schrottknarre',
		'wmyz-scraprifle': 'Rohrgewehr',
		'wmyz-scrapshiv': 'Scharfer/Spitzer Gegenstand',
		'wmyz-scrapshotgun': 'Schrott-Schrotflinte',
		'wmyz-scrapsledgehammer': 'Schrott-Vorschlaghammer',
		'wmyz-scrapspear': 'Schrott-Speer',
		'wmyz-semiautopistol': 'Halbautomatische Pistole',
		'wmyz-shotgun-doublebarrel': 'Doppelläufige Schrotflinte',
		'wmyz-shotgun-pumpaction': 'Pump-action Schrotflinte',
		'wmyz-slingshot': 'Steinschleuder',
		'wmyz-studdedwoodenclub': 'Mit Nägeln besetzer Holzschläger',
		'wmyz-stunbaton': 'Betäubungsschlagstock',
		'wmyz-stungun': 'Betäubungspistole',
		'wmyz-tasergun': 'Taser',
		'wmyz-ultrasoniccarbine': 'Ultraschallkarabiner',
		'wmyz-unarmed': 'Waffenlos',
		'wmyz-vibroknife': 'Vibromesser',
		'wmyz-whaleharpoon': 'Walharpune',
		'wmyz-wrench': 'Schraubenschlüssel',
	},
};

module.exports.__ = (text, locale) => {
	const loc = LOCALES[locale] ? locale : 'en';
	if (LOCALES[loc][text]) return LOCALES[loc][text];
	else if (LOCALES.en[text]) return LOCALES.en[text];
	return text;
};