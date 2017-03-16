Vue.use(VueRouter);

const routes = [
  { path: '/', component: home},
  { path: '/pages/1', component: page_1 },
  { path: '/pages/2', component: page_2 }
];

const router = new VueRouter({routes});
new Vue({router}).$mount("#app");