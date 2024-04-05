const Eris = require("eris");
const keep_alive = require('./keep_alive.js')

// Replace TOKEN with your bot account's token
const bot = new Eris(process.env.token);

bot.on("error", (err) => {
  console.error(err); // or your preferred logger
});

bot.on("ready", () => {
  console.log("Bot is ready!");
  // Replace CHANNEL_ID with the ID of the channel where you want to stream the Twitch channel
  const channel = bot.getChannel("CHANNEL_ID");
  if (channel) {
    const twitchStream = new Eris.RichEmbed()
      .setColor("#400080")
      .setTitle("Twitch Stream")
      .setURL("https://www.twitch.tv/monstercat") // Replace with the URL of the Twitch channel you want to stream
      .setDescription("**Stream Started**")
      .setImage("https://www.twitch.tv/monstercat/embed") // Replace with the embed URL of the Twitch channel you want to stream
      .setTimestamp()
      .setFooter("Twitch");
    channel.createMessage("", twitchStream);
  } else {
    console.error("Channel not found!");
  }
});

bot.connect(); // Get the bot to connect to Discord
