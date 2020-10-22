const express = require("express");
const router = express.Router();

const User = require("../models/User");

router.patch("/profile", (req, res, next) => {
  console.log(req.body);
  console.log(req.session.currentUser);
  User.findByIdAndUpdate(req.session.currentUser, updateValues, { new: true })
  .then((userDocument) => {
    res.status(200).json(userDocument);
  })
  .catch((error) => {
    res.status(500).json(error);
  });
});
  // Mettre à jour le user dans lq bqse de donnée et renvoyer le user a jour



  router.post("/profile", (req, res, next) => {
    console.log('post', req.body)
    User.create(req.body)
    .then((userDocument) => {
      res.status(201).json(userDocument)
    })
    .catch(next);
  });
  

router.get("/profile",(req,res,next) =>
{
    const id = req.session.currentUser;
    User.findById(id)
      .then((userDocument) => {
        res.status(200).json(userDocument);
      })
      .catch(next);
})

module.exports = router;
