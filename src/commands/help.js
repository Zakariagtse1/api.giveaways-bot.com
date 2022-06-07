const { MessageEmbed } = require('discord.js');
module.exports = {
    name: "help",
    description: "Learn about bot commands.",
    options: [],
    run: async (client, interaction) => {
      const guild_settings = require('../database/models/guild-settings.js');
      const findLang = await guild_settings.findOne({ guild: interaction.guild.id });
      const lang = require(`../langs/${findLang?.data?.language || "en"}.js`);
      
        const helpEmbed = new MessageEmbed()
        .setTitle('GiveAways - ' + lang.bot.help.text)
        .setColor('#5ccc00')
        .setDescription(lang.bot.help.description)
        .setAuthor(interaction.guild.name, interaction.guild.iconURL({ dynamic: true }))
        await interaction.reply({
            embeds: [ helpEmbed ]
        });
    }
};