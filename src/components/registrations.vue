<template>
  <section id='registrations' class='my-5'>
    <h5>Список участников</h5>
    <table class="table table-striped table-hover table-sm">
      <thead>
        <th scope='col'>#</th>
        <th scope='col'>Имя</th>
        <th scope='col'>Возраст</th>
        <th scope='col'>Дистанция</th>
      </thead>
      <tbody>
        <tr v-for='reg in registrations' :key='reg.id'>
          <td scope='row'>{{ reg.id }}</td>
          <td>{{ reg.firstName }} {{ reg.lastName }}</td>
          <td>{{ reg.age }}</td>
          <td></td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  props: {
    event: {
      type: Object,
      required: true
    }
  },
  computed: {
    ...mapGetters({
      getRegistrationsByEventID: 'registrations/getByEventID'
    }),
    registrations () {
      return this.getRegistrationsByEventID(this.event.id)
    }
  }
}
</script>
