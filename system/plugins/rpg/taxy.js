module.exports = {
<<<<<<< HEAD
  command: "taxy",
  alias: ["taksi"],
  category: ["rpg"],
  settings: {},
  async run(m, { sock }) {
    let usr = db.list().user[m.sender];
    if (!usr || !usr.rpg) {
      return m.reply(
        "Data RPG tidak ditemukan. Silakan mulai permainan terlebih dahulu.",
      );
    }

    let rpg = usr.rpg;

    let lastTaxy = rpg.lastTaxy || 0;
    let now = Date.now();
    let cooldown = 14400000;

    if (now - lastTaxy < cooldown) {
      let timeLeft = Math.ceil((cooldown - (now - lastTaxy)) / 1000);
      return m.reply(
        `Tunggu ${timeLeft} detik sebelum kamu dapat menggunakan taksi lagi.`,
      );
    }

    let prosesTaksi = [
      "🚗 Sedang Mencari Penumpang",
      "🚗 Menemukan Penumpang 👨",
      "🚗 Berangkat Ke Tujuan",
      "👨 Menerima Gaji Dari Penumpang 💸",
    ];
    for (let txt of prosesTaksi) {
      await m.reply(txt);
      await sleep(7000);
    }

    let random = Math.floor(Math.random() * (500000 - 100000 + 1)) + 100000;
    let randomExp = Math.floor(Math.random() * 50000) + 1;
    let dapatMoney = random;
    let dapatExp = randomExp;
    rpg.money += dapatMoney;
    rpg.exp += dapatExp;

    let hasilNyaTxt = `
=======
   command: "taxy",
   alias: ["taksi"],
   category: ["rpg"],
   settings: {},
   async run(m, { sock }) {
      let usr = db.list().user[m.sender];
      if (!usr || !usr.rpg) {
         return m.reply("Data RPG tidak ditemukan. Silakan mulai permainan terlebih dahulu.");
      }

      let rpg = usr.rpg;

      let lastTaxy = rpg.lastTaxy || 0;
      let now = Date.now();
      let cooldown = 14400000; 

      if (now - lastTaxy < cooldown) {
         let timeLeft = Math.ceil((cooldown - (now - lastTaxy)) / 1000);
         return m.reply(`Tunggu ${timeLeft} detik sebelum kamu dapat menggunakan taksi lagi.`);
      }

      let prosesTaksi = [
         "🚗 Sedang Mencari Penumpang",
         "🚗 Menemukan Penumpang 👨",
         "🚗 Berangkat Ke Tujuan",
         "👨 Menerima Gaji Dari Penumpang 💸"
      ];
      for (let txt of prosesTaksi) {
         await m.reply(txt);
         await sleep(7000);
      }

      let random = Math.floor(Math.random() * (500000 - 100000 + 1)) + 100000;
      let randomExp = Math.floor(Math.random() * 50000) + 1;
      let dapatMoney = random;
      let dapatExp = randomExp;
      rpg.money += dapatMoney;
      rpg.exp += dapatExp;

      let hasilNyaTxt = `
>>>>>>> 4bd222d2751c55d3da9005e2ad096b87b6439b90
💼 *Perjalanan Selesai!*
━━━━━━━━━━━━━━━━━
💵 *Gaji Diterima:* +${dapatMoney.toLocaleString()} uang  
🎯 *Pengalaman:* +${dapatExp.toLocaleString()} exp  
━━━━━━━━━━━━━━━━━
🚀 Teruslah bekerja keras dan kumpulkan lebih banyak gaji!
`.trim();

<<<<<<< HEAD
    rpg.lastTaxy = now;

    return m.reply({
      image: { url: "https://files.catbox.moe/rz9br7.jpg" },
      caption: hasilNyaTxt,
      footer: "ᴛʜᴀɴᴋs ғᴏʀ ᴜsɪɴɢ ɴᴇᴋᴏʙᴏᴛ",
      buttons: [
        {
          buttonId: ".menu",
          buttonText: { displayText: "Back To Menu" },
        },
      ],
      viewOnce: true,
      headerType: 4,
    });
  },
};

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
=======
      rpg.lastTaxy = now;

      return m.reply({
         image: { url: "https://files.catbox.moe/rz9br7.jpg" },
         caption: hasilNyaTxt,
         footer: "ᴛʜᴀɴᴋs ғᴏʀ ᴜsɪɴɢ ɴᴇᴋᴏʙᴏᴛ",
         buttons: [
            {
               buttonId: ".menu",
               buttonText: { displayText: "Back To Menu" }
            }
         ],
         viewOnce: true,
         headerType: 4
      });
   }
}

function sleep(ms) {
   return new Promise(resolve => {
      setTimeout(resolve, ms);
   });
}
>>>>>>> 4bd222d2751c55d3da9005e2ad096b87b6439b90
