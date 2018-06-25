<template>
  <section id='event-form'>
    <h1>Редактирование события</h1>
    <fieldset>
      <legend>Общие переметры</legend>
      <div>
        <label for="event-title">Название</label>
        <input type='text' id='event-title' v-model='event.title'>
      </div>

      <div>
        <label for="event-description">Описание</label>
        <textarea id='event-description' v-model='event.description' />
      </div>

      <div>
        <label for="event-date">Дата события</label>
        <input type='text' id='event-date' v-model='event.date' />
      </div>

      <div>
        <input type='checkbox' id='event-use-gender' v-model='event.useGender' />
        <label for="event-use-gender">Использовать группы по полу</label>
      </div>

      <div>
        <input type='checkbox' id='event-use-age' v-model='event.useAge' />
        <label for="event-use-age">Использовать возрастные группы</label>
      </div>
    </fieldset>

    <fieldset>
      <legend>Дистанции</legend>
      <distance-form />
      <distances :event='event' />
    </fieldset>

    <fieldset v-show='event.useAge'>
      <legend>Возрастные группы</legend>
    </fieldset>

    <button type='button'>Сохранить</button>

    <router-link
      :to="{ name: 'event', params: { eventID: this.$route.params.eventID } }">

      Отменить
    </router-link>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'

import DistanceForm from '@/components/distance_form'
import Distances from '@/components/distances'

export default {
  components: {
    'distance-form': DistanceForm,
    'distances': Distances
  },
  data: () => ({ event: null }),
  computed: {
    ...mapGetters({
      getEventByID: 'events/getByID'
    })
  },
  created () {
    this.event = this.getEventByID(this.$route.params.eventID)
  }
}
</script>

<style lang="scss" scoped>

</style>
