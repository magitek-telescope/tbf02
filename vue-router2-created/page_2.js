page_2 = page_base.extend({
  template: document.querySelector("#page").innerHTML,
  data(){
    return {
      name: "Page 2"
    }
  },
  methods: {
    initialize(){
      console.log(`This page is ${this.name}`);
    }
  }
})