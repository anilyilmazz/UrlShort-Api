const urlService = require("../Services/urlservice");

module.exports.create = async(req,res)=>{
    const result = await urlService.insertUrl(req.body.url)
    res.json(result);
}

module.exports.geturl = async(req,res)=>{
    if(req.query.url){
        const result = await urlService.getLongUrl(req.query.url)
        result ?  res.json(result) : res.json({"succes":false,"message":"Url Not Found"});
    }else{
        res.json({"succes":false,"message":"Url Empty"});
    }
}