var app = new Vue({
    el: '#navbar',
    data: {
        isCollapsed: false
    }, 
});

var app = new Vue({
    el: '#slideshow',
    data: {
        images: [
            { src: './res/IMG_7341.jpg', alt: 'Image 1' },
            { src: './res/IMG_7341.jpg', alt: 'Image 2' }
        ],
        currentIndex: 0
    },
    computed: {
        currentImage: function() {
         return this.images[this.currentIndex];
        }
    },
    methods: {
        nextImage: function() {
            this.currentIndex = (this.currentIndex + 1) % this.images.length;
        }
    }
});
