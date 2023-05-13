const Database = require('nedb');

class Goals {

    constructor(dbFilePath) {
        if (dbFilePath) {
            this.db = new Database({ filename: dbFilePath, autoload: true });
        } else {
            this.db = new Database();
        }
    }

    init() {
        this.db.insert({
            goal: 'Drink water',
            repeat: 'option1',
        });
        console.log('db entry GOAL inserted');

    }

    addGoal(goal, repeat) {
        var newG = {
            goal: goal,
            repeat: repeat,
        }
        console.log('Goal created', newG);
        this.db.insert(newG, function (err, doc) {
            if (err) {
                console.log('Error inserting document', subject);
            } else {
                console.log('document inserted into the database', doc);
            }
        })
    }

    getAllGoals() {
        return new Promise((resolve, reject) => {
            this.db.find({}, function (err, goals) {
                if (err) {
                    reject(err);
                } else {
                    resolve(goals);
                    console.log('function all() returns: ', goals);
                }
            })
        })
    }


}

module.exports = Goals;