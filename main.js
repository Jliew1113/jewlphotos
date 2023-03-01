var app = new Vue({
    el: '#app',
    data: {
      showMenu: false
    },
    methods: {
      toggleMenu: function() {
        this.showMenu = !this.showMenu;
      }
    }
  })  

var app = new Vue({
    el: '#navbar',
    data: {
        isCollapsed: false
    }, 
});

