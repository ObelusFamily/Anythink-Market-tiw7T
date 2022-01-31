const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/local');
require('../models/User')
require('../models/Item')
var User = mongoose.model("User");
var Item = mongoose.model("Item");

async function seeds() {
    try{
        for (let i = 0;i < 200; i++) {
            const user = new User();
            user.username = `kobyDamariSeedingDb${i}`
            user.email = `kobyDamariSeedingDb${i}@gmail.com`
            user.setPassword('fakePassword');
            await user.save();
            console.log('user created')
            var item = new Item({
                slug: `gucci--${i}`,
                title: `gucchip-${i}`
            });
            item.seller = user;
            await item.save()
        }
        console.log('finished creating records')
    }catch (e){
        console.log(e)
    }
return;
};
seeds().then(()=>process.exit(0));
