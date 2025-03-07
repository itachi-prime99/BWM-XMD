const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA71V2W7rNhD9F77aqUXtMhCgWr3FdrwnLvpAS5RMazVFrRf590JxggToXVLgonoiJPHMmZlzZr6BJCU5nuEGDL+BjJISMdwdWZNhMARG4fuYgj7wEENgCOz5yLnwx/CqWU863UxGUTSudqFGH9NqXBTq7rowloK2TmP3Hrz0QVacIuL+BBCP3NzXD0sWbf1CXclw4Ia++hAdKj9IUhyIlxGeTrj9zAjuwUuHiAglSWBnZxxjiqIZbh4RoV+jj0zv8Wqs1F1F62QTNtZoMOqNxMIZEXWdVsxQYqgWa2bF4dfoz65W/FSos4V93teDtm1XdXrhwjLTlerI8X6eEprLZyFyVjf6OQkS7E08nDDCmi/XPZxF6SYXKnhGwtxQpGCwHYg1YT1n2WTl9HpC7eDZ19atsPsa8RptcUwu8rHk4qD0kuwoobFZpoetdZkMXJhp4/UmVbfXNvhM/JG+ayX8L3WPH5NyI1/wlPSiGk1Oxu4xbM3JOmmW9Trm5Nzy2+PMhpD7Yt2hHmWHMNCP2uHq72dada34sSqsSssuHwZE4lSSRG1sG9D9oI9YQX/GUhT0Z6Yxv9Hz/UII63p5dLipJzQCPHo2jS6ruh7trTBoA59AxaaH9RUtw8cBN5uPw6Z1d6swqeqLcV3z7cPSGityQIL714xC3Ew8MIQvfUBxQHJGESNp0r3jRb4PkFdusEsxey0vWJ3Gs9HJ8BfmYE6Xc0l9LrZW3uPpszvbJpd0YETO8mjrrru7B32Q0dTFeY69MclZSps5znMU4BwM/3rtVJc0xXHK8JR4YAhUlYOqKGuiKPHwz/yP6oxYjrLsjwQz0Ac+TeM5BkNGC9wHrzc4nZN10VZFyImmIyuc7hhQs2SDdzTblpQux/gWdUtinDMUZ2AIFREKoiDK0kv/NxHReZ7neAXyhm1DUdc4aAuKo3Gmqdq8Jkj/GxGV00zBFHVJ1DRVkUVDsmxbkS1FUVRDsOVfEJF/GxGomrxsGsZrYAtyIi9xJq9ZqqRzqqKrvyTydx8kuGY3b3eKFGAf+ITmbJcUWZQi79347x+R66ZFwjZN4prdAVMw/PQaM0aSIO9SKxJE3TMpsdnlAYY+inL80gceLomLOzwgzeCOrS1vrRa76T4dI5tym1Wn6nOa3H5REH/yZQXeCfzJuxOx4N5pAjrdQddXfYgQ1HwBdOW4jdXuzg9dbvm96slRCtKLmjEn2sYqUkdua4d7/dWpN3tiir33Kp+QGxbZNg1x8hNclp+PRS5JNNON3kAWoGzO+fJpa7erT7g324Pht49VZqZehyero7njzB5A160uzr/lMPyOIBLU/Q1sipMuylsLuvseZohEORgCc7Ft+OnKsRfF/qqIo5FuB7oZ6OCjZe/j8TZ+kLORB4+2PJ02mtScDzlN1rBasmST8555SO0ktCo79Udn9/47IN3Ex+5aXgRKU+uDTXSSwtVD3VqQw9azI17dVSNfjt6ygtsKBhJarw2FtVBwyPLiF87J5iw23ugPFm7Up/DhCI3LAqbm6r6LdpPO52BFZUydYL1TLzvz2Zo9DVKOE2aH50k9rjSO4aV6tePtyRhxE1XtpU5vI5GwmfiO/1C2lrPjTqw89vBYPG0udS8ab88DkVS3wf26OKK3hU3eRupNaD7Br/vvrQW/bNWH5rmX/ieMt436A10Zh/OuKNt6STZuid10T2cS57kWPXJ0kayiqzGVdNWYjev0Cbx0Zs4ixPyUxl0jE4+mxAN9EKGc6R+2/d4kEPogbvQs2zDE3t0O9O6Zhivw8g8BwkAFLAoAAA==',
    PREFIXE: process.env.PREFIX || ";",
    OWNER_NAME: process.env.OWNER_NAME || "Ayaan (Eren)",
    NUMERO_OWNER : process.env.NUMERO_OWNER || " Eren",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'Eren's Bot',
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
                  AUTO_REACT : process.env.AUTO_REACT || 'yes',
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

