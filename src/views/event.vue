<template>
  <section id='event' class='mt-3'>
    <h2 class="title">{{ event.title }}</h2>
    <div v-show='isAdmin()' class='actions pb-2 mb-3'>
      <router-link
        class='text-muted'
        :to="{ name: 'editEvent', params: { eventID: event.id } }">
        Редактировать
      </router-link>

      <router-link
        class='text-muted'
        :to="{ name: 'process', params: { eventID: event.id } }">
        Судейство
      </router-link>

      <router-link
        class='text-muted'
        :to="{ name: 'checkpoints', params: { eventID: event.id } }">
        Отметки
      </router-link>
    </div>
    <p class='my-3'>{{ event.description }}</p>
    <registrations :event='event'/>
    <registration-form />
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
.title {
  font-family: Georgia, 'Times New Roman', Times, serif;
}
</style>
