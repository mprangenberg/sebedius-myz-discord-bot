# Mutant Year Zero Discord Bot

**Sebedius** is a [Discord](https://discordapp.com) bot with command utilities for the [Mutant: Year Zero](http://frialigan.se/en/games/mutant-year-zero/) roleplaying game.

## Add the Bot to your Server

Follow this link: https://discordapp.com/api/oauth2/authorize?client_id=543445246143365130&scope=bot&permissions=289856

The link will prompt you to authorize the bot on a server. Once the bot's authorized, you'll see it in the Member List.

## Available Commands

Commands are triggered with the prefix `!`. This prefix can be configured for your server. Most of the commands can be executed from channels and privately through DMs.

* `help` - The bot's manual. Read it!
* `roll <dice>` - Rolls dice for the Mutant: Year Zero roleplaying game. See possible outcome:
  * `roll d6|d66|d666 [name]` - Rolls a D6, D66, or D666 for MYZ.
  * `roll Xd|Xd6 [name]` - Rolls X D6 and sums their results.
  * `roll res d6|d8|d10|d12 [name]` - Rolls a Resource Die. *(Concept imported from Forbidden Lands.)*
  * `roll [Xb][Ys][Zg] [Artifact Die] [name] [--fullauto]` - Rolls a pool of dice following the rules of MYZ:
    * `X b` - Rolls X base dice (yellow color).
    * `Y s` - Rolls Y skill dice (green color). Use `n` instead of `s` for negative dice.
    * `Z g` - Rolls Z gear dice (black color).
    * `Artifact Die` - Rolls an Artifact Die (`d6|d8|d10|d12`). *(Concept imported from Forbidden Lands.)*
    * `--fullauto` - Allows unlimited pushes.
* `crit [table]` - Rolls for a random critical injury. You may specify a table or a numeric value. The default is the damage table. Other available tables are:
  * `nontypical` or `nt` - Critical injury for non-typical damage.
  * `pushed` or `p` - Critical injury for pushed damage (none).
  * `horror` or `h` - The *Forbidden Lands* Horror traumas, adapted for MYZ.
* `scrap [quantity]` - Gets you a bunch of scrap.
* `rumor` - Tells a random rumor. *(Thanks to Myr Midon's work.)*
* `mutation` - Draws a random mutation (no details).
* `arkthreat` - Draws a random threat against the Ark (no details).
* `setconf prefix [value]` - Changes the bot's prefix to a new value (can be '?' or '>' or anything else). Only a member with administrator rights can change this setting.

### Dice Cap

The maximum number of dice that can be rolled at once is capped at 42. *(Discord messages have a limited number of characters.)*

### Pushing

The push option for the MYZ dice pool roll is available for 60 seconds. Only the user who initially rolled the dice can push them.

### Roll Examples

`roll 4b1g` - Rolls 4 base and 1 gear dice.

`roll 5b3s Shake-It Off!` - Rolls 5 base, 3 skill dice, named "Shake-It Off!".

`roll 4b3s2g d10 Uber ROLL --fullauto` - Rolls 4 base, 3 skill, 2 gear dice and a D10 Artifact Die. The roll is named "Uber ROLL" and can be pushed any number of times. 

`roll d66` - Rolls a D66 (D6 × 10 + D6).

`roll 2d` - Rolls two hexahedrons and sums their results.

`roll res d8 Torches` - Rolls a D8 Resource Die for "Torches".

## Permissions

This is a detailed list of needed permissions:

* `ADD_REACTIONS` : The bot uses a reaction menu for roll pushing.
* `VIEW_CHANNEL` : Mandatory.
* `SEND_MESSAGES` : Mandatory.
* `MANAGE_MESSAGES` : The bot needs this permission to remove pushing reaction emojis.
* `EMBED_LINKS` : The bot uses rich embed to display the dice results.
* `USE_EXTERNAL_EMOJIS` : The bot uses custom dice emojis.

## License

The literal and graphical information presented with this bot about *Mutant: Year Zero* & *Forbidden Lands*, including the textures, is copyright *Fria Ligan / Free League Publishing*. This bot is not produced by, endorsed by, supported by, or affiliated with *Fria Ligan*.

The bot's JS source code is under MIT license.

## Contact

Stefouch#5202 on Discord. Hit me up if you've any question!

=]¦¦¦¬ 