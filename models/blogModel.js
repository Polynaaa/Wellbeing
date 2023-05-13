const Datastore = require('nedb');

class Blog {

    constructor(dbFilePath) {
        if (dbFilePath) {
            this.db = new Datastore({ filename: dbFilePath, autoload: true });
        } else {
            this.db = new Datastore();
        }
    }

    init() {
        this.db.insert({
            section: 'nutrition',
            title: 'Superfoods Unveiled: Unleashing the Potential of Natures Powerhouses',
            img: '/fruits.jpg',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac velit ante.',
            fullText: '',
            author: 'Name Surname'
        });
        console.log('db entry 1st post inserted');

        this.db.insert({
            section: 'nutrition',
            title: 'Navigating the Grocery Aisles: A Guide to Smart Food Choices',
            img: '/fru.jpg',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac velit ante.',
            fullText: 'tlaa tlaaa blaaaa, naaa naaaa naaaaa',
            author: 'Name Surname'
        });
        console.log('db entry 2nd post inserted');

        this.db.insert({
            section: 'nutrition',
            title: 'Fueling Your Body: The Power of Nutrient-Rich Foods',
            img: '/food.jpg',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac velit ante.',
            fullText: 'tlaa tlaaa blaaaa, naaa naaaa naaaaa',
            author: 'Name Surname'
        });

        this.db.insert({
            section: 'fitness',
            title: 'From Couch to Confidence: A Beginners Guide to Fitness',
            img: '/run.jpg',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac velit ante.',
            fullText: 'tlaa tlaaa blaaaa, naaa naaaa naaaaa',
            author: 'Name Surname'
        });

        this.db.insert({
            section: 'fitness',
            title: 'Breaking the Plateau: Strategies for Overcoming Fitness Challenges',
            img: '/pilates.jpg',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac velit ante.',
            fullText: 'tlaa tlaaa blaaaa, naaa naaaa naaaaa',
            author: 'Name Surname'
        });

        this.db.insert({
            section: 'mental',
            title: 'Self-Care for the Mind: Strategies to Cultivate Emotional Resilience',
            img: '/crazy.jpg',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac velit ante.',
            fullText: 'tlaa tlaaa blaaaa, naaa naaaa naaaaa',
            author: 'Name Surname'
        });

        this.db.insert({
            section: 'mental',
            title: 'Breaking the Stigma: Embracing Mental Health and Seeking Support',
            img: '/depr.jpg',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac velit ante.',
            fullText: 'tlaa tlaaa blaaaa, naaa naaaa naaaaa',
            author: 'Name Surname'
        });

        this.db.insert({
            section: 'fitness',
            title: 'Fitness Beyond the Gym: Fun and Effective Ways to Stay Active',
            img: '/cycle.jpg',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac velit ante.',
            fullText: 'tlaa tlaaa blaaaa, naaa naaaa naaaaa',
            author: 'Name Surname'
        });

        this.db.insert({
            section: 'mental',
            title: 'Mental Wellness 101: Nurturing Your Mind for a Balanced Life',
            img: '/smile.jpg',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac velit ante.',
            fullText: 'tlaa tlaaa blaaaa, naaa naaaa naaaaa',
            author: 'Name Surname'
        });
    }

    getAllPosts() {
        return new Promise((resolve, reject) => {
            this.db.find({}, function (err, posts) {
                if (err) {
                    reject(err);
                } else {
                    resolve(posts);
                    console.log('function all() returns: ', posts);
                }
            })
        })
    }

    getPostsBySection(sectionName) {
        return new Promise((resolve, reject) => {
            this.db.find({ 'section': sectionName }, function(err, posts) {
            if (err) {
                reject(err);
            } else {
                resolve(posts);
            console.log('getPostsBySection returns: ', posts);
        }
    })
})
}

}

module.exports = Blog;