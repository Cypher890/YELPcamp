const mongoose = require('mongoose')
const cities = require('./cities')
const { places, descriptors } = require('./seedHelpers')
const Campground = require('../models/campground')

mongoose.connect('mongodb://localhost:27017/yelp-camp')

const db = mongoose.connection

db.on("error", console.error.bind(console, "connection error:"))
db.once("open", () => {
    console.log("Database connected")
})

const sample = array => array[Math.floor(Math.random() * array.length)]


const seedDB = async () => {
    await Campground.deleteMany({})
    for (let i = 0; i < 300; i++) {
        const random1000 = Math.floor(Math.random() * 1000)
        const price = Math.floor(Math.random() * 20) + 10
        const camp = new Campground({
            author:'62fe1e9a2918173647db2743',
            location: `${cities[random1000].city}, ${cities[random1000].state}`,
            title: `${sample(descriptors)} ${sample(places)}`,
            //image: 'https://source.unsplash.com/collection/483251',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem dolorem recusandae ratione blanditiis doloribus quod quae iusto. Placeat earum sequi libero quam numquam praesentium perferendis quibusdam. Numquam perspiciatis dolorum maiores.',
            price,
            geometry:{
              type: "Point",
              coordinates:[
                cities[random1000].longitude,
                cities[random1000].latitude
              ]
            },
            images:[
                {
                  url: 'https://res.cloudinary.com/cypher12/image/upload/v1661502517/YelpCamp/uaatmprknmxubuqfwjx3.jpg',
                  filename: 'YelpCamp/uaatmprknmxubuqfwjx3',
        
                },
                {
                  url: 'https://res.cloudinary.com/cypher12/image/upload/v1661502519/YelpCamp/qw9xbi1y9r9alzqysn2q.jpg',
                  filename: 'YelpCamp/qw9xbi1y9r9alzqysn2q',
        
                },
                {
                  url: 'https://res.cloudinary.com/cypher12/image/upload/v1661502524/YelpCamp/fq8l1yx03mdlcqj64tw5.jpg',
                  filename: 'YelpCamp/fq8l1yx03mdlcqj64tw5',
        
                }
              ]
        })
        await camp.save()
    }
}

seedDB().then(() => {
    mongoose.connection.close()
})