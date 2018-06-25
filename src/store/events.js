const distanceExamples = () => {
  return [...Array(3).keys()].map(i => ({
    title: '' + i + '0 km',
    limit: 100,
    price: i * 100,
    prices: {
      '2018-01-01': i * 200,
      '2018-02-01': i * 300
    }
  }))
}

const eventTypes = ['run', 'triathlon', 'rogain', 'orienting']

const exampleData = () => {
  return [...Array(5).keys()].map(i => {
    return {
      id: i,
      title: 'Event #' + i,
      date: new Date(2018, i, 15),
      description: 'Description ' + i + '. Ut eget dui volutpat, suscipit tellus eu, efficitur erat. Nulla.',
      logoURL: null,
      useGender: true,
      useAge: true,
      priceSteps: ['2018-01-01', '2018-02-01'],
      distances: distanceExamples(),
      type: eventTypes[Math.floor(Math.random() * eventTypes.length)]
    }
  })
}

export default {
  namespaced: true,
  state: {
    all: exampleData(),
    loading: false
  },
  mutations: {
    set (state, events) {
      state.all = events
    }
  },
  getters: {
    getByID: (state) => (id) => {
      return state.all.find(event => event.id.toString() === id.toString())
    },
    getReadableType: (state) => (event) => {
      switch (event.type) {
        case 'run': return 'Бег'
        case 'triathlon': return 'Триатлон'
        case 'rogain': return 'Рогейн'
        case 'orienting': return 'Ориентирование'
      }
    }
  },
  actions: {
    load ({ commit }, force = false) {
      if (!force && this.state.events.all.length > 0) {
        return
      }

      console.log('Loading events.')
    }
  }
}
