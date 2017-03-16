page_1 = page_base.extend({
  template: document.querySelector("#page").innerHTML,
  data(){
    return {
      name: "Page 1"
    }
  },
  methods: {
    initialize(){
      alert(`This page is ${this.name}`);
    }
  }
})