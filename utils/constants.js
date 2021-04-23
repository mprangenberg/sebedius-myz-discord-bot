module.exports = {
	SUPPORTED_GAMES: ['myz', 'fbl', 'tales', 'coriolis', 'alien', 'vaesen', 't2k'],
	SUPPORTED_LANGS: {
		en: 'English',
		de: 'Deutsch',
		// fr: 'Français',
		// sv: 'Svenska',
	},
	// Languages where the capitalization should not be changed in text generators,
	// like the fbl legends where otherwise everything is changed to lowercase.
	KEEP_CAPITALIZATION_LANGS: ['de'],
	DAMAGE_TYPES: ['damage', 'slash', 'blunt', 'stab'],
	DAMAGE_TYPES_ABBREVIATIONS: ['dmg', 'sl', 'bl', 'st'],
	ATTRIBUTES: [
		'strength', 'servos', 'physique', 'fitness',
		'agility', 'stability', 'precision', 'dexterity',
		'wits', 'processor', 'logic', 'intel', 'intelligence',
		'empathy', 'instinct', 'network',
	],
	ATTRIBUTE_STR: ['strength', 'servos', 'physique', 'fitness'],
	ATTRIBUTE_AGI: ['agility', 'stability', 'precision', 'dexterity'],
	ATTRIBUTE_INT: ['wits', 'processor', 'logic', 'intel', 'intelligence'],
	ATTRIBUTE_EMP: ['empathy', 'instinct', 'network'],
	PRIMITIVE_ATTRIBUTES: ['str', 'agi', 'int', 'emp'],
	PRIMITIVE_ATTRIBUTE_MAP: {
		'strength': 'str',
		'servos': 'str',
		'physique': 'str',
		'fitness': 'str',
		'agility': 'agi',
		'stability': 'agi',
		'precision': 'agi',
		'dexterity': 'agi',
		'wits': 'int',
		'processor': 'int',
		'logic': 'int',
		'intel': 'int',
		'intelligence': 'int',
		'empathy': 'emp',
		'instinct': 'emp',
		'network': 'emp',
	},
	SKILL_MAP: {
		'fight': 'str',
		'shoot': 'agi',
		'move': 'agi',
		'comprehend': 'int',
		'heal': 'emp',
		'might': 'str',
		'endurance': 'str',
		'melee': 'str',
		'crafting': 'str',
		'stealth': 'agi',
		'sleightOfHand': 'agi',
		// 'move': 'agi',
		'marksmanship': 'agi',
		'scouting': 'int',
		'lore': 'int',
		'survival': 'int',
		'insight': 'int',
		'manipulation': 'emp',
		'performance': 'emp',
		'healing': 'emp',
		'animalHandling': 'emp',
	},
	RANGES: {
		myz: ['arm', 'near', 'short', 'long', 'distant'],
		fbl: ['arm', 'near', 'short', 'long', 'distant'],
		coriolis: ['close', 'short', 'long', 'extreme'],
		alien: ['engaged', 'short', 'medium', 'long', 'extreme'],
		vaesen: ['0', '1', '2', '3', '4'],
		t2k: ['0', '1', '2', '3', '4', '5', '6', '7'],
	},
	WEAPON_FEATURES: {
		boolean: [
			'artifact', 'clip', 'energy', 'explosive', 'fire',
			'fullauto', 'gyrojet', 'heavy', 'juryrigged', 'mounted',
			'light', 'rot', 'tiny',
		],
		number: ['armor-piercing', 'barrels', 'blast-power'],
	},
	SOURCE_MAP: {
		myz: 'Mutant: Year Zero',
		gla: 'Mutant: GenLab Alpha',
		mec: 'Mutant: Mechatron',
		mek: 'Mutant: Mechatron',
		ely: 'Mutant: Elysium',
		zs1: 'Mutant: Zone Sector 1 – The Doom Sphere',
		zs2: 'Mutant: Zone Sector 2 – Denizens of the Sink Hole',
		zc1: 'Mutant: Zone Compendium 1 – Lair of the Saurians',
		zc2: 'Mutant: Zone Compendium 2 – Dead Blue Sea',
		zc3: 'Mutant: Zone Compendium 3 – Die, Meat-Eaters, Die',
		zc4: 'Mutant: Zone Compendium 4 – The Eternal War',
		zc5: 'Mutant: Zone Compendium 5 – Hotel Imperator',
		fbl: 'Forbidden Lands',
		fbr: 'Forbidden Lands: The Bitter Reach',
		froz: 'Forbidden Lands: The Bitter Reach',
		tales: 'Tales From The Loop',
		tftl: 'Tales From The Loop',
		things: 'Things From The Flood',
		tftf: 'Things From The Flood',
		cor: 'Coriolis – The Third Horizon',
		coriolis: 'Coriolis – The Third Horizon',
		alien: 'The ALIEN Roleplaying Game',
		dow: 'ALIEN: Destroyer of Worlds',
		vaesen: 'Vaesen',
		t2k: 'Twilight 2000 (Year Zero Engine)',
		twilight: 'Twilight 2000 (Year Zero Engine)',
		cth: 'Upcoming Year Zero Cthulhu',
	},
	COMPENDIA: {
		myz: ['gla', 'mec', 'mek', 'ely', 'zs1', 'zs2', 'zc1', 'zc2', 'zc3', 'zc4', 'zc5'],
		fbl: ['fbr', 'froz'],
		tales: ['things', 'tftf'],
		alien: ['dow'],
		coriolis: [],
	},
	CARDS_ICONS: [
		'0️⃣',
		':one:',
		':two:',
		':three:',
		':four:',
		':five:',
		':six:',
		':seven:',
		':eight:',
		':nine:',
		'🔟',
	],
	DICE_ICONS: {
		generic: {
			d6: '<:d6black:784780954458914828>',
			d8: '<:d8black:784780955667791884>',
			d10: '<:d10black:784780956212658187>',
			d12: '<:d12black:784780956296019988>',
		},
		myz: {
			base: [
				'0',
				'<:b1:543422717857366016>',
				'<:b2:543422724316332032>',
				'<:b3:543422731530534912>',
				'<:b4:543422737172004895>',
				'<:b5:543422745027805211>',
				'<:b6:543422751428575238>',
			],
			skill: [
				'0',
				'<:s1:543422653399040010>',
				'<:s2:543422668393938945>',
				'<:s3:543422678644686849>',
				'<:s4:543422694088114186>',
				'<:s5:543422700807258122>',
				'<:s6:543422708554137601>',
			],
			gear: [
				'0',
				'<:g1:543422540824182844>',
				'<:g2:543422593638727690>',
				'<:g3:543422606674624513>',
				'<:g4:543422617424494604>',
				'<:g5:543422630942867466>',
				'<:g6:543422639788785664>',
			],
			neg: [
				'0',
				'<:neg1:548467996360966160>',
				'<:neg2:548468005764595722>',
				'<:neg3:548468013809139713>',
				'<:neg4:548468021354692621>',
				'<:neg5:548468031311839237>',
				'<:neg6:548468039759167523>',
			],
		},
		fbl: {
			base: [
				'0',
				'<:fblb1:585362696774352897>',
				'<:fblb2:585368627348373514>',
				'<:fblb3:585368656335339550>',
				'<:fblb4:585368656498655273>',
				'<:fblb5:585368684726321170>',
				'<:fblb6:585368712010399744>',
			],
			skill: [
				'0',
				'<:fbls1:585368858857177088>',
				'<:fbls2:585368877798522891>',
				'<:fbls3:585368904310718474>',
				'<:fbls4:585368916222672897>',
				'<:fbls5:585368925643079690>',
				'<:fbls6:585368937500508170>',
			],
			gear: [
				'0',
				'<:fblg1:585369118849630208>',
				'<:fblg2:585369135882698763>',
				'<:fblg3:585369147471298570>',
				'<:fblg4:585369161832595466>',
				'<:fblg5:585369176936546305>',
				'<:fblg6:585369195970166786>',
			],
			neg: [
				'0',
				'<:fbls1:585368858857177088>',
				'<:fbls2:585368877798522891>',
				'<:fbls3:585368904310718474>',
				'<:fbls4:585368916222672897>',
				'<:fbls5:585368925643079690>',
				'<:fbls6:585368937500508170>',
			],
			arto: [
				'0',
				'<:fblarto1:585376923065253898>',
				'<:fblarto2:585376930866528277>',
				'<:fblarto3:585376938261086219>',
				'<:fblarto4:585376944456073227>',
				'<:fblarto5:585376952744149013>',
				'<:fblarto6:585376965993955328>',
				'<:fblarto7:585377014400155659>',
				'<:fblarto8:585377023971557379>',
				'<:fblarto9:585377031970226178>',
				'<:fblarto10:585377044012204082>',
				'<:fblarto11:585377055169052675>',
				'<:fblarto12:585377072772284426>',
			],
		},
		tales: {
			skill: [
				'0',
				'<:talesb0:746306489488113704>',
				'<:talesb0:746306489488113704>',
				'<:talesb0:746306489488113704>',
				'<:talesb0:746306489488113704>',
				'<:talesb0:746306489488113704>',
				'<:talesb6:746306489668468737>',
			],
		},
		coriolis: {
			skill: [
				'0',
				'<:coriolisb0:746306926836711486>',
				'<:coriolisb0:746306926836711486>',
				'<:coriolisb0:746306926836711486>',
				'<:coriolisb0:746306926836711486>',
				'<:coriolisb0:746306926836711486>',
				'<:coriolisb6:746306927524577280>',
			],
		},
		alien: {
			skill: [
				'0',
				'<:alienb1:746320572593471500>',
				'<:alienb2:746320583091814462>',
				'<:alienb3:746320593132978256>',
				'<:alienb4:746320603186855947>',
				'<:alienb5:746320612850532403>',
				'<:alienb6:746320623436955691>',
			],
			stress: [
				'0',
				'<:aliens1:746320638465146961>',
				'<:aliens2:746320648757837894>',
				'<:aliens3:746320657620533299>',
				'<:aliens4:746320667040940055>',
				'<:aliens5:746320675777544215>',
				'<:aliens6:746320686791917618>',
			],
		},
		vaesen: {
			skill: [
				'0',
				'<:vaesenb0:721625417567436860>',
				'<:vaesenb0:721625417567436860>',
				'<:vaesenb0:721625417567436860>',
				'<:vaesenb0:721625417567436860>',
				'<:vaesenb0:721625417567436860>',
				'<:vaesenb6:721624875688787978>',
			],
		},
		t2k: {
			d12: [
				'0',
				'<:t2ka1:784779990285811712>',
				'<:t2ka0:784779989005893653>',
				'<:t2ka0:784779989005893653>',
				'<:t2ka0:784779989005893653>',
				'<:t2ka0:784779989005893653>',
				'<:t2ka6:784779989911863307>',
				'<:t2ka6:784779989911863307>',
				'<:t2ka6:784779989911863307>',
				'<:t2ka6:784779989911863307>',
				'<:t2ka10:784779990159720448>',
				'<:t2ka10:784779990159720448>',
				'<:t2ka10:784779990159720448>',
			],
			d10: [
				'0',
				'<:t2kb1:784779990142681108>',
				'<:t2kb0:784779989866381372>',
				'<:t2kb0:784779989866381372>',
				'<:t2kb0:784779989866381372>',
				'<:t2kb0:784779989866381372>',
				'<:t2kb6:784779990352527411>',
				'<:t2kb6:784779990352527411>',
				'<:t2kb6:784779990352527411>',
				'<:t2kb6:784779990352527411>',
				'<:t2kb10:784779990419505152>',
			],
			d8: [
				'0',
				'<:t2kc1:784779990779691040>',
				'<:t2kc0:784779990469181460>',
				'<:t2kc0:784779990469181460>',
				'<:t2kc0:784779990469181460>',
				'<:t2kc0:784779990469181460>',
				'<:t2kc6:784779990213722143>',
				'<:t2kc6:784779990213722143>',
				'<:t2kc6:784779990213722143>',
			],
			base: [
				'0',
				'<:t2kd1:784779989525987328>',
				'<:t2kd0:784779989178515457>',
				'<:t2kd0:784779989178515457>',
				'<:t2kd0:784779989178515457>',
				'<:t2kd0:784779989178515457>',
				'<:t2kd6:784779989324529674>',
			],
			ammo: [
				'0',
				'<:t2kg1:784779357164011550>',
				'<:t2kg0:784779356849176576>',
				'<:t2kg0:784779356849176576>',
				'<:t2kg0:784779356849176576>',
				'<:t2kg0:784779356849176576>',
				'<:t2kg6:784779357344235550>',
			],
		},
	},
};