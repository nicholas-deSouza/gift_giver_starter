const express = require("express");
const router = express.Router();


const voting = {
    cheese: 0,
    ham: 0
}


router.get("/", async(req, res, next) => {            
    res.status(200).json(voting)
  })

router.post("/:gift", async(req, res, next) => {            
    console.log(req.params);

    const giftName = req.params.gift

    if(voting[giftName] || voting[giftName] === 0){
        voting[giftName] +=1;
    }



    res.status(200).json(voting);
  })


  module.exports = router;
