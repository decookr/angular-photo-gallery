var app = angular.module('PhotosApp', []);
app.controller('PhotoController', function (){
    console.log('PhotoController has been loaded');
    var self = this;
    self.message = 'Hello world!!';
    var clicks = 1;
    
    self.photosArray =[ 
        {
           name: 'Family',
           url: '/images/family.jpg',
           text: 'family is the most important thing in the world to me'
        },
        {
            name: 'Drums',
            url: '/images/drums.jpg',
            text: 'drumming is one of my favorite hobbies'
        }
    ];

    self.addClicks=function(){
        self.buttonClicks = clicks++;
       console.log('clicks', clicks);
    }

    self.addText=function(){
        self.imageClick = self.photosArray.text;
        console.log('image clicked', self.photosArray.text);
        
    }

});

