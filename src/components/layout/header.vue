<template>
  <header class='py-3'>
    <div class="row flex-nowrap justify-content-between align-items-center">
      <div class="col-4 pt-1">
        <a href="#" class="text-muted">Подписаться</a>
      </div>
      <div class="col-4 text-center">
        <router-link
          :to="{ name: 'root' }"
          class='text-dark header-text'>
            События
        </router-link>
      </div>
      <div class="col-4 d-flex justify-content-end align-items-center">
        <a href="#" class="btn btn-sm btn-outline-secondary">Войти</a>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>

header {
  line-height: 1;
  border-bottom: 1px solid #e5e5e5;

  .header-text {
    font-family: Georgia, 'Times New Roman', Times, serif;
    font-size: 2.25rem;
  }
}
</style>
