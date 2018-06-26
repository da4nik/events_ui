const registrationsExample = () => {
  let result = {};

  [...Array(5).keys()].forEach(i => {
    result[i] = [...Array(5).keys()].map(n => {
      return {
        id: i + '-' + n,
        name: 'Super Athlete #' + n,
        age: 25,
        gender: 'm'
      }
    })
  })
  return result
}

export default {
  namespaced: true,
  state: {
    all: registrationsExample()
  },
  mutations: {
    add (state, registration) {
      state.all[registration.eventID] = registration
    }
  },
  getters: {
    getByEventID: (state) => (id) => {
      return state.all[id] || []
    }
  },
  actions: {
    load ({ commit }, { eventID, force }) {
      if (!force && this.state.events.all.length > 0) {
        return
      }

      console.log('Loading registrations.')
    },
    create ({ commit }, { eventID, registration }) {
      // apiRequest.registrations.create
      registration.eventID = eventID
      commit('add', registration)
    }
  }
}
