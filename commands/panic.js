const Config = require('../config.json');
const Crits = require('../data/crits.json');
const YZEmbed = require('../util/YZEmbed');
const Util = require('../util/Util');

module.exports = {
	name: 'panic',
	description: 'Rolls for a random panic effect for the *ALIEN* roleplaying game. You must indicate your starting stress level.',
	// aliases: ['alien-panic'],
	guildOnly: false,
	args: true,
	usage: '<stress>',
	execute(args, message) {
		const panicRand = Util.rand(1, 6);
		const stress = +args[0] || 0;

		const text = `😱 PANIC ROLL: **${stress}** + ${Config.icons.alien.skill[panicRand]}`;
		const embed = getEmbedPanicRoll(panicRand + stress, message);

		return message.channel.send(text, embed);
	},
};

/**
 * Gets an Embed with the result of a Panic Roll (ALIEN-rpg).
 * @param {number} panic The value of the Panic Roll
 * @param {Discord.Message} message The triggering message
 * @returns {Discord.RichEmbed} A Discord Embed Object
 */
function getEmbedPanicRoll(panic, message) {
	const panicTable = Crits.alien.panic;
	const panicRoll = Util.clamp(panic, 0, 15);
	let criticalInjury;

	// Iterates each critical injury from the defined table.
	for (const crit of panicTable) {

		// If the critical injury reference is one value, it's a number.
		if (typeof crit.ref === 'number') {

			if (crit.ref === panicRoll) {
				criticalInjury = crit;
				break;
			}
		}
		// If the critical injury reference is a range, it's an array with length 2.
		else if (crit.ref instanceof Array) {

			if (crit.ref.length >= 2) {

				// crit.ref[0]: minimum
				// crit.ref[1]: maximum
				if (panicRoll >= crit.ref[0] && panicRoll <= crit.ref[1]) {
					criticalInjury = crit;
					break;
				}
			}
		}
		else {
			console.error('[ERROR] - [CRIT] - crit.ref type is not supported.', crit);
		}
	}

	// Exits early if no critical injury was found.
	if (!criticalInjury) return message.reply('The critical injury wasn\'t found.');

	return new YZEmbed(`**${criticalInjury.injury}**`, criticalInjury.effect, message, true);
}