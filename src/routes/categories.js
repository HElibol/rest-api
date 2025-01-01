const express = require('express');
const router = express.Router();
const Categories = require("../models/Categories");
const Response = require("../bin/Response");
const CustomError = require("../bin/Error");
const Enum =  require("../config/Enum");

router.get('/', async (req, res) => {
  try {
    const categories = await Categories.find({});

    res.status(200).json(Response.successResponse(categories));

  } catch (err) {
    res.json(Response.errorResponse(err))
  }
});

router.post("/", async (req, res) => {
  let body = req.body;
  try{

    if(!body.name) throw new CustomError(Enum.HTTP_CODES.BAD_REQUEST,"Validation Error", "name field be filled");

    let category = new Categories({
      name: body.name,
      is_active: true,
      created_by: req.user?.id
    })

    await category.save();

    res.status(Enum.HTTP_CODES.CREATED).json(category);

  }catch(err){
    let errorResponse = Response.errorResponse(err);
    res.status(errorResponse.code).json(errorResponse)

  }
})

router.put("/", async (req, res) => {
  const body = req.body;
  try{
    console.log(body)
    const newData = await Categories.findOneAndUpdate(
      {_id: body._id},
      {
        is_active: body.is_active

      },
      { new: true }
    )

    console.log(newData);
    
    res.send("test");



  }catch(err){
    res.send(err)
  }
});

module.exports = router;
