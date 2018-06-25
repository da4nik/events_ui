<template>
    <section id='event-list'>
        <h1>События</h1>
        <div class='event' v-for='event in events' :key='event.id'>
          <router-link tag='a' :to="{ name: 'event', params: { eventID: event.id } }">
            <div class='title'>{{ event.title }}</div>
            <div class='date'>{{ event.date }}</div>
            <div class='description'>{{ event.description }}</div>
          </router-link>
        </div>
    </section>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  computed: {
    ...mapState({
      events: state => state.events.all,
      eventsLoading: state => state.events.loading
    })
  },
  methods: {
    ...mapActions({ loadEvents: 'events/load' })
  },
  created () { this.loadEvents() }
}
</script>

<style type='scss' scoped>
.event {
  cursor: pointer;
  border: 1px solid #EEE;
  display: inline-block;
  margin: 0 5px;
  padding: 5px 10px;
}
</style>
