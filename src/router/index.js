import Vue from "vue";
import Router from "vue-router";
import entry from "@/components/entry";
// import home from '@/components/home'
// import pro_detail from '@/components/pro_detail'
import index from "@/components/index/index";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "entry",
      component: entry
    },
    {
      path: "/index",
      name: "index",
      component: index
    }
    //   {
    //       path: '/home',
    //       name: 'home',
    //       component: home
    //   },
    //   {
    //       path: '/pro_detail/:product_id',
    //       name: 'pro_detail',
    //       component: pro_detail
    //   },
  ]
});
