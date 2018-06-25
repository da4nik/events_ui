<template>
  <section id='event'>
    <div v-show='isAdmin()'>
      <router-link :to="{ name: 'editEvent', params: { eventID: event.id } }">
        Редактировать
      </router-link>
      <router-link :to="{ name: 'process', params: { eventID: event.id } }">
        Судейство
      </router-link>
      <router-link :to="{ name: 'checkpoints', params: { eventID: event.id } }">
        Отметки
      </router-link>
    </div>
    <h1>{{ event.title }}</h1>
    <p>{{ event.description }}</p>
    <registrations />
    <registration-form />
    <router-link :to="{ name: 'root' }">К списку событий</router-link>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'

import RegistrationForm from '@/components/registration_form'
import Registrations from '@/components/registrations'

export default {
  components: {
    'registration-form': RegistrationForm,
    'registrations': Registrations
  },
  computed: {
    ...mapGetters({
      getEventByID: 'events/getByID'
    }),
    event () {
      return this.getEventByID(this.$route.params.eventID)
    }
  },
  methods: {
    isAdmin: () => { return true }
  }
}
</script>

<style type='scss' scoped>

</style>
