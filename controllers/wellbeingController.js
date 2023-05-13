const blogDAO = require('../models/blogModel');
const db = new blogDAO();
db.init();

const goalsDAO = require('../models/goalsModel');
const gdb = new goalsDAO();
gdb.init();

const userDAO = require('../models/userModel');


exports.landing_page = function (req, res) {
    res.render('landing', {});
}

exports.logged_main = function (req, res) {
    db.getAllPosts()
        .then((list) => {
            res.render('main', {
                name: "everything",
                posts: list
            });
        })
        .catch((err) => {
            console.log("promise rejected", err);
        });
}

exports.show_section = function (req, res) {
    console.log('Showing sections posts', req.params.section);
    let sec = req.params.section;
    db.getPostsBySection(sec).then((posts) => {
        res.render('main', {
            name: sec,
            'posts': posts
        });
    }).catch((err) => {
        console.log('error posts by section', err);
    });
}

exports.show_set_goals = function (req, res) {
    gdb.getAllGoals()
        .then((list) => {
            res.render('setGoals', {
                goals: list
            });
        })
        .catch((err) => {
            console.log("promise rejected", err);
        });
}

exports.add_goal = function (req, res) {
    console.log("processing add new goal controller");
    if (!req.body.goal) {
        res.status(400).send("Entries must have a goal.");
        return;
    }
    gdb.addGoal(req.body.goal, req.body.repeat);
    res.redirect("/set");
}

exports.show_login = function (req, res) {
    res.render("user/login");
};

exports.show_register = function (req, res) {
    res.render("user/register");
};

exports.handle_login = function (req, res) {
    res.redirect("/main");
};

exports.new_user = function (req, res) {
    let user = req.body.username;
    let password = req.body.pass;

    if (!user || !password) {
        res.send(401, "no user or no password");
        return;
    }
    userDAO.lookup(user, function (err, u) {
        if (u) {
            res.send(401, "User exists:", user);
            return;
        }
        userDAO.create(user, password);
        console.log("register user", user, "password", password);
        res.redirect("/login");
    });
};

exports.logout = function (req, res) {
    res.clearCookie("jwt").status(200).redirect("/");
};