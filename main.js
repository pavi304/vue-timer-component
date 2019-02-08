var app = new Vue ({
  el: '#app' ,
  data: {
    now: Date(),
    nowTime: 0,
    dDay: new Date("2019-04-30")
  },
  methods: {
    TimeToday(){
      this.nowTime = new Date().toLocaleTimeString();
    }
  }
})
