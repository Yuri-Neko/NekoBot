const cron = require("node-cron");
const {
    delay
} = require("baileys");

let messageSent = false;

async function events(m, {
    sock,
    store
}) {
    sock.animeUpdate = sock.animeUpdate || {};

    cron.schedule("* * * * *", async () => {
        try {
            const groups = Object.keys(store.groupMetadata);
            const latestAnime = await scraper.list().samehadaku.latest();
            const oldAnime = sock.animeUpdate;

            if (!oldAnime || oldAnime.title !== latestAnime[0].title) {
                console.log(`[+] Pembaruan anime terdeteksi: ${latestAnime[0].title}`);
                let episodeAnime = await scraper.list().samehadaku.episode(latestAnime[0].url);
                let quality = Object.keys(episodeAnime.download);
                let caption = `*🍟 Anime Episode Update*\n`;
                caption += Object.entries(latestAnime[0]).map(([key, value]) => `> *- ${key.capitalize()}:* ${value}`).join("\n");
                if (quality.length > 1) {
                    caption += "\n\n*– 乂 Download - Episode*\n";
                    for (let i of quality) {
                        caption += `> *- Download ${i}*\n`;
                        caption += episodeAnime.download[i]
                            .map((a) => `> *- Source :* ${a.source}\n> *- Url :* ${a.url}`)
                            .join("\n");
                        caption += "\n\n";
                    }
                } else {
                    caption
                        += "\n\ntidak ada link download pada episode ini";
                }
                caption += `\n*- Share the Channel :*
> https://whatsapp.com/channel/0029VaxNm957dmeaROxJiU36
*- Join Group Komunitas kami :*
> https://chat.whatsapp.com/GAA4MzVka5C2RsGcLn7FAE

> *ℹ️ Pesan ini dikirim oleh NekoBot*`;

                if (!messageSent) {
                    await sock.sendMessage("120363388655497053@newsletter", {
                        image: {
                            url: latestAnime[0].thumb
                        },
                        caption
                    }).then((msg) => {
                        for (let id of Object.keys(store.groupMetadata)) {
                            sock.copyNForward(id, msg, true);
                            delay(3000);
                            messageSent = true;
                            sock.animeUpdate = latestAnime[0]
                        }
                        messageSent = true;
                    });
                }
            }
            console.log(`[+] Mengecek anime baru...`);
        } catch (error) {
            console.error(`Error: ${error.message}`);
        }
    });
}

module.exports = {
    events
};