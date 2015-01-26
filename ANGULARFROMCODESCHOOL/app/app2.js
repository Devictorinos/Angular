(function() {

    var app = angular.module('store', ['store-products']);

/*    app.controller("StoreController", function(){
        this.products = gems;
    });*/
app.controller("StoreController",['$http', function($http){
       var store = this;
       store.products = [];

       $http.get('products.json').success(function(data){

            store.products = data;
            
       });
    }]);


    app.controller('ReviewController', function () {
        this.review = {};

        this.addReview = function (products) {
            this.review.createOn = Date.now();
            products.reviews.push(this.review);
            this.review = {};
        };


    });

/*
    var gems = [
        {
            name: 'Dodecahedron',
            price: 2.95,
            description: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed sapien iaculis, imperdiet quam et, finibus erat. Nunc scelerisque leo et diam dignissim, sagittis blandit nibh ullamcorper. Maecenas vestibulum laoreet mollis. Sed elementum, metus laoreet vehicula sodales, lacus diam eleifend diam, eget ultricies nibh libero id lectus. Praesent sit amet nisl a enim fermentum gravida. Nullam molestie malesuada ex. Proin molestie dui sit amet dui volutpat, sed imperdiet leo vehicula. Proin ut nisi est. Pellentesque quis lectus vitae neque suscipit consectetur sed sit amet urna. Curabitur elementum eget ex et rutrum. Integer dui tellus, pretium sit amet diam in, lobortis venenatis ligula. Sed sed ante non tortor pharetra commodo. Aenean diam ante, semper nec dignissim quis, faucibus sed massa. Etiam diam diam, lacinia non nisi at, elementum egestas tellus. Nullam sit amet consequat mi. Mauris et porttitor tellus.',
            canPurchase: true,
            soldOut: false,
            images: [
                
                    'download.jpg',
                    'vico.jpg'       
            ],
            reviews: [
                {
                    stars: 5,
                    body: "i love product",
                    author: "viktorlubchuk@gmail.com"
                },
                {
                    stars: 10,
                    body: "i love product",
                    author: "lubchuk@gmail.com"
                },
                {
                   stars: 15,
                    body: "i love product",
                    author: "viktor@gmail.com" 
                }
            ]

        },
        {
            name: 'Personal Gem',
            price: 5.95,
            description: ' Sed facilisis orci et volutpat scelerisque. Quisque pulvinar congue erat sit amet vehicula. Nunc suscipit sem ac dapibus aliquam. Proin blandit mi non nulla pharetra volutpat. Donec consectetur mattis dictum. Fusce iaculis scelerisque mollis. Proin quis egestas dui. Pellentesque eleifend orci ut quam consequat dictum. Phasellus sem neque, volutpat id pretium vel, venenatis at nisl. Sed vel euismod nisi. Aenean sit amet mattis dolor. Nulla gravida purus neque, et vestibulum leo sagittis nec. Duis nisi augue, sagittis a sem vel, laoreet dignissim diam. Nam gravida laoreet condimentum. Sed hendrerit faucibus purus in tincidunt',
            canPurchase: true,
            soldOut: false,
            images: [
                   'download.jpg',
                    'vico.jpg'
            ],
            reviews: [
                {
                    stars: 15,
                    body: "i love product",
                    author: "viktorlubchuk@gmail.com"
                },
                {
                    stars: 12,
                    body: "i love product",
                    author: "lubchuk@gmail.com"
                },
                {
                   stars: 14,
                    body: "i love product",
                    author: "viktor@gmail.com" 
                }
            ]

        },
        {
            name: ' Gem',
            price: 5,
            description: ' Aenean eu tortor laoreet, pretium quam luctus, vestibulum turpis. Vestibulum eget orci ullamcorper, pretium urna at, lacinia justo. Proin magna velit, malesuada at lorem at, porta sagittis massa. Praesent eget ante porta, porta lectus vel, posuere lacus. Mauris sapien nunc, molestie ornare ultricies in, pharetra quis orci. Phasellus eu nisi tristique, aliquam sapien ac, gravida neque. Donec placerat congue enim. Aenean in neque id leo consectetur placerat. Fusce tellus lacus, euismod in finibus pulvinar, mollis a est. Nunc est quam, congue in tellus a, sollicitudin scelerisque tellus. Quisque vel urna a tellus sollicitudin tempor at et ante. Fusce dictum orci ac lacus placerat, et volutpat nisi facilisis. Vestibulum eu eros non quam bibendum fermentum. Sed tristique ultricies consectetu',
            canPurchase: true,
            soldOut: false,
            images: [
                
                    'download.jpg',
                    'vico.jpg'             

            ],
            reviews: []
        },
        {
            name: ' Jem',
            price: 8,
            description: ' Aenean eu tortor laoreet, pretium quam luctus, vestibulum turpis. Vestibulum eget orci ullamcorper, pretium urna at, lacinia justo. Proin magna velit, malesuada at lorem at, porta sagittis massa. Praesent eget ante porta, porta lectus vel, posuere lacus. Mauris sapien nunc, molestie ornare ultricies in, pharetra quis orci. Phasellus eu nisi tristique, aliquam sapien ac, gravida neque. Donec placerat congue enim. Aenean in neque id leo consectetur placerat. Fusce tellus lacus, euismod in finibus pulvinar, mollis a est. Nunc est quam, congue in tellus a, sollicitudin scelerisque tellus. Quisque vel urna a tellus sollicitudin tempor at et ante. Fusce dictum orci ac lacus placerat, et volutpat nisi facilisis. Vestibulum eu eros non quam bibendum fermentum. Sed tristique ultricies consectetu',
            canPurchase: true,
            soldOut: false,
            reviews: []
        },
        {
            name: ' Apple',
            price: 23.66,
            description: ' Aenean eu tortor laoreet, pretium quam luctus, vestibulum turpis. Vestibulum eget orci ullamcorper, pretium urna at, lacinia justo. Proin magna velit, malesuada at lorem at, porta sagittis massa. Praesent eget ante porta, porta lectus vel, posuere lacus. Mauris sapien nunc, molestie ornare ultricies in, pharetra quis orci. Phasellus eu nisi tristique, aliquam sapien ac, gravida neque. Donec placerat congue enim. Aenean in neque id leo consectetur placerat. Fusce tellus lacus, euismod in finibus pulvinar, mollis a est. Nunc est quam, congue in tellus a, sollicitudin scelerisque tellus. Quisque vel urna a tellus sollicitudin tempor at et ante. Fusce dictum orci ac lacus placerat, et volutpat nisi facilisis. Vestibulum eu eros non quam bibendum fermentum. Sed tristique ultricies consectetu',
            canPurchase: true,
            soldOut: false,
            reviews: []
        },
        {
            name: ' Lemon',
            price: 88.19,
            description: ' Aenean eu tortor laoreet, pretium quam luctus, vestibulum turpis. Vestibulum eget orci ullamcorper, pretium urna at, lacinia justo. Proin magna velit, malesuada at lorem at, porta sagittis massa. Praesent eget ante porta, porta lectus vel, posuere lacus. Mauris sapien nunc, molestie ornare ultricies in, pharetra quis orci. Phasellus eu nisi tristique, aliquam sapien ac, gravida neque. Donec placerat congue enim. Aenean in neque id leo consectetur placerat. Fusce tellus lacus, euismod in finibus pulvinar, mollis a est. Nunc est quam, congue in tellus a, sollicitudin scelerisque tellus. Quisque vel urna a tellus sollicitudin tempor at et ante. Fusce dictum orci ac lacus placerat, et volutpat nisi facilisis. Vestibulum eu eros non quam bibendum fermentum. Sed tristique ultricies consectetu',
            canPurchase: true,
            soldOut: false,
            reviews: []
        }
    ];
*/
})();