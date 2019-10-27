import Vue from 'vue'
import Router from 'vue-router'
import schedule from './views/schedule.vue'
import announcement from './views/announcement.vue'
import calendar from './views/calendar.vue'
import detail from './views/detail.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'schedule',
      component: schedule
    },
    {
      path: '/announcement',
      name: 'announcement',
      component: announcement
    },
    {
      path: '/calendar',
      name: 'calendar',
      component: calendar
    },
    {
      path: '/detail',
      name: 'detail',
      component: detail
    }
  ]
})
