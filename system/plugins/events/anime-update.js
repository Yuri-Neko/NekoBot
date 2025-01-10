const {
    delay
} = require("baileys");

let messageSent = false;
let intervalId;

async function events(m, {
    sock,
    store
}) {
    sock.animeUpdate = sock.animeUpdate || {};

    intervalId = setInterval(async () => {
        try {
            const groups = Object.keys(store.groupMetadata);
            const latestAnime = await scraper.list().kuronime.latest();
            const oldAnime = sock.animeUpdate;

            if (!oldAnime || oldAnime.title !== latestAnime[0].title) {
                console.log(`[+] Pembaruan anime terdeteksi: ${latestAnime[0].title}`);

                let caption = `*🍟 Anime Episode Update*\n`;
                caption += Object.entries(latestAnime[0]).map(([key, value]) => `> *- ${key.capitalize()}:* ${value}`).join("\n");

                caption += `\n*- Share the Channel :* > https://whatsapp.com/channel/0029VaxNm957dmeaROxJiU36 *- Join Group Komunitas kami :* > https://chat.whatsapp.com/GAA4MzVka5C2RsGcLn7FAE > *ℹ️ Pesan ini dikirim oleh NekoBot*`;

                if (!messageSent) {
                    await sock.sendMessage("120363388655497053@newsletter", {
                        image: {
                            url: latestAnime[0].thumbnail
                        },
                        caption
                    }).then((msg) => {
                        for (let id of Object.keys(store.groupMetadata)) {
                            sock.copyNForward(id, msg, true);
                            delay(3000);
                            messageSent = true;
                            sock.animeUpdate = latestAnime[0];
                        }
                        messageSent = true;
                    });
                }
            }

            console.log(`[+] Mengecek anime baru...`);
            messageSent = false;
            return
        } catch (error) {
            console.error(`Error: ${error.message}`);
        }
    }, 600000);
}

module.exports = {
    events
};