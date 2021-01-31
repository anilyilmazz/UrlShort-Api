const Url = require('../Models/url')

insertUrl = async (url) => {
    // Url.sync({ force: true })   
    if (url) {
        const checkUrl = await Url.findOne({
            where: {
                url: url,
                isDeleted:false
            }
        });
        if(checkUrl.length){
            return checkUrl;
        }else{
            const result = await Url.create({ url: url, shorturl: urlShort(),isDeleted:false });
            return result;
        }        
    } else {
        return false
    }
}

getShortUrl = async (url) => {
    return await Url.findOne({
        where: {
            url: url
        }
    });
}

getLongUrl = async (shortUrl) => {
    return await Url.findOne({
        where: {
                shorturl: shortUrl
            }
    });
}

function urlShort() {
    return 'xxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

module.exports = {
    insertUrl,
    getLongUrl,
    getShortUrl
}