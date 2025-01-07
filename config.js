const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA5VUSY+rOBj8L76SfmENJFJLE7KShCxAyDJ6BwOGOKyxWQKt/PcRvaj7MK+n52YZXC5X1VcvIEkxRUtUg8ELyAguYY7aZV5nCAyAWvg+IqADPJhDMADM0uZvN063wnWzorFMyJaG2cEM9xWjiyPJO/UDqXddsfvgGTw6ICucCLvfAPbOmsoPS4lW8bwuE3vMVYkXjq6M0LCox2+lJfWspcbxd/0ZPFpEiAlOgkl2QTEiMFqiegsx+SH90VJlVLlZd/m5UsZ1l11bcl24Do8FhxleloVOLXPHVaH4M/rMSlxHSbRQHc0Ya6zemDiMb6uZbsXkkKFzDy/Rmm0c23Tf6FMcJMjTPJTkOK9/rDvd3BXJroRiXEc2fw/vq2bFjzSJ3nbbuxKej/lleDnMJtls9zPiIm+4U2NXzbrUhnfxrNfI7Gb3uryiU6UydsMcTL/2xNAOvhLfko+shP9H997kCKfrteWUDK+tC+XYzeeybSjmNQ7Y2R0fvE1/7vjm+Fj9jH4usFJ/Pi8nqpsTXpQMVjlvgjskGtlfxw3T27q0tsb+fCR+0od5Qb5jiaPVoQiCrrM02b1wZNReUCwDtyxNOfbrqLTTxfwWUVuxGXzSGX0reNbF0PYVw0tkTE1fkOVkm1i6bSXY7R/FuoLq7vn1RSGqNQ8MuEcHEBRgmhOY4zRp96R+B0CvNJFLUP6qLkAEbxoi4oPFqoswHmtEViKV7fcpt1jp8par6VrBdcFx4jPogIykLqIUeXNM85TUOqIUBoiCwd+/OyBB9/zNt/Y2gesAHxOa75Mii1LofZj68RG6blokuVkn7qhdIAIG7Oc2ynOcBLSVsUggcS+4RKMLzCkY+DCi6NEBHiqxi1o8IHPB2KmvqhnfqkTfLlBF1ChoKV/S5O0XH8p8j2f9J8935SdRULwnRWS5J1ZweBdJHoKyBDoAv49Me+aPDsYs8ZazZjVcOX0eKTcSGV3+wO258/DVhTfpEUEeGOSkQB3gQDcsMisNUfINrjauZ3Azvgfqdt5d3RoN7dA+P6ez9574aikYvHzW1Cj1WjxB0U+WxPGgA+LXBOL25bwkyqwsiRynKAOZ+4v+qlohYZb9SlDe4r6L3p7wUA5xRMEAjFbxkWMmk4nW6IpMZ7PhJBiOgiH4NOkj7G9pahZcWUXVci2HijHnDr18ejjvuNlsPVJ0dTpXFVWVrpGTzk/P/wICBqBOLHm/xSQt97HeeMsbUc9T0wgu/CoN81RwJGN9uWxMWup9miEGYiky9nR+rCSUu6peE+Q04Xy1O3oOX0ytaoq18fC5ve0tLF8vOwhHgXZnpXWzbDQs9ikM1MTZ3047dLpPtYUUHKe7wlj2zrK/ud3YaHNfTg1WkpTbLqm9IMioh4fxNcp2PUb3GHVEtPH7GL7WQPRev/h1Ql7eo+Vj9NpmCWwt+i9zvqacfXS+YLz34x+SpLq15ygLd3RF0nZi9O2CGHa8XxuX664cDw2j8oc7dJIOPZUHj8fvDsgimPspicEAwMQjKfZAB0SQ5sPPQbVwjGgO4wwMOFno8YLS4/qPfwCqQSOq3QcAAA==',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "Mesh KE",
    NUMERO_OWNER : process.env.NUMERO_OWNER || "254707541188",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'MESH_MD',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/h2ydge.jpg',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.PM_CHATBOT || 'no',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ANTIDELETE1 : process.env.ANTIDELETE1 || 'yes',
    ANTIDELETE2 : process.env.ANTIDELETE2 || 'yes',
    MENUTYPE : process.env.MENUTYPE || '',
    ANTICALL : process.env.ANTICALL || 'yes',
                  AUTO_REACT : process.env.AUTO_REACT || 'No',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'yes',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'yes',
                  AUTO_READ : process.env.AUTO_READ || 'yes',
                  AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'yes',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'yes',
                  AUTO_BIO : process.env.AUTO_BIO || 'yes',
                  AUDIO_REPLY : process.env.AUDIO_REPLY || 'yes',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});

