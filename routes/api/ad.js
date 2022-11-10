const router = require("express").Router();
const Ad = require("../../models/Ad");
const auth = require("../../middleware/auth");
const httpResponse = require("express-http-response");
let {
  OkResponse,
  BadRequestResponse,
  UnauthorizedResponse,
} = require("express-http-response");

router.post("/post", auth.isToken, auth.isUser, async (req, res, next) => {
  if (!req.body.ad) {
    return next(new BadRequestResponse("Post is required"));
  }
  let ad = new Ad(req.body.ad);
  ad.by = req.user._id;

  ad.save((err, post) => {
    if (err) {
      return next(new BadRequestResponse(err));
    }

    return next(new OkResponse(ad));
  });
});

module.exports = router;
