import VueRouter from "vue-router"
import ItemList from "../components/item/ItemList"
import Vue from 'vue'

Vue.use(VueRouter)

export default new VueRouter({

  routes: [
    {
      path: '/item/list',
      component: ItemList,
      alias: '/'
    },

  ]

})
