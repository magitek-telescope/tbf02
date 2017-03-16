Vue.component("my-button", {
  template: document.querySelector("#my-button").innerHTML,
  methods: {
    onClick(){
      this.$emit("click_button");
    }
  }
})