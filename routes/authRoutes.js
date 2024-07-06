const express = require('express');
const router = express.Router();
const cors = require('cors')
const { test, RegisterUser, LoginUser, getProfile, addToWishlist, deleteWishlistItem} = require('../controllers/authControllers') ;

//middleware
router.use(
    cors({
        credentials : true,
        origin: 'http://localhost:5173'
    })

)

router.get('/',test)
router.post('/register', RegisterUser)
router.post('/login', LoginUser)
router.get('/profile',getProfile)
router.post('/wishlist',addToWishlist)
router.delete('/delete',deleteWishlistItem)

module.exports = router