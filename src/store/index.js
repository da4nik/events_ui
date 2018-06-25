import Vue from 'vue'
import Vuex from 'vuex'

import events from './events'
import registrations from './registrations'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: { events, registrations }
})

export default store
