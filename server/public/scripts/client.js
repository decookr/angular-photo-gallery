var app = angular.module('PhotosApp', []);

app.controller('PhotoController', function (){
    console.log('PhotoController has been loaded');
    var self = this;
    self.message = 'Hello world!!';

    self.photosArray =[ 
        {
           name: 'Family',
           url: '/images/family.jpg',
           count: 0,
        }
    ];
    
});