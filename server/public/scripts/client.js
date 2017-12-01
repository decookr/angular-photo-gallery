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
        }
    ];

    self.addClicks=function(){
        self.buttonClicks = clicks++;
       console.log('clicks', clicks);
    }
});