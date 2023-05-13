const express = require('express');
const router = express.Router();
const controller = require('../controllers/wellbeingController');
const {login} = require('../auth/auth');
const {verify} = require('../auth/auth');

router.get('/login', controller.show_login);
router.get('/register', controller.show_register);
router.post('/login', login, controller.handle_login);
router.post('/register', controller.new_user);
router.get('/', controller.landing_page);
router.get("/main", verify, controller.logged_main);
router.get('/main/:section', controller.show_section);
router.get('/set', verify, controller.show_set_goals);
router.post('/set', verify, controller.add_goal);
router.get("/logout", controller.logout);




router.use(function (req, res) {
    res.status(404);
    res.type('text/plain')
    res.send('Oops! 404 Not found.');
})

/*
router.use(function(err, req, res, next){
    res.status(500);
    res.type('text/plain')
    res.send('Oops! Server Error.');
})
*/
module.exports = router;