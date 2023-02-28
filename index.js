var app = new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue!'
    },

    data() {
        return {
          isMobile: false
        }
    },

    created() {
        window.addEventListener('resize', this.checkWindowSize)
        this.checkWindowSize()
    },
    methods: {
        checkWindowSize() {
          this.isMobile = window.innerWidth <= 768 // adjust the breakpoint as needed
        }
    }
      
  })