/*
Challenge
1. Create a new class called AdvertisingChannel.
2. Inside the body of the class, set up a constructor method that
   takes data as a parameter.
3. Inside the constructor method, set up name, adViews, adClicks
   and conversion properties on "this".
*/

const adData = {
    facebook: {
        site: 'Facebook',
        adViews: 23400,
        clicks: 210,
        conversions: 5,
    },
    twitter: {
        site: 'Twitter',
        adViews: 23400,
        clicks: 192,
        conversions: 9,
    },
    instagram: {
        site: 'Instagram',
        adViews: 23400,
        clicks: 200,
        conversions: 2,
    }
}

class AdvertisingChannel {
    constructor(data){
        Object.assign(this, data)
    }
}
