module.exports = {
<<<<<<< HEAD
  command: "profile",
  alias: ["me"],
  category: ["rpg"],
  settings: {},
  async run(m, { sock }) {
    let usr = db.list().user[m.sender];
    let rpg = usr.rpg;

    const formatNumber = (num) =>
      num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    const getTimeLeft = (expired) => {
      const now = Date.now();
      const timeLeft = expired - now;
      if (timeLeft <= 0) return "Expired";
      const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      );
      return `${days}d ${hours}h`;
    };

    let profile = `╭━━━「 *PROFILE* 」━━━⊷\n`;
    profile += `┃ ⬡ *Name:* ${usr.name}\n`;
    profile += `┃ ⬡ *Level:* ${usr.level} ✨\n`;
    profile += `┃ ⬡ *Status:* ${usr.premium.status ? "Premium 👑" : "Free User 👤"}\n`;
    profile += `┃ ⬡ *Banned:* ${usr.banned.status ? "Yes ⛔" : "No ✅"}\n`;
    profile += `┃ ⬡ *Limit:* ${formatNumber(usr.limit)} 🎯\n`;
    profile += `┃ ⬡ *Registered:* ${usr.register ? "Yes ✅" : "No ❌"}\n`;
    profile += `╰━━━━━━━━━━━━━━━⊷\n\n`;

    profile += `╭━━━「 *BALANCE* 」━━━⊷\n`;
    profile += `┃ ⬡ *Money:* $${formatNumber(rpg.money)} 💵\n`;
    profile += `┃ ⬡ *Bank:* $${formatNumber(usr.bank)} 🏦\n`;
    profile += `┃ ⬡ *Coin:* ${formatNumber(usr.coin)} 🪙\n`;
    profile += `┃ ⬡ *XP:* ${formatNumber(rpg.exp)} ✨\n`;
    profile += `╰━━━━━━━━━━━━━━━⊷\n\n`;

    profile += `╭━━━「 *INVENTORY* 」━━━⊷\n`;
    profile += `┃ ⬡ *Sampah:* ${formatNumber(rpg.sampah)} 🗑️\n`;
    profile += `┃ ⬡ *Botol:* ${formatNumber(rpg.botol)} 🧊\n`;
    profile += `┃ ⬡ *Kardus:* ${formatNumber(rpg.kardus)} 📦\n`;
    profile += `┃ ⬡ *Iron:* ${formatNumber(rpg.iron)} ⚔️\n`;
    profile += `┃ ⬡ *Kayu:* ${formatNumber(rpg.kayu)} 🪵\n`;
    profile += `┃ ⬡ *Kaleng:* ${formatNumber(rpg.kaleng)} 🥫\n`;
    profile += `┃ ⬡ *Gelas:* ${formatNumber(rpg.gelas)} 🥛\n`;
    profile += `┃ ⬡ *Plastik:* ${formatNumber(rpg.plastik)} ♻️\n`;
    profile += `╰━━━━━━━━━━━━━━━⊷\n\n`;

    const now = Date.now();
    const gajianCD = rpg.lastGajian + 3600 * 1000 - now;
    const mulungCD = rpg.lastMulung + 3600 * 1000 - now;
    const taxyCD = rpg.lastTaxy + 3600 * 1000 - now;

    profile += `╭━━━「 *COOLDOWNS* 」━━━⊷\n`;
    profile += `┃ ⬡ *Gajian:* ${gajianCD > 0 ? Math.floor(gajianCD / 1000) + "s" : "Ready!"} ⏰\n`;
    profile += `┃ ⬡ *Mulung:* ${mulungCD > 0 ? Math.floor(mulungCD / 1000) + "s" : "Ready!"} ⏰\n`;
    profile += `┃ ⬡ *Taxy:* ${taxyCD > 0 ? Math.floor(taxyCD / 1000) + "s" : "Ready!"} ⏰\n`;
    profile += `╰━━━━━━━━━━━━━━━⊷\n\n`;

    if (usr.premium.status) {
      profile += `╭━━━「 *PREMIUM* 」━━━⊷\n`;
      profile += `┃ ⬡ *Expired:* ${getTimeLeft(usr.premium.expired)} ⌛\n`;
      profile += `╰━━━━━━━━━━━━━━━⊷`;
    }
    let urlPic = await sock.profilePictureUrl(m.sender, "image");

    await m.reply({
      image: {
        url: urlPic,
      },
      caption: profile,
      footer: "ᴛʜᴀɴᴋs ғᴏʀ ᴜsɪɴɢ ɴᴇᴋᴏʙᴏᴛ",
      buttons: [
        {
          buttonId: ".menu",
          buttonText: {
            displayText: "Back To Menu",
          },
        },
      ],
      viewOnce: true,
      headerType: 6,
    });
  },
};
=======
   command: "profile",
   alias: ["me"],
   category: ["rpg"],
   settings: {},
   async run(m, { sock }) {
      let usr = db.list().user[m.sender];
      let rpg = usr.rpg;
      
      const formatNumber = (num) => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      
      const getTimeLeft = (expired) => {
         const now = Date.now();
         const timeLeft = expired - now;
         if (timeLeft <= 0) return "Expired";
         const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
         const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
         return `${days}d ${hours}h`;
      };

      let profile = `╭━━━「 *PROFILE* 」━━━⊷\n`;
      profile += `┃ ⬡ *Name:* ${usr.name}\n`;
      profile += `┃ ⬡ *Level:* ${usr.level} ✨\n`;
      profile += `┃ ⬡ *Status:* ${usr.premium.status ? "Premium 👑" : "Free User 👤"}\n`;
      profile += `┃ ⬡ *Banned:* ${usr.banned.status ? "Yes ⛔" : "No ✅"}\n`;
      profile += `┃ ⬡ *Limit:* ${formatNumber(usr.limit)} 🎯\n`;
      profile += `┃ ⬡ *Registered:* ${usr.register ? "Yes ✅" : "No ❌"}\n`;
      profile += `╰━━━━━━━━━━━━━━━⊷\n\n`;
      
      profile += `╭━━━「 *BALANCE* 」━━━⊷\n`;
      profile += `┃ ⬡ *Money:* $${formatNumber(rpg.money)} 💵\n`;
      profile += `┃ ⬡ *Bank:* $${formatNumber(usr.bank)} 🏦\n`;
      profile += `┃ ⬡ *Coin:* ${formatNumber(usr.coin)} 🪙\n`;
      profile += `┃ ⬡ *XP:* ${formatNumber(rpg.exp)} ✨\n`;
      profile += `╰━━━━━━━━━━━━━━━⊷\n\n`;
      
      profile += `╭━━━「 *INVENTORY* 」━━━⊷\n`;
      profile += `┃ ⬡ *Sampah:* ${formatNumber(rpg.sampah)} 🗑️\n`;
      profile += `┃ ⬡ *Botol:* ${formatNumber(rpg.botol)} 🧊\n`;
      profile += `┃ ⬡ *Kardus:* ${formatNumber(rpg.kardus)} 📦\n`;
      profile += `┃ ⬡ *Iron:* ${formatNumber(rpg.iron)} ⚔️\n`;
      profile += `┃ ⬡ *Kayu:* ${formatNumber(rpg.kayu)} 🪵\n`;
      profile += `┃ ⬡ *Kaleng:* ${formatNumber(rpg.kaleng)} 🥫\n`;
      profile += `┃ ⬡ *Gelas:* ${formatNumber(rpg.gelas)} 🥛\n`;
      profile += `┃ ⬡ *Plastik:* ${formatNumber(rpg.plastik)} ♻️\n`;
      profile += `╰━━━━━━━━━━━━━━━⊷\n\n`;
      
      const now = Date.now();
      const gajianCD = rpg.lastGajian + (3600 * 1000) - now;
      const mulungCD = rpg.lastMulung + (3600 * 1000) - now;
      const taxyCD = rpg.lastTaxy + (3600 * 1000) - now;
      
      profile += `╭━━━「 *COOLDOWNS* 」━━━⊷\n`;
      profile += `┃ ⬡ *Gajian:* ${gajianCD > 0 ? Math.floor(gajianCD/1000) + "s" : "Ready!"} ⏰\n`;
      profile += `┃ ⬡ *Mulung:* ${mulungCD > 0 ? Math.floor(mulungCD/1000) + "s" : "Ready!"} ⏰\n`;
      profile += `┃ ⬡ *Taxy:* ${taxyCD > 0 ? Math.floor(taxyCD/1000) + "s" : "Ready!"} ⏰\n`;
      profile += `╰━━━━━━━━━━━━━━━⊷\n\n`;
      
      if (usr.premium.status) {
         profile += `╭━━━「 *PREMIUM* 」━━━⊷\n`;
         profile += `┃ ⬡ *Expired:* ${getTimeLeft(usr.premium.expired)} ⌛\n`;
         profile += `╰━━━━━━━━━━━━━━━⊷`;
      }
      let urlPic = await sock.profilePictureUrl(m.sender, 'image')

      await m.reply({
        image: {
           url: urlPic
        },
        caption: profile,
        footer: "ᴛʜᴀɴᴋs ғᴏʀ ᴜsɪɴɢ ɴᴇᴋᴏʙᴏᴛ",
        buttons: [
          {
             buttonId: ".menu",
             buttonText: {
                displayText: "Back To Menu"
             }
          }],
        viewOnce: true,
        headerType: 6
      })
   }
}
>>>>>>> 4bd222d2751c55d3da9005e2ad096b87b6439b90
