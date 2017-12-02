var app = angular.module('PhotosApp', []);
app.controller('PhotoController', function (){
    console.log('PhotoController has been loaded');
    var self = this;
    self.message = 'Hello world!!';
    var clicks = 0;
    
    self.photosArray =[ 
        {
            id: 1,
            name: 'Family',
            url: '/images/family.jpg',
            text: 'family is the most important thing in the world to me'
        },
        {
            id: 2,
            name: 'Drums',
            url: '/images/drums.jpg',
            text: 'drumming is one of my favorite hobbies'
        }
    ];




});

