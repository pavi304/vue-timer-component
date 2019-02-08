var app = new Vue ({
  el: '#app' ,
  data: {
    now: Date(),
    nowTime: 0
  },
  methods: {
    TimeToday(){
      this.nowTime = new Date().getTime();
    }
  }
})
