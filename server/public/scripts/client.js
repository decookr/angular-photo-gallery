var app = angular.module('PhotosApp', []);
app.controller('PhotoController', function () {
    var self = this;
    var clicks = 0;

    self.photosArray = [
        {
            name: 'Family',
            url: '/images/family.jpg',
            text: 'Family is the most important thing in the world to me'
        },
        {
            name: 'Amy',
            url: '/images/amy.jpg',
            text: 'My wife, Amy, is my best friend and my favorite person in the entire world'
        },
        {
            name: 'Noah',
            url: '/images/noah.jpg',
            text: 'My baby boy, Noah, brings me so much laughter and joy'
        },
        {
            name: 'Dad',
            url: '/images/dad.jpg',
            text: 'My dad passed away in 2010, but his influence still guides me in every decision I make'
        },
        {
            name: 'Mom',
            url: '/images/mom.jpg',
            text: 'My mom is one of the most loving and supportive people I know'
        },
        {
            name: 'Drums',
            url: '/images/drums.jpg',
            text: 'Drumming is one of my favorite hobbies'
        }
    ];


});
