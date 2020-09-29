import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../components/HelloWorld'
import TypeSelect from '../components/type-select/index'
import Photo from '../pages/photo/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/type-select',
      name: 'TypeSelect',
      component: TypeSelect
    },
    {
      path: '/photo',
      name: 'Photo',
      component: Photo
    }
  ]
})
