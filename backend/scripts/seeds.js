const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/local');
require('../models/User')
require('../models/Item')
var User = mongoose.model("User");
var Item = mongoose.model("Item");

function seeds() {
    const user = new User();
    user.username = 'seeduser'
    user.email = 'seeduser@gmail.com'
    user.setPassword('fakePassword');

    user
        .save()
        .then(function () {
            for (let i = 0; i < 30; i++) {
                var item = new Item({
                    slug: `seed-item-mock${i}`,
                    title: `seed-item-mock-${i}`
                });
                item.seller = user;
                item.save().then(function () {
                    console.log('done')
                }).catch(e => console.log(e));
            }


        })
        .catch((e) => console.log(e));

};
seeds();
