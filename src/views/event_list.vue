<template>
  <div class="row mb-2">
    <div class="col-md-6" v-for='event in events' :key='event.id'>
      <div class="event flex-md-row mb-4 box-shadow h-md-250">
        <div class="event-body d-flex flex-column align-items-start">
          <strong :class="['d-inline-block', 'mb-2', 'event-' + event.type ]">{{ getEventReadableType(event) }}</strong>
          <h3 class="mb-0">
            <router-link class='text-dark' tag='a' :to="{ name: 'event', params: { eventID: event.id } }">
              {{ event.title }}
            </router-link>
          </h3>
          <div class="mb-1 text-muted">{{ event.date }}</div>
          <div class="event-text mb-auto">{{ event.description }}</div>
          <router-link tag='a' :to="{ name: 'event', params: { eventID: event.id } }">
            Подробнее...
          </router-link>
        </div>
        <img class="card-img-right flex-auto d-none d-lg-block" data-src="holder.js/200x250?theme=thumb" alt="Thumbnail [200x250]" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22200%22%20height%3D%22250%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20200%20250%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1643763f5b1%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A13pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1643763f5b1%22%3E%3Crect%20width%3D%22200%22%20height%3D%22250%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2255.609375%22%20y%3D%22131%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" data-holder-rendered="true" style="width: 200px; height: 250px;">
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState, mapGetters } from 'vuex'

export default {
  computed: {
    ...mapState({
      events: state => state.events.all,
      eventsLoading: state => state.events.loading
    }),
    ...mapGetters({
      getEventReadableType: 'events/getReadableType'
    })
  },
  methods: {
    ...mapActions({ loadEvents: 'events/load' })
  },
  created () { this.loadEvents() }
}
</script>

<style type='scss' scoped>
.events-list {
  box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, .05)
}

.event-body {
  flex: 1 1 auto;
  padding: 1.25rem;
}

.event {
  position: relative;
  display: flex;
  word-wrap: break-word;
}

.event-text {
  font-family: Helvetica, Arial, sans-serif;
}

h3 {
  font-family: Georgia, 'Times New Roman', Times, serif;
}

</style>
