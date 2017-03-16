window.page_base = Vue.extend({
  beforeRouteEnter(_, __, next){
    next(vm=>vm.initialize());
  },
  methods:{
    initialize(){
      
    }
  }
});