<template>
  <section id='distances'>
    <table>
      <thead>
        <tr>
          <th>Название</th>
          <th>Цена</th>
          <th v-for='step in event.priceSteps' :key='step'>
            с {{ step }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for='distance in event.distances' :key='distance.title'>
          <td>{{ distance.title }}</td>
          <td>{{ distance.price }}</td>
          <td v-for='step in event.priceSteps' :key='step'>
            {{ distance.prices[step] }}
          </td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script>
export default {
  props: {
    event: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
