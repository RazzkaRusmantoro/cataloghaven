const express2 = require('express');
const router = express2.Router();
const cors2 = require("cors");   
const { registerUser, loginUser, forgotPassword, resetPassword, getProfile, updatePassword, updateProfile, updateProfilePicture, logoutUser, getAllUsers,
    getUser, deleteUser
 } = require('../controllers/authController');

const { isAuthenticatedUser } = require('../middlewares/auth');


// User registration
router.route('/register').post(registerUser);

// User login
router.route('/login').post(loginUser);

// Forgot Password
router.route('/password/forgot').post(forgotPassword);
router.route('/password/reset/:token').put(resetPassword);

// User profile (requires authentication)
router.route('/profile').get(isAuthenticatedUser, getProfile);

//  Update Password
router.route('/password/update').put(isAuthenticatedUser, updatePassword);

router.route('/profile/update').put(isAuthenticatedUser, updateProfile);

router.route('/profile/update/avatar').put(isAuthenticatedUser, updateProfilePicture);

// User logout (optional)
router.route('/logout').get(logoutUser);

// Admin Routes
// Get All Users

router.route('/admin/users').get(getAllUsers);

router.route('/admin/user/:id').get(getUser).delete(deleteUser);

module.exports = router;