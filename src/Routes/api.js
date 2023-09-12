const express=require('express');

const router=express.Router();

const blogControllers=require('../Controllers/blogController');
const commentController=require('../Controllers/commentController');
const messageController=require('../Controllers/messageController');
const portfolioController=require('../Controllers/portfolioController');
const productController=require('../Controllers/productController')
// this is post routing
router.get("/one",blogControllers.read);
router.get("/two",blogControllers.create);
router.get("/three",blogControllers.delete);
router.get("/four",blogControllers.update);

router.get("/five",commentController.read);
router.get("/six",commentController.create);
router.get("/seven",commentController.delete);
router.get("/eight",commentController.update);

router.get("/nine",messageController.read);
router.get("/ten",messageController.create);
router.get("/eleven",messageController.delete);
router.get("/twelve",messageController.update);

router.get("/thirteen",portfolioController.read);
router.get("/fourteen",portfolioController.create);
router.get("/fifteen",portfolioController.delete);
router.get("/sixteen",portfolioController.update);

router.get("/seventeen",productController.read);
router.get("/eighteen",productController.create);
router.get("/nineteen",productController.delete);
router.get("/twenty",productController.update);

module.exports=router;