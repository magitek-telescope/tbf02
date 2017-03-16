new Vue({
  el: "#app",
  data(){
    return {
      time: 1
    }
  },
  created(){
    setInterval(()=>{
      this.time++;
      console.log(this.time);
    }, 1000);
  }
});