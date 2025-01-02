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
  try {

    if (!body._id) throw new CustomError(Enum.HTTP_CODES.BAD_REQUEST, i18n.translate("COMMON.VALIDATION_ERROR_TITLE", req.user.language), i18n.translate("COMMON.FIELD_MUST_BE_FILLED", req.user.language, ["_id"]));

    let updates = {};

    if (body.name) updates.name = body.name;
    if (typeof body.is_active === "boolean") updates.is_active = body.is_active;

    await Categories.updateOne({ _id: body._id }, updates);

    AuditLogs.info(req.user?.email, "Categories", "Update", { _id: body._id, ...updates });

    res.json(Response.successResponse({ success: true }));

} catch (err) {
    let errorResponse = Response.errorResponse(err);
    res.status(errorResponse.code).json(errorResponse);
}
});

module.exports = router;
