// const {nanoid} = require('nanoid');
const Url = require("../models/url");

//depreceated package ndd upgraded to esModule
let nanoid;
(async () => {
    const nanoidModule = await import('nanoid');
    nanoid = nanoidModule.nanoid;
})();

const generateCode = async (req,res)=>{
    console.log("generateCode");
    const body = req.body;
    if(!body.url){
        return res.status(400).json({error: "url is required"});
    }
    const shortid = nanoid(10);
    const urlLink = new Url({
        id_short: shortid,
        url: body.url,
        totalClicks:[],
    });
    urlLink.save();
    return res.status(200).json({data: urlLink.id_short });
}

const redirectUrl = async (req,res)=>{
    const shortid = req.params.shortid;
    console.log("date "+Date.now());
    const timestamp = Date.now(); 
    const dateObj = new Date(timestamp); 
    const year = dateObj.getFullYear(); 
    const month = String(dateObj.getMonth() + 1).padStart(2, '0'); 
    const day = String(dateObj.getDate()).padStart(2, '0'); 
    const formattedDate = `${year}-${month}-${day}`;
    const loged = await Url.findOneAndUpdate({id_short: shortid},
        {$push: 
            {totalClicks: 
                {timeStops: formattedDate}
            }
        }
    );
    if(!loged){
        return res.status(404).json({error: "Url not found"});
    }
    res.redirect(loged.url);
}

const analyticsUrl = async (req,res)=>{
    const shortid = req.params.shortid;
    const url = await Url.findOne({id_short: shortid});
    if(!url){
        return res.status(404).json({error: "Url not found"});
    }
    return res.status(200).json({url});
}


module.exports = {generateCode , redirectUrl ,analyticsUrl};