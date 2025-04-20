const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA61V246qSBT9l3rVPsodTToZQLyACCp4YTIPJZSIImBVAeKJ/z6hbdOddM45PcnwVCmq1l5777VX/QRpFhNkohr0f4IcxyWkqFnSOkegD9Riv0cYtEEIKQR9IOo1YzNzYTPOtcDVWsFITWTOxrfWKLGMYlj7+jJn1yXDeq/g3gZ5sUvi4DeAh+u+KL2Rmey6+sbyV2tX8BZXOA8iw1+vT6v5wc4KRtXmw9MruDeIMMZxGun5AZ0RhomJagfG+Hv09dEuTyc5M2VS0XOR4I3Xhnoo1ghPx8Sc3LrjSiXuiteG2ffoD/hxWV065YTgkzcYb+aWvs319U7lLhfeL4q1tStu6ly2Kv1Bn8RRisJJiFIa0/rbdWft7rS1lLqk5OJDSYWjJGy8UTHxlLU/EDf5drcviX26bE/b7xHHLleHTrGh01HFzvPpWXSWvBEoVmgz5WlJWjtGZWeOy9XVZ+IOfmrl9F/qXhviIRtf62K6QLPB1FoiJdErIrm39XzYMfF+WK/oqcWkOvkefUUwVWU6qNed6Q1ee0aUWxPshpvDICaVOFmlObmqxTiQI/6DPqQF/h1L1dLJTWrhneGvJ3HUo1XLst1gKw11ZDkpWxJ35EswuZmMJ3HzzcZyesvZbs4metm71ELIQ0E0F9twEUWFfM3yUiyP1etbRidUT0LQZ+5tgFEUE4ohjbO02RPZNoBhuUQBRvStumDD8BEjmF5e2Zp38aW9l1/OUJ/Qjm5Y2XUVlga5URMuytMraIMcZwEiBIXjmNAM1xYiBEaIgP7fb41qcsbonFFkxCHoA1nuMjLXY0WZ5YS/yI/qACmBef4jRRS0wR5nZwuBPsUFaoO3G3xXVmRpICpaV5dUTh2yosaqQ72naDIjilKT4vkR1Y3PiFB4zkGfkXiB4Tmmy9/b/xMRTdQZURa6ek/qsbyk6epgIGuiMlQFrSuqfybyTxuk6EofQm7KzzFtsI8xoV5a5EkGw6fKnz9hEGRFSpd1GmjNAmHQ/7SNKI3TiDSpFSnEwSEukdbkAfp7mBB0b4MQlXGAGjyw9VaRPxS5xbL2X4r1YVYbB1dpenjI0scRQWBlPhTElx6z5154nhFeZGm3exEZgetysLfnuyxoyvHwkObOLyXNuDk7Xclot5rEHLz56YwRbCaV8ip4k+VDiwij8FnlHQxORe5mJ5T+BhceDjJ7cS7YLs8msm3M2HKrFS8cGH3CfWgc9H9++LaWhQ2eIslbcaWJoOlWE+erHPqs/FURKWyOg2FWpCHCTaT3NjQYIaIwTkijEsdkM0PXdFMzT7IyGilWpGhRU+dn255+8Bi4sxXN1JnDqjM8cRjrLNquZvCpnXHWNKmy8akwA3hMx63GDr+CNAgztkS9W0dyzkvHSF23tfPmcKfiy9GnlT/GAZ1wIgnLQlbyRZLELfssb2zPWNXwOnVoly8Dz7dXKWF5/Sbga0YSpTGPp3w+B+slQz5U7PE6z6ylMJXxMta7aX48GPnBmAVVZ6hf/cFWDtWZax+PjG2IEkS34XVlVuGAYeLe3Bl3eDRPnZLbenVZCHY0fzjVm1Mm7y9U/G4iD7HtY/Rm+O9d+HO7PoTfvbc/gby/Ib/yYf84Gcxdtxe5sB70XKM4nqoYGbfL7KYJgakK0zgdZcK1Qwi4NxOdJ5DuM3wGfUDOOwjaIIGEKh+D+9ULurLYBudayfMlhfQ570BpPms4A/d/Aae41a8bCQAA',
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

