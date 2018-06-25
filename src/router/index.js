import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

import EventList from '@/views/event_list'
import Event from '@/views/event'
import EventForm from '@/views/event_form'
import EventCheckpoints from '@/views/event_checkpoints.vue'
import EventProcess from '@/views/event_process.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'root',
      component: EventList
    },
    {
      path: '/event/:eventID',
      component: Event,
      name: 'event'
    },
    {
      path: '/event/:eventID/edit',
      name: 'editEvent',
      component: EventForm
    },
    {
      path: '/event/:eventID/checkpoints',
      name: 'checkpoints',
      component: EventCheckpoints
    },
    {
      path: '/event/:eventID/process',
      name: 'process',
      component: EventProcess
    },
    { path: '*', redirect: '/' } // Catch all and redirect to root
  ]
})
